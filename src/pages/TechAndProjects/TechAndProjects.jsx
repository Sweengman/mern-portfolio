import Project from "../../components/Project/Project"
import projects from '../../data/projects'
import './TechAndProjects.css'

export default function NewOrderPage() {
    return(
        <>
            <h1>Technologies and projects</h1>
            <div>Javascript, Python, HTML, CSS, React, Mongodb, DjangoDB, PostgreSQL</div>
            <br/>
            <section className="Project-section">
            <Project project={projects.battleship} />
            <Project project={projects.storyboard} />
            <Project project={projects.moviement} />
            </section>
        </>
    )

}