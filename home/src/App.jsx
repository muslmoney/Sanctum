import React, {Fragment} from 'react'
import "./App.css";
import { Outlet } from 'react-router-dom';
import Header from './layout/Header'
import './App.css'


const App = () => {
  return (
<Fragment>
  <header>
    <Header/>
  </header>
  
  <main>
    <Outlet />
  </main>
  
  <footer></footer>
</Fragment>
  )
}

export default App
