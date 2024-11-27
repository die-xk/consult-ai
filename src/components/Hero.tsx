/* eslint-disable */
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1B2B27] via-[#243530] to-[#1B2B27] pt-20 pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #7CFF9B 1px, transparent 1px),
            linear-gradient(to bottom, #7CFF9B 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(124, 255, 155, 0.1) 0%, rgba(27, 43, 39, 0.2) 50%, rgba(27, 43, 39, 0.95) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8 mb-16">
            <div className="text-gray-400 uppercase tracking-wider text-sm mb-4">
              Unlock Conversational Power
            </div>

            <h1 className="text-5xl font-bold text-white leading-tight max-w-4xl">
              Generate Client-Winning
              <span className="text-[#7CFF9B]"> Proposals </span>in &nbsp;
              <span className="relative">
                5 Minutes with AI
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]"></span>
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg mx-auto max-w-2xl">
              Stop spending hours writing proposals. Let AI craft professional, personalized proposals that win more clients.
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/early-access"
                  className="bg-[#7CFF9B] text-[#1B2B27] px-6 py-4 rounded-md font-medium hover:bg-[#6ee889] text-center"
                >
                  Get Early Access - $49/mo
                  <span className="block text-sm font-normal">(Limited to First 10 Users)</span>
                </Link>
                
                <Link 
                  href="/demo"
                  className="border border-[#7CFF9B] text-[#7CFF9B] px-6 py-4 rounded-md font-medium hover:bg-[#2B3B37] text-center flex items-center gap-2 w-fit"
                >
                  <span>See How it Works</span>
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </Link>
              </div>
              <span className="text-gray-400 text-sm">Regular Price: $97/mo</span>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto mt-12">
            <div className="bg-white/5 rounded-2xl p-4 shadow-2xl">
              <img 
                src="/path-to-your-app-screenshot.png" 
                alt="Dashboard Interface"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          <div className="pt-16">
            <p className="text-gray-500 text-sm mb-4">Trusted by forward-thinking businesses</p>
            <div className="flex justify-center space-x-8">
              <div className="w-[100px] h-[30px] bg-gray-800 rounded opacity-50 hover:opacity-75 transition-opacity" />
              <div className="w-[100px] h-[30px] bg-gray-800 rounded opacity-50 hover:opacity-75 transition-opacity" />
              <div className="w-[100px] h-[30px] bg-gray-800 rounded opacity-50 hover:opacity-75 transition-opacity" />
              <div className="w-[100px] h-[30px] bg-gray-800 rounded opacity-50 hover:opacity-75 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 