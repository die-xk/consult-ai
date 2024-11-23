import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ROICalculator from '@/components/ROICalculator'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'

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
