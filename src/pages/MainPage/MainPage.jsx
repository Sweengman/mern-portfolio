import { useState } from 'react'
import mainPic from '../../data/ComputerDesign.png'
import './MainPage.css'

export default function MainPage() {
   
    return(
        <section className='Main'>
    <h1>Welcome to my Main Page</h1>
    <img src={mainPic} alt="" />
    <br/>
        <a href="/resume" target='_blank' rel='noopener noreferrer'><button>MyResume</button></a>
        </section>
    )

}