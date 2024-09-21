
import './App.css';
import { Footer } from './footer';
import { Header } from './header';
import { HeroSection } from './hero-section';

function App() {


  console.log(" app component");
  
  return (
   <div>
    <Header />
    <HeroSection />
    <Footer/>
   </div>
  );
}

export default App;
