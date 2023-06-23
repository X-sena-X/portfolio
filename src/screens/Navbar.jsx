import React from 'react';
import './Navbar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Navbar(){
    return (
        <div className="NavContainer fixed float-left h-screen bg-white" >
            <img src="#" alt="logo" className='self-center w-10 h-10 rounded-full mx-4'/>
            <div className="SectionContainer mt-20">
                <ul className='inline-flex-col self-center text-center'>
                    <li className='bg-white cursor-pointer py-4'>Home</li>
                    <li className='bg-white cursor-pointer py-4'>About</li>
                    <li className='bg-white cursor-pointer py-4'>Experience</li>
                    <li className='bg-white cursor-pointer py-4'>Contact Me</li>
                </ul>
            </div>
            <div className="SocialSection mt-14 ">
                <ul className='flex flex-row'>
                    <li className='mx-2 w-7 h-7 text-black' ><a href="https://www.google.com"><GitHubIcon/></a></li>
                    <li className='mx-2 w-7 h-7 text-blue-500'><a href="https://www.google.com"><LinkedInIcon/></a></li>
                    <li className='mx-2 w-7 h-7 text-pink-500'><a href="https://www.google.com"><InstagramIcon/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;