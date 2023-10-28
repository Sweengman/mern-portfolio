import me from '../../data/ProPic.png'
import './AboutMe.css'

export default function AboutMe() {
    return(
        <section className='AboutMe'>

        <h3>About Me</h3> <img className='propic' src={ me } alt='profile img' />
        <p>
            Hi, I'm Sweeney Corniea. 
            I am a full-stack developer deeply committed to 
            the convergence of artistic aesthetics and functional 
            excellence.
        </p>
        <p>
            Helping others through purposeful technology is a
            profoundly beautiful pursuit.
            When done right I'd even dare say it's magical. 
            
        </p>
        <p>
            While visual art boasts undeniable merits, it is 
            important not to fixate solely on this aspect and 
            disregard the diverse forms in which beauty can 
            manifest.
        </p>

        <p>
            Simplicity in function,
            conscious meaning in the words we say
            and poetry in the way we say them. <br/>
            These and many more like them are needed to 
            say what we yearn to say
            and create what we yearn to create. 
        </p>

        <p>
            My ultimate goal is to pursue this wholistic 
            approach to web design, and create something genuine, something beautiful.
        </p>
        <p>Something Magical</p>
        
        </section>
    )

}
