import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <Loading />
})
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <Loading />
})
const ROICalculator = dynamic(() => import('@/components/ROICalculator'), {
  loading: () => <Loading />
})
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <Loading />
})
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <Loading />
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Features />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ROICalculator />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FAQ />
      </Suspense>
    </main>
  )
}
