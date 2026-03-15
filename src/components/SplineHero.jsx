import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import ParticleCanvas from './ParticleCanvas';

const SplineLazy = lazy(() => import('@splinetool/react-spline'));

const SCENE_URL = 'https://prod.spline.design/v3dE6ryl8VFzDyI9/scene.splinecode';
const TIMEOUT_MS = 5000;

// React Error Boundary — wraps Spline to catch render errors
class SplineErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return this.props.fallback;
        return this.props.children;
    }
}

// Fallback hero — particle canvas + CSS gradient (always looks great)
function HeroFallback() {
    return (
        <div className="absolute inset-0" style={{ background: 'var(--void)' }}>
            {/* Animated liquid gradient — native CSS, no Framer */}
            <div className="liquid-bg absolute inset-0" />
            {/* Particle canvas */}
            <ParticleCanvas className="absolute inset-0" opacity={0.5} />
            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(123,97,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,97,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
                }}
            />
            <div className="scan-line" />
        </div>
    );
}

export default function SplineHero() {
    const [splineLoaded, setSplineLoaded] = useState(false);
    const [useFallback, setUseFallback] = useState(false);
    const [canLoad, setCanLoad] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Capability check — skip Spline on low-end or no WebGL
        const isMobile = window.innerWidth < 768;
        const isLowEnd = navigator.hardwareConcurrency <= 2;
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        const noWebGL = !gl;

        if (isMobile || isLowEnd || noWebGL) {
            setUseFallback(true);
            return;
        }
        setCanLoad(true);
    }, []);

    useEffect(() => {
        if (!canLoad) return;
        // 5-second timeout fallback (as required)
        timeoutRef.current = setTimeout(() => {
            if (!splineLoaded) setUseFallback(true);
        }, TIMEOUT_MS);
        return () => clearTimeout(timeoutRef.current);
    }, [canLoad, splineLoaded]);

    const onSplineLoad = () => {
        clearTimeout(timeoutRef.current);
        setSplineLoaded(true);
    };

    if (useFallback) return <HeroFallback />;

    return (
        <div className="absolute inset-0">
            {/* Fallback always underneath while Spline loads */}
            <HeroFallback />
            {canLoad && (
                <SplineErrorBoundary fallback={null}>
                    <Suspense fallback={null}>
                        <SplineLazy
                            scene={SCENE_URL}
                            onLoad={onSplineLoad}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                                opacity: splineLoaded ? 1 : 0,
                                transition: 'opacity 1s ease',
                                pointerEvents: 'all',
                            }}
                        />
                    </Suspense>
                </SplineErrorBoundary>
            )}
        </div>
    );
}
