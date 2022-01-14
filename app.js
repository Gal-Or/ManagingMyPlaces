// var unsortedList = document.querySelector("ul");
// const page = "/models/page.html";
// initProgram();

// class Site {
//   constructor(name, description, img) {
//     this.name = name;
//     this.description = description;
//     this.img = img;
//   }
// }

// function initProgram() {
//   fetch("http://localhost:3000/sites")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.length);
//       for (let i = 0; i < data.length; i++) {
//         unsortedList.appendChild(
//           generate_LI(data[i].name, data[i].description, data[i].img)
//         );
//       }
//     });
// }

// function addToList() {
//   var a = document.getElementById("fname").value;
//   var b = document.getElementById("Description").value;
//   var c = document.getElementById("Image").value;

//   document.getElementById("fname").value = "";
//   document.getElementById("Description").value = "";
//   document.getElementById("Image").value = "";

//   site = new Site(a, b, c);

//   var x = generate_LI(a, b, c);
//   unsortedList.appendChild(x);
// }

// function generate_LI(name, des, img) {
//   var x = document.createElement("li");
//   var a = document.createElement("a");
//   var image = new Image();
//   var p = document.createElement("p");
//   var h1 = document.createElement(h1);

//   x.setAttribute("class", "item");
//   x.addEventListener("click", function (e) {
//     document.querySelector("#list").style.display = "none";
//     document.querySelector("#back").style.display = "block";

//     var my_site = document.getElementById("my_site");
//     my_site.innerHTML = "";
//     image.src = img;
//     p.innerHTML = des;
//     h1.innerHTML = name;

//     my_site.appendChild(h1);
//     my_site.appendChild(p);
//     my_site.appendChild(image);
//   });

//   a.href = "";
//   a.innerText = name;

//   x.appendChild(a);

//   return x;
// }

// function removeFromList() {
//   if (unsortedList.childElementCount > 0) {
//     unsortedList.lastChild.remove();
//   }
// }
