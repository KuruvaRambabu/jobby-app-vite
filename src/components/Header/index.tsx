import {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'


import StoresContext from '../../context/StoreContext'
import HomeIcon from '../../Icons/HomeIcon'
import JobsIcon from '../../Icons/JobsIcon'
import LogoutIcon from '../../Icons/LogoutIcon'

import './index.css'

const Header = () => {

  const store = useContext(StoresContext)

  const {loginStore} = store
  const {onClickLogout} = loginStore

  const navigate = useNavigate()

  const onClickLogoutBtn = () => {
    onClickLogout()
    navigate('/login', {replace: true})
  }

  return (
    <ul className="header-container">
      <li className="home-page-logo-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-website-logo"
          />
        </Link>
      </li>
      <div className="headers-buttons-container">
        <li>
          <Link to="/" className="home-btn header-button" type="button">
            Home
          </Link>
          <Link to="/" className="home-btn-mobile header-button" type="button">
            <HomeIcon />
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="home-btn header-button" type="button">
            Jobs
          </Link>
          <Link
            to="/jobs"
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
  )
}

export default Header
