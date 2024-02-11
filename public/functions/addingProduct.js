

function addProduct(){

    const result = confirm ("Are your sure! You want to submit")

    if(result){
        fetch("/api/projects/createProjectView", {method:"POST"})
        .then(res=>{
            if(res.ok){
                location.reload();
            }
        })
    }

}