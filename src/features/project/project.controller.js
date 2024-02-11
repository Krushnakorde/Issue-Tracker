// controller for project specific request

import ProjectRepository from "./project.repository.js";

const projectRepository = new ProjectRepository();


export function getCreateNewProjectView(req, res, next){
        
    res.render('projectView/createNewProject', {msg:null})
}


// for adding new project

export async function addNewProject(req, res, next){

    try{

        const {projectName, description, author} = req.body;
        

        const project = {
            projectName,
            description, 
            author
        }

        const savedProject = await projectRepository.addingNewProject(project);

        
        res.render('projectView/createNewProject', {msg:"Successful! Project is listed."})


    }catch(err){
        next(err);
    }

}

// for gitting all projects listed on server

export async function getProjects( req, res, next ){
    try{

        const projects = await projectRepository.getProjectsRepository()

        // res.status(200).send(projects);

        res.render("projectView/project", {projects:projects});


    }catch(err){
        next(err);
    }

}


// for searching projects

export async function searchProjects(req, res, next){
    try{
        const {data}=req.body;
        const projects= await projectRepository.search(data);

        res.render("projectView/project", {projects:projects});
        
    }catch(err){
        next(err)
    }
}