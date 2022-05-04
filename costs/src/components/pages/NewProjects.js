import { useNavigate } from "react-router-dom"
import styles from "./NewProjects.module.css"
import ProjectsForm from "../projects/ProjectsForm"

function NewProjects() {
    const history = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json)
            .then((data) => {
                console.log(data)
                history("/projects", { state: {message: "Projeto criado com sucesso" }})})
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newprojects_container}>
            <h1>Criar Projetos</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectsForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProjects