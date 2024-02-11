import express from "express";
import { addNewProject, getCreateNewProjectView, getProjects, searchProjects } from "./project.controller.js"


const projectRouter = express.Router();

projectRouter.get("/", getCreateNewProjectView) // it will render page for adding a project for evaluating

projectRouter.post("/createProject", addNewProject) // Adding new project

projectRouter.get("/projectsPage", getProjects) // get All projects

projectRouter.post("/search", searchProjects) // search project on the basis of author and project name;


export default projectRouter;