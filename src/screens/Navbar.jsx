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
                    <li className=' text-white cursor-pointer mt-7 ' onClick={()=>{
                        const anchor = document.querySelector('#NameContainer')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}>Home</li>
                    <li className=' text-white cursor-pointer mt-7' onClick={()=>{
                        const anchor = document.querySelector('#Section2')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}>About</li>
                    <li className=' text-white cursor-pointer mt-7' onClick={()=>{
                        const anchor = document.querySelector('#Section4')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}>Experience</li>
                    <li className=' text-white cursor-pointer mt-7' onClick={()=>{
                        const anchor = document.querySelector('#Section6')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}>Contact Me</li>
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