import React, { useState, useEffect } from 'react';

const LeafSVG = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill={color} width="100%" height="100%">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 7.05,10.67 9,12C11.5,13.72 15,14.6 15,14.6C15,14.6 14,13 12.5,12.5C11,12 8,11.5 8,11.5C8,11.5 12,8.5 17,8Z" />
    </svg>
);

const MapleSVG = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill={color} width="100%" height="100%">
        <path d="M12.98,22.5L11.53,15.77C9.37,16.31 7.28,16.64 5.37,16.65L7.75,13.72L5.47,13.43L8.03,11.08L6.4,10.66L9.6,8.23C9.07,7.17 8.35,6 7.42,4.6L10.36,6.33L10.69,3.8L12.42,6.58L13.88,4.19L14.77,6.86L16.44,5L16.27,7.6L18.77,9.66L17.13,10.2L19.43,12.06L17.27,12.38L19.46,14.88C18.23,14.88 16.44,14.71 14.28,14.23L12.98,22.5Z" />
    </svg>
);

export function FallingLeaves() {
    const [leaves, setLeaves] = useState<any[]>([]);

    useEffect(() => {
        const newLeaves = Array.from({ length: 15 }).map((_, i) => {
            const isMaple = Math.random() > 0.5;
            // Strict brown and orange colors
            const colors = ['#8B4513', '#D2691E', '#A0522D', '#CD853F', '#FF8C00', '#E67E22', '#F08967', '#4A2C11'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            return {
                id: i,
                left: Math.random() * 100 + 'vw',
                animationDuration: Math.random() * 5 + 5 + 's',
                animationDelay: Math.random() * 5 + 's',
                type: isMaple ? 'maple' : 'leaf',
                color: color,
                size: Math.random() * 15 + 20 + 'px' // Make them a bit larger to match emojis
            };
        });
        setLeaves(newLeaves);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {leaves.map(leaf => (
                <div
                    key={leaf.id}
                    className="leaf"
                    style={{
                        left: leaf.left,
                        animationDuration: leaf.animationDuration,
                        animationDelay: leaf.animationDelay,
                        width: leaf.size,
                        height: leaf.size,
                    }}
                >
                    {leaf.type === 'maple' ? <MapleSVG color={leaf.color} /> : <LeafSVG color={leaf.color} />}
                </div>
            ))}
        </div>
    );
}
