import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import TrustSection from '@/components/TrustSection'
import ComingSoonSection from '@/components/ComingSoonSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TrustSection />
      <ComingSoonSection />
      <Footer />
    </div>
  )
}