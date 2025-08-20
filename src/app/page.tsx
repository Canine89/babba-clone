import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Carousel from '@/components/Carousel';
import IntroSection from '@/components/IntroSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-1">
        <Carousel />
        <IntroSection />
      </main>
      <Footer />
    </div>
  );
}