document.getElementById("submit").addEventListener("click", (event) => {
    let fullName = document.getElementById("fName").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("num-people").value;
    let message = document.querySelector("textarea").value;
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
    }
    else if (date == "") {
        document.getElementById("date").style.borderColor = 'red';
        alert(" Please choose a valid date");

    }
    else if (people == "") {
        document.getElementById("num-people").style.borderColor = 'red';
    }

    else if (!(roundTrip.checked) && !(oneWay.checked)) {
        alert("Please select your preferred trip type");
    }
    else if (message == "") {
        document.querySelector("textarea").style.borderColor = 'red';
    }
   
// if everything checks 

else {
    alert (" Thank you !Form successfully submitted!")
}

    event.defaultPrevented(); 
})



// function fName(){
//     let fullName = document.getElementById("fName").value;
//     if (fullName != " "){
//         console.log(fullName);
//         return fName;

//     }
//     else{
//         return null;
//     }

// }
// let submit = document.getElementById("submit");
// console.log(submit);
// submit.addEventListener("click", function(){
//     fName();
// })