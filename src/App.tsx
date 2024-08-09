import Home from './pages/Home/Index'
import Categories from './pages/Categories/Index'
import { Route, Routes } from 'react-router-dom'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <div id='App'>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="categories" element={ <Categories/> } />
      </Routes>
    </div>
  )
}

export default App
