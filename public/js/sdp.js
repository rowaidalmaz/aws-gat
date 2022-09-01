

var datevalue=document.getElementById("date-value");
function getAge(datevalue) 
{
    var today = new Date();
    var caseDate = new Date(dateString);
    var calday = today.getFullYear() - caseDate.getFullYear();
    var m = today.getMonth() - caseDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < caseDate.getDate())) 
    {
        calday--;
    }
  document.getElementById('result').innerHTML =calday;
}
  
  
  
  
  $(document).ready(function() {
      var max_fields = 6;
      var wrapper = $(".container2");
      var add_button = $(".add_form_field2");
  
      var x = 1;
      nextID = 0;
      $(add_button).click(function(e) {
        var id = ++nextID;
          e.preventDefault();
          if (x < max_fields) {
              x++;
              $(wrapper).append('<div class=RDSoption1><select id="RDS'+id+'"><option value="Amazon RDS for MySQL">Amazon RDS for MySQL</option><option value="Amazon RDS for PostgreSQL">Amazon RDS for PostgreSQL</option><option value="Microsoft SQL Server"> Microsoft SQL Server</option><option value="Amazon RDS for MariaDB">Amazon RDS for MariaDB</option><option value="Amazon RDS for Oracle">Amazon RDS for Oracle</option> <option value="Amazon Aurora MySQL">Amazon Aurora MySQL</option><option value="Aurora PostgreSQL">Amazon Aurora PostgreSQL</option><br></select><br><br><input type="checkbox" name="case"  value="case#1  id="Requirement8'+id+'"/>Customer Case Studie #1</div>'); //add input box
          } 
      });
  
  
  });
  
  




  function handleSubmit () {
  
   const Requirement1 = document.getElementById('Requirement1').value;
   const Requirement3 = document.getElementById('Requirement3').value;
   const Requirement03 = document.getElementById('Requirement03').value;




  //req2
  const radioButtons = document.querySelectorAll('input[name="opation1"]');
  var Requirement2;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        Requirement2 = radioButton.value;
     window.localStorage.setItem("Requirement2", Requirement2);
  
    }
  }
  
  //re4
  const radioButtons1 = document.querySelectorAll('input[name="opation2"]');
  var Requirement4;
  for (const radioButton1 of radioButtons1) {
    if (radioButton1.checked) {
      Requirement4 = radioButton1.value;
      window.localStorage.setItem("Requirement4", Requirement4);
  
    }
  }


  
//req 5



//req 6-7 
var Requirement6 = document.getElementById('Requirement6').checked;
if(Requirement6 == true){
 window.localStorage.setItem("Requirement6", Requirement6);
}

else{
  window.localStorage.setItem("Requirement6", Requirement6)= null;
}



var Requirement7 = document.getElementById('Requirement7').checked;
if(Requirement7 == true){
  window.localStorage.setItem("Requirement7", Requirement7);
}
else{
  window.localStorage.setItem("Requirement7", Requirement7)=null;
}

window.localStorage.setItem("Requirement1", Requirement1);
window.localStorage.setItem("Requirement3", Requirement3);
window.localStorage.setItem("Requirement03", Requirement03);

//to send it to DB via dynamodb


 const Requirement5 = document.getElementById('Requirement5').value;
 window.localStorage.setItem("Requirement5", Requirement5);
 const Requirement8 = document.getElementById('RDS1').value;
 window.localStorage.setItem("Requirement8", Requirement8);
 const Requirement9 = document.getElementById('RDS2').value;
 window.localStorage.setItem("Requirement9", Requirement9);
 const Requirement10 = document.getElementById('RDS3').value;
 window.localStorage.setItem("Requirement10", Requirement10);
 const Requirement11 = document.getElementById('RDS4').value;
 window.localStorage.setItem("Requirement11", Requirement11);
 const Requirement12 = document.getElementById('RDS5').value;
 window.localStorage.setItem("Requirement12", Requirement12);
 const Requirement13 = document.getElementById('RDS6').value;
 window.localStorage.setItem("Requirement13", Requirement13);
 const Requirement14 = document.getElementById('RDS7').value;
 window.localStorage.setItem("Requirement14", Requirement14);



  
      
  
  
  return;
  
  }
  
  
  // window.addEventListener('load', () => {
  
  
  // const partnername = sessionStorage.getItem('partnername');
  
  // document.getElementById("partnername").innerHTML = partnername;
  
  
  
  // })
      
  
