import { Link, useNavigate } from 'react-router-dom'

import { JOBBY_APP_HOME_PATH, JOBBY_APP_JOBS_PAGE_PATH, JOBBY_APP_LOGIN_PATH } from '../../constants/navigationConstants'

import { useLoginStore } from '../../hooks/useLoginStore'
import HomeIcon from '../../Icons/HomeIcon'
import JobsIcon from '../../Icons/JobsIcon'
import LogoutIcon from '../../Icons/LogoutIcon'

import './index.css'
import { HeaderMainContainer, Nav, HeaderUiEl, HeaderLiEl, ButtonContainer, WebsiteLogo, LogoutBtn, LogoutBtnMobile } from './styledComponents'

const Header = () => {

  const loginStore = useLoginStore()

  const { onClickLogout } = loginStore

  const navigate = useNavigate()

  const onClickLogoutBtn = () => {
    onClickLogout()
    navigate(JOBBY_APP_LOGIN_PATH, { replace: true })
  }

  return (
    <HeaderMainContainer>
      <Nav>
        <HeaderUiEl >
          <HeaderLiEl>
            <Link to={JOBBY_APP_HOME_PATH}>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
              />
            </Link>
          </HeaderLiEl>
          <ButtonContainer>
            <HeaderLiEl>
              <Link to={JOBBY_APP_HOME_PATH} className="home-btn header-button" type="button">
                Home
              </Link>
              <Link to={JOBBY_APP_HOME_PATH} className="home-btn-mobile header-button" type="button">
                <HomeIcon />
              </Link>
            </HeaderLiEl>
            <HeaderLiEl>
              <Link to={JOBBY_APP_JOBS_PAGE_PATH} className="home-btn header-button" type="button">
                Jobs
              </Link>
              <Link
                to={JOBBY_APP_JOBS_PAGE_PATH}
                className="home-btn-mobile header-button"
                type="button"
              >
                <JobsIcon />
              </Link>
            </HeaderLiEl>
          </ButtonContainer>
          <HeaderLiEl>
            <LogoutBtn onClick={onClickLogoutBtn} className="logout-btn" type="button">
              Logout
            </LogoutBtn>
            <LogoutBtnMobile
              onClick={onClickLogoutBtn}
              type="button"
            >
              <LogoutIcon />
            </LogoutBtnMobile>
          </HeaderLiEl>
        </HeaderUiEl>
      </Nav>
    </HeaderMainContainer>
  )
}

export default Header
