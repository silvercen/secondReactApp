import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TodoList from './components/Todo_App/TodoList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/Product/ProductList'
import EcomList from './components/Ecommerce/EcomList'
import ActorList from './components/actor/ActorList'
import Error from './components/Error'
import Counter from './components/Counter'
import HeaderApp from './components/HeaderApp'
import MyEcomList from './components/Ecommerce/MyEcomList'
import TrainingHeader from './components/training/TrainingHeader'
import VenueList from './components/training/venue/VenueList'
import CohortList from './components/training/cohort/CohortList'
import CohortAdd from './components/training/cohort/CohortAdd'
import VenueAdd from './components/training/venue/VenueAdd'

function App() {
  return (
    <>
    {/* <TodoList></TodoList> */}

    <BrowserRouter>
      <HeaderApp/>
      <Routes>
        <Route path='/' element={<Counter />}></Route>
        <Route path='/todo' element={<TodoList/>}></Route>
        <Route path='/product-list' element={<ProductList/>}></Route>
        <Route path='/ecom-list' element={<MyEcomList/>}></Route>
        <Route path='/actor-list' element={<ActorList/>}></Route>
        <Route path='/training' element={<TrainingHeader/>}>
          <Route path='venue-list' element={<VenueList/>}></Route>
          <Route path='cohort-list' element={<CohortList/>}></Route>
          <Route path='cohort-add' element={<CohortAdd/>}></Route>
          <Route path='venue-add' element={<VenueAdd/>}></Route>
        </Route>
        <Route path='/*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
