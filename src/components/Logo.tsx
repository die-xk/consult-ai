interface LogoProps {
  variant?: 'default' | 'white' | 'colored'
}

const Logo = ({ variant = 'default' }: LogoProps) => {
  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          primary: 'white',
          secondary: '#7CFF9B'
        }
      case 'colored':
        return {
          primary: '#1B2B27',
          secondary: '#7CFF9B'
        }
      default:
        return {
          primary: '#7CFF9B',
          secondary: '#1B2B27'
        }
    }
  }

  const colors = getColors()

  return (
    <div className="flex items-center gap-2">
      {/* Version 1: Abstract P with AI nodes */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M8 24L16 28L24 24M8 16L16 20L24 16M16 4L8 8L16 12L24 8L16 4Z"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="16"
          cy="4"
          r="2"
          fill={colors.secondary}
        />
        <circle
          cx="8"
          cy="8"
          r="2"
          fill={colors.secondary}
        />
        <circle
          cx="24"
          cy="8"
          r="2"
          fill={colors.secondary}
        />
      </svg>

      {/* Logo Text */}
      <span 
        className={`text-xl font-bold ${
          variant === 'white' ? 'text-white' : 'text-[#1B2B27]'
        }`}
      >
        Modi<span className="text-[#7CFF9B]">AI</span>
      </span>
    </div>
  )
}

export default Logo 