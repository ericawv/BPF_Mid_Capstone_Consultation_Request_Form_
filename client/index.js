// const { default: axios } = require("axios")

//Comment
  document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault()
  })

//Comment  
document.getElementById("availableConsultDates").onclick = function () {
  axios.get("http://localhost:4747/api/availableConsultDates/")
       .then(function (response) {
        const data = response.data;
        console.log(data);
        alert(data);
    });
};

document.getElementById("bookAppointment").onclick = function () {
        let dateInput = document.getElementById("dateRequest")  
        let enteredDate = {
        post: dateInput.value  
    }
    
    axios.post("http://localhost:4747/api/dateRequest/", enteredDate)
         .then(function (response) {
          const data = response.data
          alert(data)
          document.querySelector("form").reset() 
        })
  }

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
