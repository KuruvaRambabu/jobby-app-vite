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
import Layout from './components/Layout';

import './App.css'

const { loginStore, jobStore } = stores

const queryClient = new QueryClient();



const App = observer(() => (
  <QueryClientProvider client={queryClient}>
      <StoresContext.Provider value={{loginStore, jobStore}}>
        <Routes>
          <Route path='*' element={<NotFound />} />
            <Route path="/login" element={<Login />} />
                <Route path="/" element = {<Layout />}>
                  <Route element ={<ProtectedRoute />}>
                      <Route  index element={<Home/>} />
                      <Route path="jobs" element={<Jobs />} />
                      <Route
                        path="jobs/:id"
                        element={<JobDetails />}
                        />
                  </Route>
            </Route>
        </Routes>
     </StoresContext.Provider>
  </QueryClientProvider>
))

export default App
