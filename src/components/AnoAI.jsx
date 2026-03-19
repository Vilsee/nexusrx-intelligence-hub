import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnoAI = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        varying vec2 vUv;

        // Aurora Shader Logic
        mat2 rotate2d(float angle) {
            return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        }

        float hash(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
        }

        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            vec2 shift = vec2(100.0);
            for (int i = 0; i < 5; ++i) {
                v += a * noise(p);
                p = rotate2d(0.5) * p * 2.0 + shift;
                a *= 0.5;
            }
            return v;
        }

        void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / min(iResolution.y, iResolution.x);
            
            float t = iTime * 0.2;
            vec3 color = vec3(0.0);
            
            for (int i = 0; i < 3; i++) {
                float id = float(i);
                vec2 p = uv;
                p.y += noise(vec2(p.x * 0.5, t * 0.1)) * 0.5;
                p.x += t * 0.05;
                
                float n = fbm(p * (2.0 + id * 0.5) + t);
                float line = smoothstep(0.4, 0.5, n) * smoothstep(0.6, 0.5, n);
                
                vec3 col = vec3(0.1, 0.8, 0.6);
                if (i == 1) col = vec3(0.2, 0.4, 0.9);
                if (i == 2) col = vec3(0.6, 0.2, 0.8);
                
                color += col * line * (1.0 - abs(uv.y)) * 0.5;
            }

            gl_FragColor = vec4(color, color.r + color.g + color.b);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId;
    const animate = () => {
      material.uniforms.iTime.value += 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      material.uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none opacity-40" />
  );
};

export default AnoAI;
