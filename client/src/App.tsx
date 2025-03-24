import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./Router";

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <Router />
      <Footer/>
    </div>
  )
}

export default App
