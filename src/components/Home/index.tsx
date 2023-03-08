import { Link } from 'react-router-dom'

import { JOBBY_APP_JOBS_PAGE_PATH } from '../../constants/navigationConstants'

import './index.css'
import { MainContainer, HomePageContentContainer, Heading, HomePageDescription } from './styledComponents'

const Home = () => (
  <MainContainer data-testid="home-bg-img">
    <HomePageContentContainer>
      <Heading>Find The Job That Fits Your Life</Heading>
      <HomePageDescription>
        Millions of people are searching for jobs, salary, information,
        company reviews. Find the Jobs that fits your abilities and potential
      </HomePageDescription>
      <Link to={JOBBY_APP_JOBS_PAGE_PATH} data-testid className="find-jobs-btn">
        Find Jobs
      </Link>
    </HomePageContentContainer>
  </MainContainer>
)
export default Home
