console.log("Hello World");

// TODO
import Wishlist from "./Wishlist";

//Select the form
let form = document.querySelector("#submitForm")
//Select the input for car make
let makeInput = document.querySelector("#makeInput")
//Select the input for car model
let modelInput = document.querySelector("#modelInput")
//Select the input for car year
let yearInput = document.querySelector("#yearInput")
//Select the paragraph element for car make
let makeDisplay = document.querySelector("#car-make")
//Select the paragraph element for car model
let modelDisplay = document.querySelector("#car-model")
//Select the paragraph element for car year
let yearDisplay = document.querySelector("#car-year")
//Select the remove button
let removeBtn = document.querySelector(".removeBtn")
//Select the wishlist unordered list element
let ulList = document.querySelector("#wishListContainer > ul")

// Event Listeners
form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

//Functions

function showCarDetails(car){
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.year;

    removeBtn.disabled = false;

    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList(){
    ulList.innerHTML = "";

    Wishlist.list.forEach((car) =>{
        let li = document.createElement("li")
        li.textContent =car.model
        li.addEventListener("click", () => showCarDetails(car));
        ulList.appendChild(li);
    });
}

function addCar(){
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    Wishlist.add(make, model, year);

    updateDOMList();
     makeInput.value = ""
    modelInput.value = ""
    yearInput.value = ""
}


function removeCar(){
    let carId = Number(removeBtn.getAttribute("data-carId"));

    Wishlist.remove(carId);

    updateDOMList();

    makeDisplay.textContent = "";
    modelDisplay.textContent = "";
    yearDisplay.textContent = "";

    removeBtn.disabled = true;
}