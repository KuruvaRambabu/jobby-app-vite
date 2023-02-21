import {Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react'

import StoresContext from './context/StoreContext'
import Login from './components/Login'
import stores from './stores/index'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

import './App.css'

const {loginStore, jobStore} = stores

const App = observer(() => (
<StoresContext.Provider value={{loginStore, jobStore}}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute component={Home} />} />
    </Routes>
  </StoresContext.Provider>
))

export default App
