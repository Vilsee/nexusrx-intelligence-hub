import React, { createContext, useContext, useState } from 'react';

const ScanContext = createContext();

export const ScanProvider = ({ children }) => {
    const [report, setReport] = useState(null);
    const [history, setHistory] = useState([]);

    // Default Values
    const DEFAULT_SESSION_ID = '1acaad2c-7f28-49b5-802d-9cebb3254432';
    const DEFAULT_SHARE_ID = 'OpRgx4M3N--VhWMMGao-OXwM3thiduMwT4hQy7-2h2w';

    // Initialize from localStorage or defaults
    const [sessionId, setSessionId] = useState(() => {
        const saved = localStorage.getItem('ghs_session_id');
        if (!saved) {
            localStorage.setItem('ghs_session_id', DEFAULT_SESSION_ID);
            return DEFAULT_SESSION_ID;
        }
        return saved;
    });

    const [shareId, setShareId] = useState(() => {
        const saved = localStorage.getItem('ghs_share_id');
        if (!saved) {
            localStorage.setItem('ghs_share_id', DEFAULT_SHARE_ID);
            return DEFAULT_SHARE_ID;
        }
        return saved;
    });

    const updateSessionId = (id) => {
        setSessionId(id);
        localStorage.setItem('ghs_session_id', id);
    };

    const updateShareId = (id) => {
        setShareId(id);
        localStorage.setItem('ghs_share_id', id);
    };

    const shareUrl = `https://asi1.ai/chat/${sessionId}?channelInviteKey=${shareId}`;

    const generateMockReport = React.useCallback((id) => {
        const mockReport = {
            id: id || `REP-${Math.floor(Math.random() * 100000)}`,
            event_id: `GHS-${Date.now()}`,
            syndrome: 'ILI (Influenza-Like Illness)',
            affected_countries: [
                { code: 'IN', name: 'India', flag: '🇮🇳', cases: 847, confidence: 0.74, trend: 12 },
                { code: 'CN', name: 'China', flag: '🇨🇳', cases: 1204, confidence: 0.81, trend: -5 },
                { code: 'TH', name: 'Thailand', flag: '🇹🇭', cases: 312, confidence: 0.69, trend: 8 },
                { code: 'ID', name: 'Indonesia', flag: '🇮🇩', cases: 589, confidence: 0.77, trend: 20 }
            ],
            date_range: '2026-03-01 to 2026-03-10',
            confidence_score: 0.87,
            evidence_sources: [
                { name: 'Local Surveillance Node #442', url: '#' },
                { name: 'Hospital Alert System BR-9', url: '#' },
                { name: 'Open-Source Health Feed Correlation', url: '#' }
            ],
            response_tier: 'ACT',
            data_sovereignty_verified: true,
            syndrome_data: [
                { name: 'ILI', value: 87, fullMark: 100 },
                { name: 'Respiratory', value: 65, fullMark: 100 },
                { name: 'GI', value: 12, fullMark: 100 },
                { name: 'Haemorrhagic', value: 5, fullMark: 100 },
                { name: 'Neurological', value: 8, fullMark: 100 },
                { name: 'Unknown', value: 15, fullMark: 100 }
            ],
            historical_data: [
                { date: '2026-03-01', cases: 120 },
                { date: '2026-03-02', cases: 150 },
                { date: '2026-03-03', cases: 200 },
                { date: '2026-03-04', cases: 180 },
                { date: '2026-03-05', cases: 250 },
                { date: '2026-03-06', cases: 310 },
                { date: '2026-03-07', cases: 400 }
            ]
        };
        setReport(mockReport);
        setHistory(prev => [mockReport, ...prev].slice(0, 5));
        return mockReport;
    }, []);

    return (
        <ScanContext.Provider value={{
            report,
            setReport,
            history,
            generateMockReport,
            sessionId,
            updateSessionId,
            shareId,
            updateShareId,
            shareUrl
        }}>
            {children}
        </ScanContext.Provider>
    );
};

export const useScan = () => useContext(ScanContext);
