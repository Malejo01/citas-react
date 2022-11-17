import React from "react"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  

  return (
    <div className="container mx-auto">
      <Header/>
      <div className="mt-12 md:flex">
      <Form/>
      <ListadoPacientes/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
