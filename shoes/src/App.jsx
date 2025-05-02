import React,{useState} from "react"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./components/Home"
import { data } from "./components/dataa"
import { Excenplar } from "./components/excenplar"
import {Nav} from "./components/navigation/Nav"
import {Contact} from "./components/navigation/Contact"
import {About} from "./components/navigation/About"
import { Credit } from "./components/navigation/Credit"
import "./App.css"
import { Been } from "./components/Been"


function App() {
  const [been,setBeen] = useState([])
  
  
  function onClickHandler(data) {
    const existingIndex = been.findIndex(
      (b) =>
        b.name === data.name &&
        b.selectedSize === data.selectedSize 
    );
  
    if (existingIndex !== -1) {
      const updatedBeen = [...been];
      const existingItem = updatedBeen[existingIndex];
      updatedBeen[existingIndex] = {
        ...existingItem,
        count: existingItem.count + 1
      };
      setBeen(updatedBeen);
    } else {
      console.log(3,[...been, { ...data, count: 1 }])
      setBeen([...been, { ...data, count: 1 }]);
    }
  }
  

  return (
    <>
     <BrowserRouter>
     <Nav></Nav>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/credit" element={<Credit></Credit>}></Route>
           {data.map(el => {
            return <Route key={el.id} path={`/${el.id}`} element={<Excenplar img={el.img} onClickHandler={onClickHandler} prize={el.prize} info={el.info} name={el.name} id={el.id}></Excenplar>}></Route>
           })}
        </Routes>
        </BrowserRouter>
        <Been arr={been}>Been</Been>
    </> 
  )
}

export default App
