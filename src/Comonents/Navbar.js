import React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LogoIcon from '../Images/Landiing Page/LogoIcon.svg';
import LogoName from '../Images/Landiing Page/LogoName.svg';
import Masalas from '../Images/Landiing Page/Masalas.png';
import RecipeBook from '../Images/Landiing Page/Recipebook.png';
import Contactus from '../Images/Landiing Page/Contact us.jpg';
import Aboutus from '../Images/Landiing Page/AboutUs.png';
import Community from '../Images/Landiing Page/Comunity.jpg';



const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <WidgetsIcon />
                    <a class="navbar-brand" href="#">
                        <img className='logoIcon' src={LogoIcon} alt="" />
                        <img className='logoName' src={LogoName} alt="" />
                    </a>

                    <div>
                        <ul class="navbar-nav">
                           
                            <li class="nav-item">
                                <a class="nav-link" href="#"><div className='menuNames'><img id='recipebook' src={RecipeBook} alt="" />Recipes</div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><div className='menuNames'><img id='masala' src={Masalas} alt="" />Masalas</div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><div className='menuNames'><img id='about' src={Aboutus} alt="" />About Us</div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><div className='menuNames'><img id='contact' src={Contactus} alt="" />Contact Us</div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><div className='menuNames'><img id='community' src={Community} alt="" />Community</div></a>
                            </li>
                        </ul>
                        <div className='part'></div>
                        <div className="user"></div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar