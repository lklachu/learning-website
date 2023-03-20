function studentlog(){
    window.location.href="StudentLogin.html";
}
function trainerlog(){
    window.location.href="TrainerLogin.html";
}
function stupage(){
    window.location.href="StudentPage.html";
    
}
function stusign(){
    window.location.href="StudnetSignup.html";
}
function trainersign(){
    window.location.href="TrainerSignup.html";
}
function trainpage(){
    window.location.href="TrainerPage.html";
}
function mainpage(){
    window.location.href="Videopage.html";
}
function trainerClass(){
    var course=document.getElementById("course").value;
    var batch=document.getElementById("batch").value;
    if(course=='java' && batch=='3ccwa1'){
        window.location.href="Videopage.html";
    }
    else if(course=='webtech' && batch=='3ccwa2'){
        alert("Did not develop this page. It will develop very soon");
    }
    else if(course=='sql' && batch=='3ccwa3'){
        alert("Did not develop this page. It will develop very soon");
    }
    else if(course=='python' && batch=='3ccwa4'){
        alert("Did not develop this page. It will develop very soon");
    }
    else if(course=='j2ee' && batch=='3ccwa5'){
        alert("Did not develop this page. It will develop very soon");
    }
    else if(course=='testing' && batch=='3ccwa6'){
        alert("Did not develop this page. It will develop very soon")
    }
    else{
        alert("Invalid choice!! plz select valid choice");
    }
}