"use client";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* CSS-only animated beams - no framer-motion needed */}
            <div className="absolute inset-0 opacity-[0.12]">
                <div className="absolute top-[10%] left-[5%] w-[30%] h-[1px] bg-gradient-to-r from-transparent via-devflow-green to-transparent animate-beam-1" />
                <div className="absolute top-[30%] right-[15%] w-[25%] h-[1px] bg-gradient-to-r from-transparent via-devflow-green to-transparent animate-beam-2" />
                <div className="absolute bottom-[25%] left-[20%] w-[35%] h-[1px] bg-gradient-to-r from-transparent via-devflow-green to-transparent animate-beam-3" />
                <div className="absolute top-[50%] left-[10%] w-[20%] h-[1px] bg-gradient-to-r from-transparent via-devflow-green/60 to-transparent animate-beam-1" />
                <div className="absolute bottom-[40%] right-[10%] w-[28%] h-[1px] bg-gradient-to-r from-transparent via-devflow-green/60 to-transparent animate-beam-2" />
                <div className="absolute top-[70%] left-[40%] w-[22%] h-[1px] bg-gradient-to-r from-transparent via-devflow-green to-transparent animate-beam-3" />
            </div>
            <style>{`
                @keyframes beam-slide-1 {
                    0%, 100% { transform: translateX(-100%) scaleX(0.5); opacity: 0; }
                    25%, 75% { opacity: 1; }
                    50% { transform: translateX(200%) scaleX(1); opacity: 0.8; }
                }
                @keyframes beam-slide-2 {
                    0%, 100% { transform: translateX(100%) scaleX(0.3); opacity: 0; }
                    25%, 75% { opacity: 0.8; }
                    50% { transform: translateX(-150%) scaleX(1); opacity: 1; }
                }
                @keyframes beam-slide-3 {
                    0%, 100% { transform: translateX(50%) scaleX(0.4); opacity: 0; }
                    30%, 70% { opacity: 0.7; }
                    50% { transform: translateX(-200%) scaleX(0.8); opacity: 1; }
                }
                .animate-beam-1 { animation: beam-slide-1 8s ease-in-out infinite; }
                .animate-beam-2 { animation: beam-slide-2 10s ease-in-out infinite; }
                .animate-beam-3 { animation: beam-slide-3 12s ease-in-out infinite; }
            `}</style>
        </div>
    );
};
