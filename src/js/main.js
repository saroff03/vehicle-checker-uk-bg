const searchBtn = document.getElementById("search-btn")
let emissions = document.getElementById("emissions")
let vehicleColour = document.getElementById("colour")
let lastv5c = document.getElementById("lastv5")
let euroStatus = document.getElementById("euroStatus")
let fuel = document.getElementById("fuel")
let make = document.getElementById("make")
let exportStatus = document.getElementById("export")
let firstReg = document.getElementById("firstReg")
let firstRegDvla = document.getElementById("firstRegDvla")
let mot = document.getElementById("mot")
let regNumber = document.getElementById("regNumber")
let taxDue = document.getElementById("taxDue")
let taxStatus = document.getElementById("taxStatus")
let typeApproval = document.getElementById("typeApproval")
let wheelplan = document.getElementById("wheelplan")
let manufacture = document.getElementById("yearOfManufacture")


function startFetch() {
  let plate = document.getElementById("plate").value

  let reg = {registrationNumber: `${plate}`}

  fetch(`/vehicleinfo`, {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(reg),
  }) 

  .then(response => response.json())

  .then(response => {
    console.log(response);
    

    vehicleColour.innerHTML = response.colour;
  })    

  .catch(err => {
	  console.log(err);
  });
};


searchBtn.addEventListener("click", startFetch);

function upperCaseF(a){
  setTimeout(function(){
      a.value = a.value.toUpperCase();
  }, 1);
}
