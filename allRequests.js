console.log("in all requests file !!\n");

const add_button = document.getElementsByClassName("add_button");
var unsortedList = document.querySelector("ul");
const page = "/models/page.html";
//pushJsonToDB()
initPage();

class Site {
  constructor(name, description, img) {
    this.name = name;
    this.description = description;
    this.img = img;
  }
}

arr = [];

async function pushJsonToDB() {
  console.log("pushJsonToDB");
  const outSitesFromGetRequest = await getOurSites();
  for (let i = 0; i < outSitesFromGetRequest.length; i++) {
    await insertNewPlace(
      outSitesFromGetRequest[i].name,
      outSitesFromGetRequest[i].description,
      outSitesFromGetRequest[i].image
    );
  }
}

async function initPage() {
  console.log("initPage");
  const dataFromGetRequest = await getData();
  if (dataFromGetRequest.length == 0) {
    console.log("pushJsonToDB");
    const outSitesFromGetRequest = await getOurSites();
    for (let i = 0; i < outSitesFromGetRequest.length; i++) {
      await insertNewPlace(
        outSitesFromGetRequest[i].name,
        outSitesFromGetRequest[i].description,
        outSitesFromGetRequest[i].img
      );
      arr.push(outSitesFromGetRequest[i]);
      unsortedList.appendChild(
        generate_LI(
          outSitesFromGetRequest[i].name,
          outSitesFromGetRequest[i].description,
          outSitesFromGetRequest[i].img
        )
      );
    }
  } else {
    for (let i = 0; i < dataFromGetRequest.length; i++) {
      const element = dataFromGetRequest[i];
      arr.push(element);
      unsortedList.appendChild(
        generate_LI(arr[i].name, arr[i].description, arr[i].img)
      );
    }
  }
}

async function getData() {
  const { data } = await axios.get("http://localhost:3000/sites");
  return data;
}

async function getOurSites() {
  const { data } = await axios.get("http://localhost:3000/ourSites");
  return data;
}

async function insertNewPlace(name, description, img) {
  obj = { name, description, img };
  //console.log(obj);

  const { data } = await axios.post("http://localhost:3000/sites/postData", {
    obj,
  });
  return data;
}

async function deletePlaceReq(id) {
  console.log(id);
  const data = await axios.delete(`http://localhost:3000/sites/${id}`);
  return data;
}

async function removeFromList() {
  console.log(arr.length);

  if (unsortedList.childElementCount > 0) {
    unsortedList.lastChild.remove();
    const data = await deletePlaceReq(arr[arr.length - 1]["_id"]);
    arr.pop();
  }
}

async function addToList() {
  console.log("in addToList function");

  var a = document.getElementById("fname").value;
  var b = document.getElementById("Description").value;
  var c = document.getElementById("Image").value;

  if ((a == "") | (b == "") | (c == "")) {
    alert("All fields must be filled!");
    return;
  }
  const dataFromPostRequest = await insertNewPlace(a, b, c);
  arr.push(dataFromPostRequest);

  document.getElementById("fname").value = "";
  document.getElementById("Description").value = "";
  document.getElementById("Image").value = "";

  site = new Site(a, b, c);

  var x = generate_LI(a, b, c);
  unsortedList.appendChild(x);
}

function toggleBackBtn() {
  console.log("before: >>>");
  console.log(document.querySelector("#info_container").style.display);
  if (document.querySelector("#info_container").style.display != "none") {
    document.querySelector("#info_container").style.display = "none";
    document.querySelector("#back").style.display = "block";
  } else {
    document.querySelector("#back").style.display = "none";
    document.querySelector("#info_container").style.display = "block";
  }
  console.log("after: >>>");
  console.log(document.querySelector("#info_container").style.display);
}

function generate_LI(name, des, img) {
  var x = document.createElement("li");
  var a = document.createElement("a");
  var image = new Image();
  var p = document.createElement("p");
  var h2 = document.createElement("h2");

  x.setAttribute("class", "item");
  x.addEventListener("click", function (e) {
    toggleBackBtn();
    var my_site = document.getElementById("my_site");
    my_site.innerHTML = "";
    console.log(img);
    image.src = img;
    p.innerHTML = des;
    h2.innerHTML = name;

    my_site.appendChild(h2);
    my_site.appendChild(p);
    my_site.appendChild(image);
  });

  a.innerText = name;

  x.appendChild(a);

  return x;
}
