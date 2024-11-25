import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-[#1B2B27] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Generate Client-Winning<br />
              <span className="text-[#7CFF9B]">Proposals</span> in<br />
              <span className="relative">
                5 Minutes with AI
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]"></span>
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-md">
              Stop spending hours writing proposals. Let AI craft professional, personalized proposals that win more clients.
            </p>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/early-access"
                  className="bg-[#7CFF9B] text-[#1B2B27] px-6 py-4 rounded-md font-medium hover:bg-[#6ee889] text-center w-fit"
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
              <span className="text-gray-400 text-sm block">Regular Price: $97/mo</span>
            </div>

            {/* Logos Section */}
            <div className="pt-12">
              <p className="text-gray-500 text-sm mb-4">Trusted by forward-thinking businesses</p>
              <div className="flex space-x-8">
                <Image 
                  src="/bigelow.svg" 
                  alt="Bigelow" 
                  width={100} 
                  height={30}
                  className="opacity-50 hover:opacity-75"
                  priority
                  loading="eager"
                />
                <Image 
                  src="/fedex.svg" 
                  alt="FedEx" 
                  width={100} 
                  height={30}
                  className="opacity-50 hover:opacity-75"
                  priority
                  loading="eager"
                />
                <Image 
                  src="/goldair.svg" 
                  alt="Goldair" 
                  width={100} 
                  height={30}
                  className="opacity-50 hover:opacity-75"
                  priority
                  loading="eager"
                />
                <Image 
                  src="/oreilly.svg" 
                  alt="O'Reilly" 
                  width={100} 
                  height={30}
                  className="opacity-50 hover:opacity-75"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 