const swup = new Swup()
const searchBtn = document.getElementById("search-btn")
const resetBtn = document.getElementById("resetBtn")
let emissions = document.getElementById("emissions")
let vehicleColour = document.getElementById("colour")
let lastv5c = document.getElementById("lastv5")
let engine = document.getElementById("engine")
let fuel = document.getElementById("fuel")
let make = document.getElementById("make")
let firstReg = document.getElementById("firstReg")
let mot = document.getElementById("mot")
let regNumber = document.getElementById("regNumber")
let taxDue = document.getElementById("taxDue")
let taxStatus = document.getElementById("taxStatus")
let typeApproval = document.getElementById("typeApproval")
let wheelplan = document.getElementById("wheelplan")
let manufacture = document.getElementById("yearOfManufacture")
let motStatus = document.getElementById("motStatus")


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
    
    emissions.innerHTML = response.co2Emissions || "Error - Not Found";
    lastv5c.innerHTML = response.dateOfLastV5CIssued || "Error - Not Found";
    engine.innerHTML = response.engineCapacity || "Error - Not Found";
    fuel.innerHTML = response.fuelType || "Error - Not Found";
    make.innerHTML = response.make || "Error - Not Found";
    firstReg.innerHTML = response.monthOfFirstRegistration || "Error - Not Found";
    mot.innerHTML = response.motExpiryDate || "Error - Not Found";
    motStatus.innerHTML = response.motStatus || "Error - Not Found";
    regNumber.innerHTML = response.registrationNumber || "Error - Not Found";
    taxDue.innerHTML = response.taxDueDate || "Error - Not Found";
    taxStatus.innerHTML = response.taxStatus || "Error - Not Found";
    typeApproval.innerHTML = response.typeApproval || "Error - Not Found";
    wheelplan.innerHTML = response.wheelplan || "Error - Not Found";
    manufacture.innerHTML = response.yearOfManufacture || "Error - Not Found";
    vehicleColour.innerHTML = response.colour || "Error - Not Found";
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

function resetInfo () {
  emissions.innerHTML = "..." ;
    lastv5c.innerHTML = "..." ;
    engine.innerHTML = "..." ;
    fuel.innerHTML = "..." ;
    make.innerHTML = "..." ;
    firstReg.innerHTML = "..." ;
    mot.innerHTML = "..." ;
    motStatus.innerHTML = "..." ;
    regNumber.innerHTML = "..." ;
    taxDue.innerHTML = "..." ;
    taxStatus.innerHTML = "..." ;
    typeApproval.innerHTML = "..." ;
    wheelplan.innerHTML = "..." ;
    manufacture.innerHTML = "..." ;
    vehicleColour.innerHTML ="..." ;
}

resetBtn.addEventListener("click", resetInfo);

document.getElementById("themeBtn").addEventListener('click', () => {
  document.body.classList.toggle('dark')
})


function changeBtn() {
  let elem = document.getElementById("themeBtn");

  if (elem.innerHTML == `<i class="bi bi-moon-stars"></i> Dark mode`) elem.innerHTML = `<i class="bi bi-brightness-high"></i> Light mode`;

  else elem.innerHTML = `<i class="bi bi-moon-stars"></i> Dark mode`;
}


