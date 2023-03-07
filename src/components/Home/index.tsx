import { Link } from 'react-router-dom'

import { JOBBY_APP_JOBS_PAGE_PATH } from '../../constants/navigationConstants'

import './index.css'
import { MainContainer, HomePageContentContainer, Heading, HomePageDescription } from './styledComponents'

const Home = () => (
  <MainContainer className="home-bg-img-container">
    <HomePageContentContainer className="home-page-content">
      <Heading className="heading">Find The Job That Fits Your Life</Heading>
      <HomePageDescription className="description">
        Millions of people are searching for jobs, salary, information,
        company reviews. Find the Jobs that fits your abilities and potential
      </HomePageDescription>
      <Link to={JOBBY_APP_JOBS_PAGE_PATH} className="find-jobs-btn">
        Find Jobs
      </Link>
    </HomePageContentContainer>
  </MainContainer>
)
export default Home
