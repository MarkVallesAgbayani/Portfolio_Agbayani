import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import ImageProfile from './components/ImageProfile'
import image from './assets/image.jpg'
import HeroDetails from './components/HeroDetails'
import  Projects from './pages/Projects'

function App() {
  return (
    <>
      <NavBar />
      <ImageProfile name="Mark Agbayani" image={image} tag="A Full-Stack Developer who has developed countless innovative solutions."/>
      <HeroDetails />
      <Projects />
    </>
  )
}

export default App
