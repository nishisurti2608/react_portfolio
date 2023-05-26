import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoN from '../../assets/images/nishi_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faHome} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoN} alt='logo'/>
            
        </Link>
        
        <nav>

            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} className='gradient-icon'/>
            </NavLink>
        </nav>
    </div>
)

export default Sidebar