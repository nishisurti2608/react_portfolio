import "./index.scss";
import { GiTechnoHeart } from 'react-icons/gi';
import {FaReact} from 'react-icons/fa';



const Footer = ()=>{
    return(
        <div className='copyright'>
        <span>Made with <GiTechnoHeart className="heartSymbol"/> in React <FaReact className="reactSymbol"/> </span>
        </div>
    )
}

export default Footer