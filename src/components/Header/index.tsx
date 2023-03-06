import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { JOBBY_APP_HOME_PATH, JOBBY_APP_JOBS_PAGE_PATH, JOBBY_APP_LOGIN_PATH } from '../../constants/navigationConstants'

import { useLoginStore } from '../../hooks/useLoginStore'
import HomeIcon from '../../Icons/HomeIcon'
import JobsIcon from '../../Icons/JobsIcon'
import LogoutIcon from '../../Icons/LogoutIcon'

import './index.css'

const Header = () => {

  const loginStore = useLoginStore()

  const { onClickLogout } = loginStore

  const navigate = useNavigate()

  const onClickLogoutBtn = () => {
    onClickLogout()
    navigate(JOBBY_APP_LOGIN_PATH, { replace: true })
  }

  return (
    <header>
      <nav>
        <ul className="header-container">
          <li className="home-page-logo-container">
            <Link to={JOBBY_APP_HOME_PATH}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
                className="header-website-logo"
              />
            </Link>
          </li>
          <div className="headers-buttons-container">
            <li>
              <Link to={JOBBY_APP_HOME_PATH} className="home-btn header-button" type="button">
                Home
              </Link>
              <Link to={JOBBY_APP_HOME_PATH} className="home-btn-mobile header-button" type="button">
                <HomeIcon />
              </Link>
            </li>
            <li>
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
            </li>
          </div>
          <li>
            <button onClick={onClickLogoutBtn} className="logout-btn" type="button">
              Logout
            </button>
            <button
              onClick={onClickLogoutBtn}
              className="logout-btn-mobile"
              type="button"
            >
              <LogoutIcon />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
