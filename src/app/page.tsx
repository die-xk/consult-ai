import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

const Features = dynamic(() => import('@/components/Features'))
const HowItWorks = dynamic(() => import('@/components/HowItWorks'))
const ROICalculator = dynamic(() => import('@/components/ROICalculator'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const FAQ = dynamic(() => import('@/components/FAQ'))

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <ROICalculator />
      <Pricing />
      <FAQ />
    </main>
  )
}
