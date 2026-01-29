import { Home } from "lucide-react";
import "./App.css";
import Footer from './components/layout/Footer/Footer'
// import Navbar from "./components/layout/Navbar/Navbar";
import AppRoutes from './routes/AppRoutes'
import Hero from "./components/sections/hero/Hero";
import Navbar from "./components/layout/navbar/Nabar";

function App() {


  return (
    <>
    {/* <Navbar/> */}
      <Navbar/>
     <Hero/>
    <AppRoutes/>
    <Footer/>
   
    </>
  )
}

export default App
