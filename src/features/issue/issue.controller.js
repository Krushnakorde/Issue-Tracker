import IssueRepository from "./issue.repository.js";

const issueRepository = new IssueRepository();

export function raisingIssuePage(req, res, next){
    
    const {projectId}=req.params;

    console.log(projectId);
    
    res.render("issueView/raiseIssuePage", {msg:null, projectId:projectId});
}





export async function getIssues(req, res, next){
    const {projectId}=req.params;

    console.log(projectId)

    try{

        const issues = await issueRepository.getIssuesOfProject ( projectId);
        res.render("issueView/issues", {issues:issues, projectId:projectId})

    }catch(err){
        next(err)
    }
}




export async function raiseAnIssue (req, res, next){
   

    const {projectId}=req.params;
    console.log(projectId);

    const {title, description, projectLabel, author}=req.body;
    try{

        const issues = await issueRepository.addIssue({
            projectId,
            title,
            description,
            projectLabel,
            author
        })
        console.log(issues);
        res.render("issueView/raiseIssuePage",{msg:"Successfully, Added Your Issue.", projectId:projectId})
    

    }catch(err){
        next(err)

    }

}



export async function filter(req, res ,next){
    try{
        const {projectId} =req.params;
        const{improvements, bugs, api, database, error }=req.body;
        console.log(improvements, bugs, api, database, error )

        const issues= await issueRepository.filter(projectId, improvements, bugs, api, database, error);

        res.render("issueView/issues", {issues:issues, projectId:projectId})


    }catch(err){
        next(err)
    }
}