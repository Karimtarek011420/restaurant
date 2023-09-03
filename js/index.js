let ineerWidth = $(".nav-links").innerWidth();
$(document).ready(function () {
  let ineerWidth = $(".nav-links").innerWidth();
  //$("#nav").css("left", -ineerWidth);
  $(".sk-fading-circle").fadeOut(1000, function () {
    $("#loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto", 1000);
    });
  });
  $(".icons-White .display").click(function () {
    if ($("#nav").css("left") != "0px") {
      $("#nav").animate({ left: "0px" });
      $(".icons-White .play").css("display", "block");
      $(".icons-White .display").css("display", "none");
    }
  });
  $(".icon_links .fa-xmark").click(function () {
    if ($("#nav").css("left") == "0px") {
      $("#nav").animate({ left: -ineerWidth });
      $(".icons-White .play").css("display", "none");
      $(".icons-White .display").css("display", "block");
    }
  });
  responseCategories();
  // mealcategory("Beef and Mustard Pie");
  if ($("#nav").css("left") != "0px") {
    $("#nav").animate({ left: "0px" });
    $(".icons-White .play").css("display", "block");
    $(".icons-White .display").css("display", "none");
  } else {
    $("#nav").animate({ left: -ineerWidth });
    $(".icons-White .play").css("display", "none");
    $(".icons-White .display").css("display", "block");
  }
});
//// Api respinse
let mealDate = document.getElementById("mealDate");
let categories = document.getElementById("categories");
let Area = document.getElementById("Area");
let searchMeals = document.getElementById("searchmeal");
//responseCategories()
categories.addEventListener("click", function () {
  responseCategories();
  if ($("#nav").css("left") != "0px") {
    $("#nav").animate({ left: "0px" });
    $(".icons-White .play").css("display", "block");
    $(".icons-White .display").css("display", "none");
  } else {
    $("#nav").animate({ left: -ineerWidth });
    $(".icons-White .play").css("display", "none");
    $(".icons-White .display").css("display", "block");
  }
});
async function responseCategories() {
  mealDate.innerHTML = "";
  searchMeals.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();
  displayCategories(response.categories);
  //   $("#loading").fadeOut(2000);
}
function displayCategories(arr) {
  searchMeals.innerHTML = "";
  let box = ``;
  for (let i = 0; i < arr.length; i++) {
    box += `
    <div class="col-md-3">
    <div onclick="mealcategory('${arr[i].strCategory}')" class="meal bg-danger position-relative overflow-hidden rounded-3 bg-black">
      <img src="${arr[i].strCategoryThumb}" alt="" class="w-100" />
      <div class="item text-center p-3 text-black">
        <h2>${arr[i].strCategory}</h2>
        <p>${arr[i].strCategoryDescription}</p>
      </div>
    </div>
  </div>`;
  }
  mealDate.innerHTML = box;
}
//responseArea()
Area.addEventListener("click", function () {
  responeArea();
  if ($("#nav").css("left") != "0px") {
    $("#nav").animate({ left: "0px" });
    $(".icons-White .play").css("display", "block");
    $(".icons-White .display").css("display", "none");
  } else {
    $("#nav").animate({ left: -ineerWidth });
    $(".icons-White .play").css("display", "none");
    $(".icons-White .display").css("display", "block");
  }
});
async function responeArea() {
  mealDate.innerHTML = "";
  searchMeals.innerHTML = "";
  let respone = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  respone = await respone.json();
  displayArea(respone.meals);
}
function displayArea(arr) {
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `
      <div class="col-md-3">
              <div onclick="mealarea('${arr[i].strArea}')" class="text-center item_Area">
              <i class="fa-solid fa-laptop-code fa-3x"></i>
              <h3>${arr[i].strArea}</h3>
              </div>
      </div>`;
  }
  mealDate.innerHTML = box;
}
//responseIngredients
let Ingredients = document.getElementById("Ingredients");
Ingredients.addEventListener("click", function () {
  getIngredients();
  if ($("#nav").css("left") != "0px") {
    $("#nav").animate({ left: "0px" });
    $(".icons-White .play").css("display", "block");
    $(".icons-White .display").css("display", "none");
  } else {
    $("#nav").animate({ left: -ineerWidth });
    $(".icons-White .play").css("display", "none");
    $(".icons-White .display").css("display", "block");
  }
});
async function getIngredients() {
  mealDate.innerHTML = "";
  searchMeals.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = await response.json();
  console.log(response.meals);
  displayIngredients(response.meals.slice(0, 20));
}
function displayIngredients(arr) {
  searchMeals.innerHTML = "";
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `
      <div class="col-md-3">
              <div onclick="mealIngredients('${
                arr[i].strIngredient
              }')" class="text-center item_Area">
                      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                      <h3>${arr[i].strIngredient}</h3>
                      <p>${arr[i].strDescription
                        .split(" ")
                        .slice(0, 20)
                        .join(" ")}</p>
              </div>
      </div> `;
  }
  mealDate.innerHTML = box;
}
// meal category ,area,ingriats
function displaydescription(arr) {
  let box = ``;
  for (let i = 0; i < arr.length; i++) {
    box += `
  <div class="col-md-3">
    <div onclick="mealDetail('${arr[i].idMeal}')" class="meal  position-relative overflow-hidden rounded-3 bg-black">
      <img src="${arr[i].strMealThumb}" alt="" class="w-100" />
      <div class="item text-center p-3 text-black">
        <h2>${arr[i].strMeal}</h2>
      </div>
    </div>
  </div>
  `;
  }
  mealDate.innerHTML = box;
}
async function mealcategory(catagroy) {
  mealDate.innerHTML = "";
  searchMeals.innerHTML = "";
  let response = await fetch(
    `https://themealdb.com/api/json/v1/1/filter.php?c=${catagroy}`
  );
  response = await response.json();
  // console.log(response.meals.slice(0, 20));
  displaydescription(response.meals.slice(0, 20));
}
async function mealarea(area) {
  mealDate.innerHTML = "";
  searchMeals.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  response = await response.json();
  // console.log(response.meals.slice(0, 20));
  displaydescription(response.meals.slice(0, 20));
}
async function mealIngredients(Ingredients) {
  mealDate.innerHTML = "";
  searchMeals.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredients}`
  );
  response = await response.json();
  // console.log(response.meals.slice(0, 20));
  displaydescription(response.meals.slice(0, 20));
}
async function mealDetail(IDmeal) {
  mealDate.innerHTML = "";
  searchMeals.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IDmeal}`
  );
  response = await response.json();
  console.log(response.meals);
  displayDetails(response.meals[0]);
}
function displayDetails(meal) {
  let ingredients = ``;
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients += `<li class="alert alert-info m-1 p-1">${
        meal[`strMeasure${i}`]
      }${meal[`strIngredient${i}`]}</li>`;
    }
  }
  let box = ``;
  box += `
  <div class="col-md-4">
  <img class="w-100 rounded-3" src="${meal.strMealThumb}"
      alt="">
      <h2>${meal.strMeal}</h2>
</div>
<div class="col-md-8">
  <h2>Instructions</h2>
  <p>${meal.strInstructions}</p>
  <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
  <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
  <h3>Recipes :</h3>
  <ul class="list-unstyled d-flex g-3 flex-wrap">
      ${ingredients}
  </ul>
  <h3>tages :</h3>
  <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
  <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
</div>`;
  mealDate.innerHTML = box;
}
//search website
let search = document.getElementById("search");
search.addEventListener("click", function () {
  searchMeal();
  if ($("#nav").css("left") != "0px") {
    $("#nav").animate({ left: "0px" });
    $(".icons-White .play").css("display", "block");
    $(".icons-White .display").css("display", "none");
  } else {
    $("#nav").animate({ left: -ineerWidth });
    $(".icons-White .play").css("display", "none");
    $(".icons-White .display").css("display", "block");
  }
});
function searchMeal() {
  searchMeals.innerHTML = `
  <div class="row py-3">
  <div class="col-md-6">
    <input type="text" onkeyup="searchname(this.value)" id="Name"
      class="form-control text-white bg-transparent "
      placeholder="search By name"
    />
  </div>
  <div class="col-md-6">
    <input onkeyup="searchletter(this.value)"
      type="text"
      class="form-control text-white bg-transparent"
      placeholder="search By Frist Letter"
    />
  </div>
</div>
   `;
  mealDate.innerHTML = "";
}
async function searchname(bar) {
  mealDate.innerHTML = "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${bar}`
  );
  response = await response.json();
  response.meals ? displaydescription(response.meals) : displaydescription([]);
}
async function searchletter(bar) {
  mealDate.innerHTML = "";
  bar == "" ? bar == "a" : "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${bar}`
  );
  response = await response.json();
  response.meals ? displaydescription(response.meals) : displaydescription([]);
}
////// contect us
let content = document.getElementById("content");
content.addEventListener("click", function () {
  contectMeal();
  if ($("#nav").css("left") != "0px") {
    $("#nav").animate({ left: "0px" });
    $(".icons-White .play").css("display", "block");
    $(".icons-White .display").css("display", "none");
  } else {
    $("#nav").animate({ left: -ineerWidth });
    $(".icons-White .play").css("display", "none");
    $(".icons-White .display").css("display", "block");
  }
});

function contectMeal() {
  mealDate.innerHTML = `
  <div class="d-flex justify-content-center align-items-center my-5" id="form">
  <div class="container w-75 text-center">
    <div class="row g-3 text-white">
      <div class="col-md-6">
        <input type="text" class="bg-white form-control" placeholder="Entre Your name" id="nameInput" onkeyup="Surecontect()">
        <div class="bg-info my-2 py-3 d-none" id="textName">
          Special characters and numbers not allowed
        </div>
      </div>
      <div class="col-md-6">
        <input type="email" class="bg-white form-control" placeholder="Entre Your Email" id="EmailInput" onkeyup="Surecontect()">
        <div class="bg-info my-2 py-3 d-none" id="textEmail">
          Email not valid *exemple@yyy.zzz
        </div>
      </div>
      <div class="col-md-6">
        <input  class="bg-white form-control" placeholder="Entre Your Phone" id="PhoneInput">
        <div class="bg-info my-2 py-3 d-none" id="textPhone">
          Enter valid Phone Number
        </div>
      </div>
      <div class="col-md-6">
        <input type="number" class="bg-white form-control" placeholder="Entre Your Age" id="Age">
        <div class="bg-info my-2 py-3 d-none" id="textAge">
          Enter valid age
        </div>
      </div>
      <div class="col-md-6">
        <input type="password" class="bg-white form-control" placeholder="Entre Your password"  id="password">
        <div class="bg-info my-2 py-3 d-none" id="textpassword">
          Enter valid password *Minimum eight characters, at least one letter and one number:*
        </div>
      </div>
      <div class="col-md-6">
        <input type="password" class="bg-white form-control" placeholder="repassword" id="repassword">
        <div class="bg-info my-2 py-3 d-none" id="textrepassword">
          Enter valid repassword 
        </div>
      </div>
      <div>
        <button id="Submit" class="btn btn-outline-info py-2 mt-3" disabled>Submit</button>
      </div>

    </div>
  </div>
</div>
  `;
}
function Surecontect() {
  validName();
  validPhone();
  validEmail();
  Submitbutton();
}
function Submitbutton() {
  let Submit = document.getElementById("Submit");
  if (NameValidtion() && EmailValidtion() && PhoneValidtion() == true) {
    Submit.removeAttribute("disabled");
  } else {
    Submit.setAttribute("disabled", true);
  }
}
function validName() {
  let textName = document.getElementById("textName");
  if (NameValidtion() == true) {
    textName.classList.replace("d-block", "d-none");
  } else {
    textName.classList.replace("d-none", "d-block");
  }
}
function validEmail() {
  let textEmail = document.getElementById("textEmail");
  if (EmailValidtion() == true) {
    textEmail.classList.replace("d-block", "d-none");
  } else {
    textEmail.classList.replace("d-none", "d-block");
  }
}
function validPhone() {
  let textPhone = document.getElementById("textPhone");
  if (PhoneValidtion() == true) {
    textPhone.classList.replace("d-block", "d-none");
  } else {
    textPhone.classList.replace("d-none", "d-block");
  }
}
function NameValidtion() {
  let nameInput = document.getElementById("nameInput");
  let regex = /^[A-Za-z]{2,}$/;
  return regex.test(nameInput.value);
}
function EmailValidtion() {
  let EmailInput = document.getElementById("EmailInput");
  let regex = /^[A-Za-z]{2,}\@[a-z]{2,}\.[a-z]{2,}$/;
  return regex.test(EmailInput.value);
}
function PhoneValidtion() {
  let PhoneInput = document.getElementById("PhoneInput");
  let regex = /^[0-9]{11}$/;
  return regex.test(PhoneInput.value);
}
function AgeValidtion() {
  let PhoneInput = document.getElementById("PhoneInput");
  let regex = /^[0-9]{11}$/;
  return regex.test(PhoneInput.value);
}
