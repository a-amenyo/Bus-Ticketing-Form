document.getElementById("submit").addEventListener("click", (event) => {
    let fullName = document.getElementById("fName").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("num-people").value;
    let message = document.querySelector("textarea[name='comment']").value;
    let oneWay = document.getElementById("oneway");
    let roundTrip = document.getElementById("roundtrip");
   

    // Validations 
    let trip;

    if (roundTrip.checked == true) {
        trip = roundTrip.value;
    }
    else if (oneWay.checked) {
        trip = oneWay.value;
    }

    if (fullName == "") {
        document.getElementById("fName").style.borderColor = 'red';
        alert("Please enter your name ");
    }
    else if (!(roundTrip.checked) && !(oneWay.checked))  {
        alert("Please select your preferred trip type");
    }
  
    else if (date == "") {
        document.getElementById("date").style.borderColor = 'red';
        alert(" Please choose a valid date");

    }
    else if (people == "") {
        document.getElementById("num-people").style.borderColor = 'red';
        alert("Please select number of people you are booking for ");
    }
    else if (people < 1 ){
        document.getElementById("num-people").style.borderColor = 'red';
        alert("You cannot book for less than 1 person"); 
    }

    else if ( people >20){
        document.getElementById("num-people").style.borderColor = 'red';
        alert("You cannot book for more than 20 people")
    }

    else if (message == "") {
        alert("Please enter a message");
    }

   
   
// if everything checks 

    else {
    
            alert (" Thank you !Form successfully submitted!")

    
    }

    event.preventDefault(); 
})



