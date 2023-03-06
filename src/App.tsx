import { Routes, Route } from 'react-router-dom'
import { observer } from 'mobx-react'
import { QueryClient, QueryClientProvider } from 'react-query';

import stores from './stores/index'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Layout from './components/Layout';
import LoginRoute from './routes/LoginRoute';
import HomeRoute from './routes/HomeRoute';
import JobsRoute from './routes/JobsRoute';
import JobDetailsRoute from './routes/JobDetailsRoute';
import { JOBBY_APP_HOME_PATH, JOBBY_APP_JOBS_PAGE_PATH, JOBBY_APP_JOB_DETAILS_PAGE_PATH, JOBBY_APP_LOGIN_PATH } from './constants/navigationConstants';
import { JobStoreProvider } from './hooks/useJobStore';
import { LoginStoreProvider } from './hooks/useLoginStore';

import './App.css'


const queryClient = new QueryClient();

const App = observer(() => (
  <QueryClientProvider client={queryClient}>
    <LoginStoreProvider>
      <JobStoreProvider>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path={JOBBY_APP_LOGIN_PATH} element={<LoginRoute />} />
          <Route path={JOBBY_APP_HOME_PATH} element={<Layout />}>
            <Route element={<ProtectedRoute />}>
              <Route index element={<HomeRoute />} />
              <Route path={JOBBY_APP_JOBS_PAGE_PATH} element={<JobsRoute />} />
              <Route
                path={JOBBY_APP_JOB_DETAILS_PAGE_PATH}
                element={<JobDetailsRoute />}
              />
            </Route>
          </Route>
        </Routes>
      </JobStoreProvider>
    </LoginStoreProvider>
  </QueryClientProvider>
))

export default App
