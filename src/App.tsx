import {Routes, Route} from 'react-router-dom'
import {observer} from 'mobx-react'

import StoresContext from './context/StoreContext'
import Login from './components/Login'
import stores from './stores/index'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import NotFound from './components/NotFound'
import JobDetails from './components/JobItemDetails'
import Jobs from './components/Jobs'

import './App.css'

const {loginStore, jobStore} = stores

const App = observer(() => (
<StoresContext.Provider value={{loginStore, jobStore}}>
    <Routes>
      <Route element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute component={Home} />} />
      <Route path="/jobs" element={<ProtectedRoute component={Jobs} />} />
      <Route
        path="/jobs/:id"
        element={<ProtectedRoute component={JobDetails} />}
      />
    </Routes>
  </StoresContext.Provider>
))

export default App
