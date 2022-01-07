// const { default: axios } = require("axios")

//Prevents the form input data from being cleared when the screen refreshes before the submit action takes place
  document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault()
  })

//When the View Available Dates button is clicked. Using the GET API, the Available Consultation Dates are returned in an alert box  
document.getElementById("availableConsultDates").onclick = function () {
  axios.get("http://localhost:4747/api/availableConsultDates/")
       .then(function (response) {
        const data = response.data;
        // console.log(data);
        alert(data);
    });
};

//When the Book button is clicked. The entered date input value is posted to the server
document.getElementById("bookAppointment").onclick = function () {
        let dateInput = document.getElementById("dateRequest")  
        let enteredDate = {
        post: dateInput.value  
    }
//Using the POST API, to return the booked consultation confirmation with the date entered/posted in an alert box. Form resets once the alert box is respondeds to.     
    axios.post("http://localhost:4747/api/dateRequest/", enteredDate)
         .then(function (response) {
          const data = response.data
          alert(data)
          document.querySelector("form").reset() 
        })
  }

//Following funcations styles each form input field and the select box to change from transparent to a white background once a value is entered and selected.    

function focusFunction() {
  document.getElementById("input").style.background = "white";
}

function blurFunction() {
  document.getElementById("input").style.background = "white";
}

function focusFunctionLast() {
  document.getElementById("inputLast").style.background = "white";
}

function blurFunctionLast() {
  document.getElementById("inputLast").style.background = "white";
}
function focusFunctionPhone() {
  document.getElementById("inputPhone").style.background = "white";
  }
  
function blurFunctionPhone() {
  document.getElementById("inputPhone").style.background = "white";
  }

function focusFunctionDate() {
  document.getElementById("dateRequest").style.background = "white";
  }
  
function blurFunctionDate() {
  document.getElementById("dateRequest").style.background = "white";
  }

function focusFunctionSelect() {
  document.getElementById("inputSelect").style.background = "white";
  }
  
function blurFunctionSelect() {
  document.getElementById("inputSelect").style.background = "white";
  }
