import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        // Navbar
        // Logo 
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='Logo Subtitle' />
            </Link>
            {/* NavLink */}
            <nav >
                <NavLink
                    exact='true'
                    to='/' >
                    <FontAwesomeIcon
                        icon={faHome}
                        color='#4d4d4e'
                    />
                </NavLink>
                <NavLink
                    exact='true'
                    to='/about'
                    className='about-link'>
                    <FontAwesomeIcon
                        icon={faUser}
                        color='#4d4d4e'
                    />
                </NavLink>
                <NavLink
                    exact='true'
                    to='/contact'
                    className='contact-link' >
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        color='#4d4d4e'
                    />
                </NavLink>
            </nav>
            {/* List of contacts : FB, GitHub.. */}
            <ul >
                <li>
                    <a
                        target="_blank"
                        href='https://www.linkedin.com/in/haonguyen-5a08321a9/'
                        rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href='https://github.com/nguyenanhhao221'
                        rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href='https://www.facebook.com/haonguyen11295'
                        rel='noreferrer'>
                        <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar