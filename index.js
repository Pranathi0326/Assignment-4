user="user123"
pass=1234
function login(){;
    u=document.getElementById("u").value
p=document.getElementById("p").value;
if(u==user && p==pass){
    document.getElementById("res").innerHTML=`<span style="color:green">Login Sucessfull!</span>`
}
else if(u=="" || p==""){
    document.getElementById("res").innerHTML="Please fill in all fields";
}
else if(u!=user || p!=pass){
    document.getElementById("res").innerHTML="Invalid username or password";
}

}
function checkuser()