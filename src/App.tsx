import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react'
import { QueryClient, QueryClientProvider } from 'react-query';

import StoresContext from './context/StoreContext'
import Login from './components/Login'
import stores from './stores/index'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import NotFound from './components/NotFound'
import JobDetails from './components/JobItemDetails'
import Jobs from './components/Jobs'

import './App.css'

const { loginStore, jobStore } = stores

const queryClient = new QueryClient();


const App = observer(() => (
  <QueryClientProvider client={queryClient}>
    <StoresContext.Provider value={{ loginStore, jobStore }}>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/jobs" element={<ProtectedRoute component={Jobs} />} />
        <Route
          path="/jobs/:id"
          element={<ProtectedRoute component={JobDetails} />}
        />
      </Routes>
    </StoresContext.Provider>
  </QueryClientProvider>
))

export default App
