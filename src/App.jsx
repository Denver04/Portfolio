import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Middle from './components/Middle';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Achieve from './components/Achieve';
import PropagateLoader from "react-spinners/PropagateLoader";
import useLocalStorage from "use-local-storage";

function App() {
  const [loading , setLoading] = useState(false);

  const [theme , setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
  }

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  } , [])

  return (
    <div className="Apps">
    {
      loading ? 
      <PropagateLoader
      color="#95959E" loading={loading} size={20} style={{display:"flex" , alignItems:"center" , justifyContent:"center" , widows:"100%" , height:"100vh"  }} />
      :
    <div className='App' data-theme={theme}>


    {/* <div class="toogle-button" onClick={switchTheme}>
      <input type="checkbox" class="checkbox" id="checkbox" />
      <label for="checkbox" class="label">
      <i class="fa-solid fa-moon"></i>
      <i class="fa-solid fa-sun"></i>
      <div class="ball"></div>
      </label>
    </div> */}

    <i className='fa fa-toggle-on toggle-icon' onClick={switchTheme}></i>

      <Middle />
      <hr />
      <Skill />
      <hr />
      <Projects />
      <hr />
      <Achieve />
      <hr />
      <Contact />
    </div>
    }
    </div>
  )
}

export default App
