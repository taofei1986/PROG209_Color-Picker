let showButton = document.getElementById("showButton");
showButton.addEventListener("click", showColor);
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearColor);

function showColor(){
    let redNumberValue=document.getElementById("redNumber").value;
    let greenNumberValue=document.getElementById("greenNumber").value;
    let blueNumberValue=document.getElementById("blueNumber").value;
    let validateBool=validate(redNumberValue,greenNumberValue,blueNumberValue);
    if(validateBool){
        let redHex=converToHex(redNumberValue);
        let greenHex=converToHex(greenNumberValue);
        let blueHex=converToHex(blueNumberValue);
        console.log(redHex);console.log(greenHex);console.log(blueHex);
        document.getElementById("colorHexValue").innerHTML="<br/>The red hex value is \""+redHex+"\". The green hex value is \""+greenHex+"\". The blue hex value is \""+blueHex+"\".";
        document.getElementById("colorShow").style.backgroundColor="#"+redHex+greenHex+blueHex;
    }
}

function validate(redToValidate,greenToValidate,blueToValidate){
    validatePatton=/^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])$/;//0-255 integer
    if(redToValidate===""){
        alert("Please input a integer between 0 to 255 for red value");
        return false;
    }
    if(greenToValidate===""){
        alert("Please input a integer between 0 to 255 for green value");
        return false;
    }
    if(blueToValidate===""){
        alert("Please input a integer between 0 to 255 for blue value");
        return false;
    }
    if(!validatePatton.test(redToValidate)){
        alert("Please input a integer between 0 to 255 for red value");
        return false;
    }
    if(!validatePatton.test(greenToValidate)){
        alert("Please input a integer between 0 to 255 for green value");
        return false;
    }
    if(!validatePatton.test(blueToValidate)){
        alert("Please input a integer between 0 to 255 for blue value");
        return false;
    }
    return true;
}

function converToHex(inputNumber){
    let hexNum=parseInt(inputNumber).toString(16);
    if(hexNum.length==1){
        hexNum=0+hexNum;
    }
    return hexNum;
}

function clearColor(){
    document.getElementById("redNumber").value="";
    document.getElementById("greenNumber").value="";
    document.getElementById("blueNumber").value="";
    document.getElementById("colorShow").style.backgroundColor="";
}
