function setName(){
    let name = document.getElementById("name_data").value;
    let result = document.getElementById("result");
    if(name === " "){
        result.innerHTML= 'Please enter your Name';
    }
    else {
        result.innerHTML= "Welcome You " +name+" In my Page Have a fun!";
    }
}
let c = 0;
function incrase() {
    
    c++;
    document.getElementById("count").innerHTML=c;

}