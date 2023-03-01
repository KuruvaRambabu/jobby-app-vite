import { Link } from 'react-router-dom'

import { JOBBY_APP_JOBS_PAGE_PATH } from '../../constants/navigationConstants'


import './index.css'

const Home = () => (
  <main className="home-bg-img-container">
    <div className="home-page-content">
      <h1 className="heading">Find The Job That Fits Your Life</h1>
      <p className="description">
        Millions of people are searching for jobs, salary, information,
        company reviews. Find the Jobs that fits your abilities and potential
      </p>
      <Link to={JOBBY_APP_JOBS_PAGE_PATH} className="find-jobs-btn">
        Find Jobs
      </Link>
    </div>
  </main>
)
export default Home
