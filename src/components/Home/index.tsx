import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { JOBBY_APP_JOBS_PAGE_PATH } from '../../constants/navigationConstants'

import './index.css'
import { MainContainer, HomePageContentContainer, Heading, HomePageDescription } from './styledComponents'

const Home = () => {

  const { t } = useTranslation()

  return (<MainContainer data-testid="home-bg-img" >
    <HomePageContentContainer>
      <Heading>{t("homeScreenStrings:homePageHeading")}</Heading>
      <HomePageDescription>
        {t("homeScreenStrings:homePageDescriptionText")}
      </HomePageDescription>
      <Link to={JOBBY_APP_JOBS_PAGE_PATH} data-testid className="find-jobs-btn">
        {t("homeScreenStrings:findJobsBtnText")}
      </Link>
    </HomePageContentContainer>
  </MainContainer>
  )
}
export default Home
