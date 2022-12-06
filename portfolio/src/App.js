
import './App.css';

import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className='bg- h-screen zen '>
     
      <Hero/>
      {/* <About/>
      <Projects/> */}
      <Contact/>
    </div>
  );
}

export default App;
