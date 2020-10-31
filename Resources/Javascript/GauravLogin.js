var obPeople = [
    {
        Username: "Gar",
        Password: "1256"
    },
    {
        Username: "Sahi",
        Password: "6521"
    }
]
function getInfo() {
    var Username = document.getElementById("username").value
    var Password = document.getElementById("password").value
    for(i = 0;i<obPeople.length; i++){
        if(Username==obPeople[i].Username && Password == obPeople[i].Password) {
            console.log("Username " + Username+ "Password " + Password)
            btnClicked();
        }
    }
    function btnClicked(){
        document.location.href= "Navbar.html";
    }
    console.log("Incorect")
}
