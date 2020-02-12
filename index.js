function validateCamps(){
    const x = document.getElementsByTagName("input");
    let filter = /^([\w-]+(?:\.[\w-] +)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if(x[0].value == ""){
        alert("First Name can't be empty")
    }else if(x[1].value == ""){
        alert("Last Name can't be empty")
    }else if(x[2].value  == "" || x[1].value !== filter){
        alert("Please check your email. It can't be empty and it be a valid email")
    }else if(x[3].value == ""){
        alert("Password can't be empty")
    }else{
        return false
    }

} 