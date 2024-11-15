import React from 'react';

interface GlitchTextProps {
    text: string;
    className?: string;
    size?: 'small' | 'medium' | 'normal' | 'large' | 'huge';
}

const glitchStyles = `
  @keyframes glitch {
    0% {
      transform: translate(0);
      filter: hue-rotate(0deg);
    }
    10% {
      transform: translate(-5px, 5px);
      filter: hue-rotate(30deg);
    }
    20% {
      transform: translate(-10px, -10px);
      filter: hue-rotate(60deg);
    }
    30% {
      transform: translate(10px, 10px);
      filter: hue-rotate(90deg);
    }
    40% {
      transform: translate(5px, -5px);
      filter: hue-rotate(120deg);
    }
    50% {
      transform: translate(-8px, 8px);
      filter: hue-rotate(180deg);
    }
    60% {
      transform: translate(8px, -8px);
      filter: hue-rotate(240deg);
    }
    70% {
      transform: translate(-12px, 12px);
      filter: hue-rotate(280deg);
    }
    80% {
      transform: translate(12px, -12px);
      filter: hue-rotate(320deg);
    }
    90% {
      transform: translate(-5px, 5px);
      filter: hue-rotate(340deg);
    }
    100% {
      transform: translate(0);
      filter: hue-rotate(360deg);
    }
  }

  @keyframes flicker {
    0% { opacity: 0.8; }
    5% { opacity: 0.4; }
    10% { opacity: 0.8; }
    15% { opacity: 0.4; }
    20% { opacity: 1; }
    80% { opacity: 0.8; }
    85% { opacity: 0.4; }
    90% { opacity: 0.8; }
    95% { opacity: 0.4; }
    100% { opacity: 0.8; }
  }

  .glitch-base {
    text-shadow: 0.1em 0 0 #00fffc, -0.08em -0.08em 0 #fc00ff,
                  0.08em 0.08em 0 #fffc00;
    animation: glitch 2s infinite, flicker 3s infinite;
    position: relative;
    letter-spacing: 0.05em;
  }

  .glitch-layer {
    opacity: 0.7;
    animation: glitch 1.5s infinite 0.2s;
    clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
    transform-origin: center;
  }

  .glitch-layer2 {
    opacity: 0.7;
    animation: glitch 1.8s infinite 0.4s;
    clip-path: polygon(0 65%, 100% 65%, 100% 80%, 0 80%);
    transform-origin: center;
  }

  .glitch-layer3 {
    opacity: 0.7;
    animation: glitch 2.1s infinite 0.6s;
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    transform-origin: center;
  }
`;

export function GlitchText({
                               text,
                               className = '',
                               size = 'normal'
                           }: GlitchTextProps) {
    const sizeClasses = {
        small: 'text-lg md:text-xl',
        medium: 'text-2xl md:text-3xl',
        normal: 'text-4xl md:text-6xl',
        large: 'text-5xl md:text-7xl',
        huge: 'text-6xl md:text-9xl'
    };

    React.useEffect(() => {
        if (!document.getElementById('glitch-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'glitch-styles';
            styleSheet.textContent = glitchStyles;
            document.head.appendChild(styleSheet);
        }
    }, []);

    return (
        <div className={`relative inline-block ${sizeClasses[size]} ${className}`}>
      <span className="relative inline-block text-white font-black tracking-wider glitch-base">
        {text}
      </span>
            <span
                className="absolute top-0 left-0 inline-block text-[#0ff] font-black tracking-wider glitch-layer"
                aria-hidden="true"
            >
        {text}
      </span>
            <span
                className="absolute top-0 left-0 inline-block text-[#f0f] font-black tracking-wider glitch-layer2"
                aria-hidden="true"
            >
        {text}
      </span>
            <span
                className="absolute top-0 left-0 inline-block text-[#ff0] font-black tracking-wider glitch-layer3"
                aria-hidden="true"
            >
        {text}
      </span>
        </div>
    );
}