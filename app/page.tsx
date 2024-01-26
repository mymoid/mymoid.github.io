import HeroSection from './ui/hero'
import LibrariesSection from './ui/libraries'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="sections">
        <LibrariesSection />
      </div>
    </>
  )
}
