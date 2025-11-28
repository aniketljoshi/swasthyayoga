interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ variant = 'dark', size = 'medium' }: LogoProps) {
  const heights = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16'
  };

  const textColors = {
    light: 'text-white',
    dark: 'text-gray-800'
  };

  return (
    <a href="#home" className="flex items-center space-x-3">
      <div className={`${heights[size]} aspect-square relative`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="none" stroke={variant === 'light' ? '#fff' : '#15803d'} strokeWidth="2" opacity="0.3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke={variant === 'light' ? '#fff' : '#15803d'} strokeWidth="1.5" opacity="0.5" />
          <circle cx="50" cy="50" r="32" fill="none" stroke={variant === 'light' ? '#fff' : '#15803d'} strokeWidth="1" opacity="0.7" />

          <path d="M 30 60 Q 35 45, 40 50 T 50 45 T 60 50 T 70 60" fill="none" stroke={variant === 'light' ? '#fff' : '#ea580c'} strokeWidth="2" strokeLinecap="round" />

          <circle cx="50" cy="40" r="6" fill={variant === 'light' ? '#fbbf24' : '#f97316'} />

          <path d="M 44 55 L 50 48 L 56 55" fill="none" stroke={variant === 'light' ? '#fff' : '#15803d'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 50 48 L 50 62" stroke={variant === 'light' ? '#fff' : '#15803d'} strokeWidth="2" strokeLinecap="round" />
          <path d="M 42 62 L 50 62 L 58 62" stroke={variant === 'light' ? '#fff' : '#15803d'} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold leading-tight ${textColors[variant]} ${
          size === 'small' ? 'text-base' : size === 'medium' ? 'text-xl' : 'text-2xl'
        }`}>
          Swasthya
        </span>
        <span className={`text-xs ${variant === 'light' ? 'text-orange-200' : 'text-orange-600'} font-medium`}>
          Yoga Center
        </span>
      </div>
    </a>
  );
}