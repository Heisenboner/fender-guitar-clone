import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import Trending from './components/Trending'
import PromoBanner from './components/PromoBanner'
import Categories from './components/Categories'
import FeatureBanner from './components/FeatureBanner'
import HistorySection from './components/HistorySection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Trending />
      <PromoBanner />
      <Categories />
      <FeatureBanner />
      <HistorySection />
      <Footer />
    </>
  )
}

export default App
