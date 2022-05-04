import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProjects from "./components/pages/NewProjects"
import Projects from "./components/pages/Projects"
import Project from "./components/pages/Project"

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newprojects" element={<NewProjects />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
    )
}

export default MyRoutes