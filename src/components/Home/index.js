import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Footer from './Footer';
import Profilepic from './Profilepic';



const Home = ()=> {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['N','i','s','h','i']
    const jobArray= ['w','e','b','d','e','v','e','l','o','p','e','r']
    

    const myFunction = async () => {
        return setTimeout(()=> {
            setLetterClass('text-animate-hover')
        }, 4000)
    };
    
    useEffect(() => {
        myFunction();
    }); 

   

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> <br/>
                 <span className={letterClass}>न</span>
                 <span className={`${letterClass} _12`}>म</span>  
                 <span className={`${letterClass} _12`}>स्ते,</span>  
                 <br/>  
               
             
                <span className={`${letterClass} _13`}>I</span> 
                 <span className={`${letterClass} _14`}>'m &nbsp;</span>  
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters className="sub-text-animate" letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>    <span className={`${letterClass} _29`}>Developer | Designer | Proud Indian 🇮🇳</span></h2>
               
                <Link to="/contact" className='flat-button'> Say Hi! </Link>
              

            </div>
          
            <Profilepic/>
            <Footer/>
        </div>
       
        
    )
}

export default Home