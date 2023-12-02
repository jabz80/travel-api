import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import * as Pages from "./pages"
import Header from "./components/Header";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <Router>
      <Header />
      <Routes> 
          <Route path="/home" element={<Pages.Home/>}></Route>
          <Route path="/locations" element={<Pages.Locations/>}></Route>
          <Route path="/signup" element={<Pages.Login/>}></Route>
          <Route path="/register" element={<Pages.Register/>}></Route>
          <Route path="/account" element={<Pages.Account/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
