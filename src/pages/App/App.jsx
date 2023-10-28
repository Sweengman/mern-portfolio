
import './App.css'; 
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MainPage from '../MainPage/MainPage'
import NavBar from '../../components/NavBar/NavBar'
import TechAndProjects from '../TechAndProjects/TechAndProjects'
import AboutMe from '../AboutMe/AboutMe'


export default function App() {
  return (
    <main className='App'>
          <NavBar />
          <Routes>
            <Route path='/about' element={ <AboutMe /> } />
            <Route path='/mytech' element={ <TechAndProjects /> } />
            <Route path='/' element={ <MainPage /> } />
            <Route path='/linkedin/sweeney' Component={() => {
              window.location.href = 'https://www.linkedin.com/in/sweeney-corniea/'
              return null;
            }}/>
            <Route path='/GitHub/sweeney' Component={() => {
              window.location.href = 'https://github.com/Sweengman'
              return null;
            }}/>
            <Route path='/email' Component={() => {
              window.location.href = 'mailto: sweenfi@gmail.com'
              return null;
            }}/>
            <Route path='/resume' Component={() => {
              window.location.href = 'https://docs.google.com/document/d/1cr3gg7TDaDBkAJZN80b-Vj30NLn10YHKpEwxGvzM2og/edit?usp=sharing'
              return null;
            }}/>
          </Routes>
    </main>
  );
}