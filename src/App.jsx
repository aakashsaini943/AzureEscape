import "./App.css";
import Footer from './components/layout/Footer/Footer'
import Navbar from "./components/layout/Navbar/Navbar";
import AppRoutes from './routes/AppRoutes'

function App() {


  return (
    <>
    <Navbar/>
    <AppRoutes/>
    <Footer/>
    </>
  )
}

export default App
