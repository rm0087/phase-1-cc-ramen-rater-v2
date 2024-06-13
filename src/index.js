// // index.js
let array = [];
let newObject = {id:"", name:"", restaurant:"", image:"", rating:"", comment:""};

document.querySelector("#ramen-menu").addEventListener("click", (event)=>{
    handleClick(event);
})

// Callbacks
const handleClick = (ramen) => {
  array.forEach((item)=>{
    if (ramen.target.id === "img-"+item.id){
    document.querySelector("#test").src = item.image;
    document.querySelector("#ramen-name").textContent = item.name;
    document.querySelector("#restaurant-name").textContent = item.restaurant;
    document.querySelector("#rating-display").textContent = item.rating;
    document.querySelector("#comment-display").textContent = item.comment;
    console.log(`${item.name} - ${item.restaurant} - ${item.rating} - ${item.comment} ${item.image}`);
    };
  });
}

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
  .then(response=>response.json())
  .then(resConverted => {
    resConverted.forEach((ramen)=>{
      array.push(ramen);
      const icons = document.createElement("img");
      icons.src = ramen.image;
      icons.id = "img-"+ramen.id;
      document.querySelector(`#ramen-menu`).append(icons);
    });
  })
  .catch(error => console.log(error));
}

const addSubmitListener = () => {
  document.querySelector("#new-ramen").addEventListener("submit", (subEvent)=>{
    subEvent.preventDefault();
    subEvent === "submit";
    newObject.id = String(array.length+1);
    newObject.name = document.querySelector("#new-name").value;
    newObject.restaurant = document.querySelector("#new-restaurant").value;
    newObject.image = document.querySelector("#new-image").value;
    newObject.rating = parseInt(document.querySelector("#new-rating").value);
    newObject.comment = document.querySelector("#new-comment").value;

  fetch("http://localhost:3000/ramens",{
    method: "POST",
    headers: {"Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newObject),
  })
  .then(response => response.json());
  });
}

const main = () => {
  document.addEventListener("DOMContentLoaded", (event)=>{
    displayRamens();
    addSubmitListener();});
}
main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};