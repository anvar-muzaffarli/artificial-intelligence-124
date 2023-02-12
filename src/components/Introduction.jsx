import React from 'react'
import Button from './Button'
import './Introduction.css'
import Typed from 'react-typed';
import profileSvg from '../assets/images/profil.svg'


import playIcon from '../assets/images/playIcon.svg'
const Introduction = () => {
  return (
    <div className='introduction row'>
        <div className='left-side col-12 col-md-6' data-aos="fade-right">
           <h6>Next generation platform</h6>
           <Typed
           className='h1 text-white'
                strings={[
                    'Artificial Intelligence',
                    'Cybersecurity',
                    'Microsoft Azure Services']}
                    typeSpeed={90}
                    backSpeed={30}
                    
                    loop >
                   
                </Typed>
           <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

           <div className='button-groups' >
                <Button butonunIcindekiYazi="Get started" className="menim-narinci-butonum"/>
                <Button butonunIcindekiYazi="Watch Video" icon={playIcon} className="btn btn-success"/>
           </div>
        </div>

        <div className='right-side col-12 col-md-6' data-aos="fade-left">
                  <img src={profileSvg} className="w-100"/>
        </div>
    </div>
  )
}

export default Introduction