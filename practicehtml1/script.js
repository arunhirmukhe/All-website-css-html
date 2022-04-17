function reverse(){

    
    let string1 = document.getElementById("string").value;
    var newString ="";
    for(var i = string1.length - 1; i>=0; i--)
    {
        newString += string1[i];
    }
    document.getElementById("reversedString").innerHTML = newString;

    
}

//reversedString