// define the callAPI function that takes a parameters
var callAPI = (partnername, remaining1,remaining42,remaining3,remaining4,remaining6,remaining7,remaining8,remaining9,remaining10,remaining11,remaining12,remaining13)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable

    // Write about this and how to send data to dynamoDB from API 
    var state1 = JSON.stringify({"partnerName":partnername,"ServicePath":remaining1,"Micrositeurl:":remaining42,"Self-Assessment":remaining3,"CaseStudy":remaining4,"firstDBengine":remaining6,
    "Add DB":remaining7,"AddDB-2":remaining8,"AddDB-3":remaining9,"AddDB-4":remaining10,"AddDB-5":remaining11,"AddDB-6":remaining12,"AddDB-7":remaining13});
 


    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:state1,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://x83uru4ey3.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
};









window.addEventListener('load', () => {

const partnername = window.localStorage.getItem('partnername');
const Requirement1 = window.localStorage.getItem('Requirement1');
const Requirement2 = window.localStorage.getItem('Requirement2');
const Requirement3 = window.localStorage.getItem('Requirement3');
const Requirement03 = window.localStorage.getItem('Requirement03');
const Requirement4 = window.localStorage.getItem('Requirement4');
const Requirement5 = window.localStorage.getItem('Requirement5');
const Requirement6 = window.localStorage.getItem('Requirement6');
const Requirement7 = window.localStorage.getItem('Requirement7');
const Requirement8 = window.localStorage.getItem('Requirement8');
const Requirement9 = window.localStorage.getItem('Requirement9');
const Requirement10 = window.localStorage.getItem('Requirement10');
const Requirement11 = window.localStorage.getItem('Requirement11');
const Requirement12 = window.localStorage.getItem('Requirement12');
const Requirement13 = window.localStorage.getItem('Requirement13');
const Requirement14 = window.localStorage.getItem('Requirement14');





//req0
document.getElementById("remaining1").innerHTML = Requirement1;




//req2


if(Requirement2=="Yes"){
document.getElementById("remaining42").innerHTML = "Microsite url: " + Requirement3;
document.getElementById("nextstep2").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';
}

if(Requirement2=="No"){

document.getElementById("remaining42").innerHTML = '-';
document.getElementById("nextstep2").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
}


//req4



if(Requirement4=="Yes"){
document.getElementById("remaining3").innerHTML ="Self-Assessemnt url: " + Requirement03;
document.getElementById("nextstep3").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';
}

if(Requirement4=="No"){

document.getElementById("remaining3").innerHTML = "-";
document.getElementById("nextstep3").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
}




//req6 - req7



if(Requirement6=='true'&& Requirement7=='true') {
    
document.getElementById("remaining4").innerHTML = "2";
// document.getElementById("remaining6").innerHTML = Requirement5;
document.getElementById("nextstep4").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';
document.getElementById("nextstep6").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';


}

else{
document.getElementById("remaining4").innerHTML = "0";
document.getElementById("remaining6").innerHTML = "-";
document.getElementById("nextstep4").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
document.getElementById("nextstep61").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';


}

if(Requirement6=='true'& Requirement7=='false'){
    document.getElementById("remaining4").innerHTML = "1";
    document.getElementById("remaining6").innerHTML = "case #1";
    document.getElementById("nextstep4").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
    document.getElementById("nextstep61").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
    
    
    }


    document.getElementById("remaining7").innerHTML = Requirement8;
    document.getElementById("remaining8").innerHTML = Requirement9;
    document.getElementById("remaining9").innerHTML = Requirement10;
    document.getElementById("remaining10").innerHTML =Requirement11;
    document.getElementById("remaining11").innerHTML =Requirement12;
    document.getElementById("remaining12").innerHTML =Requirement13;
    document.getElementById("remaining13").innerHTML =Requirement14;


})



// bootbox.dialog({ 
//     title: 'Custom Dialog Example',
//     message: '<p>This dialog demonstrates many of the options available when using the Bootbox library</p>',
//     size: 'large',
//     onEscape: true,
//     backdrop: true,
//     buttons: {
//         fee: {
//             label: 'Fee',
//             className: 'btn-primary',
//             callback: function(){
                            
//             }
//         },
//         fi: {
//             label: 'Fi',
//             className: 'btn-info',
//             callback: function(){
                            
//             }
//         },
//         fo: {
//             label: 'Fo',
//             className: 'btn-success',
//             callback: function(){
                            
//             }
//         },
//         fum: {
//             label: 'Fum',
//             className: 'btn-danger',
//             callback: function(){
                            
//             }
//         }
//     }
// })


