

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppContextProvider, { AppContext } from './contexts/AppContext'
import './index.css'

//pages:
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import ManageContacts from './pages/ManageContacts'

function App() {


  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='ManageContacts' element={<ManageContacts />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  )
}

export default App
