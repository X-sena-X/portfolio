import React from 'react';
import './Navbar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Navbar(){
    return (
        <div className="NavContainer fixed h-screen " >
            <img src="#" alt="logo" className='self-center w-10 h-10 rounded-full mx-4'/>
            <div className="SectionContainer mt-20 justify-center items-center">
                <ul className='inline-flex-col justify-items-center text-center items-center'>
                    <li className=' text-white cursor-pointer mt-7 '>Home</li>
                    <li className=' text-white cursor-pointer mt-7'>About</li>
                    <li className=' text-white cursor-pointer mt-7'>Experience</li>
                    <li className=' text-white cursor-pointer mt-7'>Contact Me</li>
                </ul>
            </div>
            <div className="SocialSection mt-14 ">
                <ul className='flex flex-row'>
                    <li className='mx-2 w-7 h-7 text-white' ><a href="https://www.google.com"><GitHubIcon/></a></li>
                    <li className='mx-2 w-7 h-7 text-blue-500'><a href="https://www.google.com"><LinkedInIcon/></a></li>
                    <li className='mx-2 w-7 h-7 text-pink-500'><a href="https://www.google.com"><InstagramIcon/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;