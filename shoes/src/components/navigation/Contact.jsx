import { FaInstagram } from 'react-icons/fa';
import { FaSnapchatGhost } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import "./Credit.css"

export function Contact () {
    return (
        <div style={{color:"grey",fontSize:"32px",backgroundColor:"white", width: 'calc(100vw - 200px)',marginLeft:"60px",paddingLeft:"40px"}}>
    <h2 style={{fontSize:"40px" ,color:"black",marginLeft:"-15px"}}> Contact us</h2>
    <p>We are always happy to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out to us.</p>
    <ul>
        <li> Phone : <span style={{color:"black"}}> 097-28-25-25 </span></li>
        <li> Email : <a style={{color:"black"}} href="mailto:gasparyan.sego.07@gmail.com">gasparyan.sego.07@gmail.com</a></li>
    </ul>
    <div style={{display:"flex"}}>
    <span >You can folow us on Instagram,Snapchat and Telegram</span>
         <a href="https://www.instagram.com/gasparryyann" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={50} color="#E4405F" />
         </a>

         <a href="https://www.snapchat.com/add/gasparryyann" target="_blank" rel="noopener noreferrer">
            <FaSnapchatGhost size={50} color="#FFFC00" />
         </a>
         <a href="https://t.me/s89877677" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane size={50} color="#0088cc" />
         </a>
    </div> 
    </div>
    )
}