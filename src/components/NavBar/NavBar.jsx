import { Link } from 'react-router-dom'
import ghlogo from '../../data/LI-In-Bug.png'
import lilogo from '../../data/github-mark-white.png'
import './NavBar.css'


export default function NavBar() {

    return(
        <nav>
            <Link to='/about'>About Me</Link>
            &nbsp; | &nbsp;
            <Link to='/mytech'>Technologies and Projects</Link>
            &nbsp; | &nbsp;
            <Link to='/'>Main Page</Link>
            &nbsp; | &nbsp;
            <Link to='/email'>Contact Me(Email)</Link>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to='/linkedin/sweeney' target='_blank' rel='noopener noreferrer'><img className='nav' src={ lilogo } alt='LinkedIn' /></Link>
            &nbsp; &nbsp;
            <Link to='/github/sweeney' target='_blank' rel='noopener noreferrer'><img className='nav' src={ ghlogo } alt='GitHub' /></Link>
        </nav>
    )
} 