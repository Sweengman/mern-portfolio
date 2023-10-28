import './Project.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

export default function Project({ project }) {
    const [style, setStyle] = useState({display: 'none'})
    return(
        <>
            <Routes>
            <Route path={project.name} Component={() => {
                window.location.href = `${project.linkLive}`
                return null;
            }}/>
            <Route path={`${project.name}/github`} Component={() => {
                window.location.href = `${project.linkLive}`
                return null;
            }}/>
            </Routes>
            <div  className='Project-title'><h3>{project.name}</h3></div>

        <div 
        className='Project' 
        style= {{backgroundImage: `url(${project.img})`}} 
        onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
        onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }} >

            <div className='Project-detail' style={style}>
            <span>Technologies: {project.tech}</span>
            <br/>
            <span>{project.desc}</span>
            <span>{project.details}</span>
            <br/>
            <a href="/{project.name}">To Repo</a>
             &nbsp; | &nbsp;
            <a href="/{project.name}/github">To Live Site</a>
            </div>

        </div>
        </>
    )

}