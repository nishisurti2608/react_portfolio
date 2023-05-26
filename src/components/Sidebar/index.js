import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoN from '../../assets/images/nishi_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoN} alt='logo'/>
            
        </Link>
        
        <nav>

            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} className='sidebar-icon'/> 
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} className='sidebar-icon'/> 
            </NavLink>

            <NavLink exact="true" activeclassname="active" className='contact-link' to="contact-link">
                <FontAwesomeIcon icon={faEnvelope} className='sidebar-icon'/> 
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nishisurti/'> 
                <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar