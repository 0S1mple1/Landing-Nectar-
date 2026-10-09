import Header from './components/Header'
import Hero from './components/Hero'
import LocationSection from './components/LocationSection'
import ReviewsSection from './components/ReviewsSection'
import ServicesSection from './components/ServicesSection'
import StorySection from './components/StorySection'
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StorySection />
        <ServicesSection />
        <ReviewsSection />
        <ContactForm />
        <LocationSection />
      </main>
    </>
  )
}
