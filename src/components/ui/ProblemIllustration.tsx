export default function SolutionIllustration() {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md mx-auto"
    >
      {/* Premium gradient background circle */}
      <defs>
        <linearGradient id="premiumGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BAE654" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#BAE654" stopOpacity="0.05" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow circle */}
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="url(#premiumGlow)"
        opacity="0.3"
      />

      {/* Organized grid system - clean structure */}
      <g opacity="0.4">
        <line
          x1="100"
          y1="100"
          x2="300"
          y2="100"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="100"
          y1="150"
          x2="300"
          y2="150"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="100"
          y1="200"
          x2="300"
          y2="200"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="100"
          y1="250"
          x2="300"
          y2="250"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="100"
          y1="300"
          x2="300"
          y2="300"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />

        <line
          x1="100"
          y1="100"
          x2="100"
          y2="300"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="150"
          y1="100"
          x2="150"
          y2="300"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="200"
          y1="100"
          x2="200"
          y2="300"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="250"
          y1="100"
          x2="250"
          y2="300"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <line
          x1="300"
          y1="100"
          x2="300"
          y2="300"
          stroke="#BAE654"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
      </g>

      {/* Central premium dashboard/screen */}
      <g filter="url(#glow)">
        <rect
          x="120"
          y="140"
          width="160"
          height="120"
          rx="12"
          fill="#1A1A1A"
          stroke="#BAE654"
          strokeWidth="2"
        />

        {/* Screen content - analytics bars */}
        <g className="animate-pulse-slow">
          <rect
            x="140"
            y="200"
            width="12"
            height="40"
            rx="2"
            fill="#BAE654"
            opacity="0.8"
          />
          <rect
            x="160"
            y="180"
            width="12"
            height="60"
            rx="2"
            fill="#BAE654"
            opacity="0.9"
          />
          <rect x="180" y="170" width="12" height="70" rx="2" fill="#BAE654" />
          <rect
            x="200"
            y="185"
            width="12"
            height="55"
            rx="2"
            fill="#BAE654"
            opacity="0.9"
          />
          <rect
            x="220"
            y="195"
            width="12"
            height="45"
            rx="2"
            fill="#BAE654"
            opacity="0.8"
          />
          <rect
            x="240"
            y="175"
            width="12"
            height="65"
            rx="2"
            fill="#BAE654"
            opacity="0.9"
          />
        </g>

        {/* Success indicator */}
        <circle
          cx="250"
          cy="160"
          r="8"
          fill="#BAE654"
          className="animate-pulse-slow"
        />
        <path
          d="M247 160 L249 162 L253 157"
          stroke="#0A0A0A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Connected nodes - integrated system */}
      <g className="animate-float" style={{ animationDelay: "0s" }}>
        <circle
          cx="80"
          cy="120"
          r="20"
          fill="#1A1A1A"
          stroke="#BAE654"
          strokeWidth="2"
        />
        <path
          d="M75 120 L80 125 L90 112"
          stroke="#BAE654"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="95"
          y1="125"
          x2="120"
          y2="150"
          stroke="#BAE654"
          strokeWidth="2"
          opacity="0.5"
        />
      </g>

      <g className="animate-float" style={{ animationDelay: "0.3s" }}>
        <circle
          cx="320"
          cy="120"
          r="20"
          fill="#1A1A1A"
          stroke="#BAE654"
          strokeWidth="2"
        />
        <circle cx="320" cy="120" r="8" fill="#BAE654" opacity="0.8" />
        <line
          x1="305"
          y1="125"
          x2="280"
          y2="150"
          stroke="#BAE654"
          strokeWidth="2"
          opacity="0.5"
        />
      </g>

      <g className="animate-float" style={{ animationDelay: "0.6s" }}>
        <circle
          cx="80"
          cy="280"
          r="20"
          fill="#1A1A1A"
          stroke="#BAE654"
          strokeWidth="2"
        />
        <rect
          x="73"
          y="273"
          width="14"
          height="14"
          rx="2"
          fill="#BAE654"
          opacity="0.8"
        />
        <line
          x1="95"
          y1="275"
          x2="120"
          y2="255"
          stroke="#BAE654"
          strokeWidth="2"
          opacity="0.5"
        />
      </g>

      <g className="animate-float" style={{ animationDelay: "0.9s" }}>
        <circle
          cx="320"
          cy="280"
          r="20"
          fill="#1A1A1A"
          stroke="#BAE654"
          strokeWidth="2"
        />
        <path
          d="M310 280 L315 275 L325 285 L330 280"
          stroke="#BAE654"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <line
          x1="305"
          y1="275"
          x2="280"
          y2="255"
          stroke="#BAE654"
          strokeWidth="2"
          opacity="0.5"
        />
      </g>

      {/* Smooth flowing data lines - organized workflow */}
      <path
        d="M100 200 Q150 190 200 200 T300 200"
        stroke="#BAE654"
        strokeWidth="2"
        opacity="0.3"
        fill="none"
        className="animate-pulse-slow"
      />

      {/* Success indicators - checkmarks */}
      <g opacity="0.7">
        <circle cx="50" cy="50" r="12" fill="#BAE654" opacity="0.2" />
        <path
          d="M45 50 L48 53 L55 45"
          stroke="#BAE654"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      <g opacity="0.7">
        <circle cx="350" cy="50" r="12" fill="#BAE654" opacity="0.2" />
        <path
          d="M345 50 L348 53 L355 45"
          stroke="#BAE654"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      <g opacity="0.7">
        <circle cx="350" cy="350" r="12" fill="#BAE654" opacity="0.2" />
        <path
          d="M345 350 L348 353 L355 345"
          stroke="#BAE654"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Upward trending arrow - growth */}
      <g opacity="0.6">
        <path
          d="M60 340 L80 320 L100 330 L120 310 L140 320 L160 300"
          stroke="#BAE654"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M150 305 L160 300 L155 310" fill="#BAE654" />
      </g>

      {/* Premium badge/seal */}
      <g transform="translate(200, 340)">
        <circle
          cx="0"
          cy="0"
          r="25"
          fill="#1A1A1A"
          stroke="#BAE654"
          strokeWidth="2"
        />
        <circle
          cx="0"
          cy="0"
          r="18"
          fill="none"
          stroke="#BAE654"
          strokeWidth="1"
          opacity="0.5"
        />
        <text
          x="0"
          y="6"
          fill="#BAE654"
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          ✓
        </text>
      </g>

      {/* Orbiting particles - dynamic energy */}
      <circle
        cx="200"
        cy="80"
        r="3"
        fill="#BAE654"
        opacity="0.6"
        className="animate-pulse-slow"
      />
      <circle
        cx="320"
        cy="200"
        r="3"
        fill="#BAE654"
        opacity="0.6"
        className="animate-pulse-slow"
        style={{ animationDelay: "0.5s" }}
      />
      <circle
        cx="200"
        cy="320"
        r="3"
        fill="#BAE654"
        opacity="0.6"
        className="animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <circle
        cx="80"
        cy="200"
        r="3"
        fill="#BAE654"
        opacity="0.6"
        className="animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />
    </svg>
  );
}
