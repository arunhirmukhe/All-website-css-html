function ValidationForm(){
    let Name = document.forms["Form"]["name"].value;
    let Email = document.forms["Form"]["email"].value;
    let Mobile = document.forms["Form"]["mobile"].value;
    let Age = document.forms["Form"]["age"].value;
    let Gender = document.forms["Form"]["gender"].value;
    let Qua = document.forms["Form"]["que"].value;
    
    if(Name == "" && Email == "" && Mobile == "" && Age == "" && && Gender == "" && Que == ""){
        alert("Every Field should be filed!");
    }

}