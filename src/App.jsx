import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './Layout/MainLayout'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Products } from './Pages/Products'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
