import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FileComplaint from './FileComplaint';
const Top_Section = () => {
    return (  
        <section id='top_section'>
            
      <div className="navbar">
        <div className="logo">
            <img src='https://media.licdn.com/dms/image/D4D0BAQF7W47aT1zSSA/company-logo_200_200/0/1696283742860?e=1704931200&v=beta&t=ZTemzl50b58iQSaAlfYtmWWhfmFAVdi3F4_R1kM3GZ0' alt="RK Hall" />
        </div>
        <div className="details">
            <a href="#about_CMS">About CMS</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#footer">Footer</a>
            
        </div>
        <div className="file">
        <a href="">Complaint</a>
        </div>
      </div>
      <div className="head_section">
        <div className="info">
            <h1><span>Online</span><br/>
            <span className="complaint">Complaint  </span>
            <span>Poral</span><br/>
            </h1>
            
        </div>
        <div className="img">
            <p>RK ka TEMPO High hai!!!</p>
            </div>
        
      </div>
      
    </section>
    );
}
 
export default Top_Section;