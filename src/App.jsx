import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import WasteManagement from './components/WasteManagement'
import WasteForm from './components/WasteForm'
import RequestsList from './components/RequestsList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden p-4'>
      <Header/>
      <About/>
      <Projects/>
      <WasteManagement/>
      <WasteForm/>
      <RequestsList/>
      <Footer/>
    </div>
    
  )
}

export default App