import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Main(){
    return(
        <div className="main-container">
            <h1>Paul Stephen Bayot</h1>
            <h5>Aspiring Web Developer</h5>
            <a href="https://github.com/Sinichi78">github.com/Sinichi78</a>
            <div className="socials">
                <a className= "email" href="https://paul.bayot0412@gmail.com">         
                    <FaEnvelope color="black" size={13} />
                    <h3>Email</h3>
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/paul-stephen-bayot-4a3327287/">
                    <FaLinkedin color="white" size={15}/>
                    <h3>LinkedIn</h3>
                </a> 
            </div>
                <div className="About">
                <h2>About</h2>
                <p>I am deeply passionate about web development, committed to learn new skills,
                    and <br/> constantly seeking opportunities for improvement. My focus is on creating engaging, 
                    user-friendly <br/> websites that offer outstanding user experiences.</p>
                </div>
                <div className="Interests">
                <h2>Interests</h2>
                <p>Programming. Biking. Basketball. Listening to Music.</p> 
                </div>


        </div>
    )
}