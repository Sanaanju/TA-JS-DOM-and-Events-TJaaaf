let root = document.querySelector("ul");
let houseList = document.querySelector(".houses");
let search = document.querySelector("#search");
let activeHouse = "";

let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

let allHouses = got.houses.map((house) => {
  return house.name;
});

//To Create House List
function createHouseList(houses = []) {
  houseList.innerHTML = "";
  houses.forEach((house) => {
    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = house;

    if (activeHouse === house) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      activeHouse = house;
      let peopleOfHouse =
        got.houses.find((tag) => tag.name === house).people || [];
      createCard(peopleOfHouse);
      createHouseList(houses);
    });

    houseList.append(button);
  });
}

//To Create Card
function createCard(persons = []) {
  root.innerHTML = "";
  persons.forEach((person) => {
    let li = document.createElement("li");
    li.classList.add(
      "card",
      "flex-30",
      "flex",
      "flex-column",
      "justify-between",
      "align-center",
      "padding"
    );
    li.innerHTML = `
     <div class="imgBox">
       <img src="${person.image}" alt="An Image Here">
     </div>
      <cite>${person.name}</cite>
      <p>${person.description}</p>
      <a href="${person.wikiLink}" target= "-blank" class="btn btn-secondary">Know More!</a>
     `;
    root.append(li);
  });
}

function handleSearch(event) {
  searchText = event.target.value;
  let filteredPeople = allPeople.filter((p) => {
    return p.name.toLowerCase().includes(searchText.toLowerCase());
  });
  createCard(filteredPeople);
}

search.addEventListener("keyup", handleSearch);

createHouseList(allHouses);
createCard(allPeople);
