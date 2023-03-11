import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Cookies from "js-cookie"

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


Cookies.set("jwt_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU")
const App = observer(() => (
  <QueryClientProvider client={queryClient}>
    <StoresContext.Provider value={{ loginStore, jobStore }}>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Jobs />} />
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
