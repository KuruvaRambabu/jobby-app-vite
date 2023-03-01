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
import { JOBBY_APP_HOME_PATH, JOBBY_APP_JOBS_PAGE_PATH, JOBBY_APP_JOB_DETAILS_PAGE_PATH, JOBBY_APP_LOGIN_PATH } from './constants/navigationConstants';

import './App.css'

const { loginStore, jobStore } = stores

const queryClient = new QueryClient();


const App = observer(() => (
  <QueryClientProvider client={queryClient}>
    <StoresContext.Provider value={{ loginStore, jobStore }}>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path={JOBBY_APP_LOGIN_PATH} element={<Login />} />
        <Route path={JOBBY_APP_HOME_PATH} element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path={JOBBY_APP_JOBS_PAGE_PATH} element={<Jobs />} />
            <Route
              path={JOBBY_APP_JOB_DETAILS_PAGE_PATH}
              element={<JobDetails />}
            />
          </Route>
        </Route>
      </Routes>
    </StoresContext.Provider>
  </QueryClientProvider>
))

export default App
