// // index.js

let newObject = {id:"", name:"", restaurant:"", image:"", rating:"", comment:""};
let tempArray = []
document.querySelector("#ramen-menu").addEventListener("click", (event)=>{
    handleClick(event);
})

// Callbacks
const handleClick = (ramen) => {
  tempArray.forEach((item)=>{
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

const displayRamens = () => {let array = [];
  fetch("http://localhost:3000/ramens")
  .then(response=>response.json())
  .then(resConverted => {
    resConverted.forEach((ramen)=>{
      array.push(ramen);
      tempArray.push(ramen)
      const icons = document.createElement("img");
      icons.src = ramen.image;
      icons.id = "img-"+ramen.id;
      document.querySelector(`#ramen-menu`).append(icons);
    }); //addSubmitListener(array)
  })
  .catch(error => console.log(error));
}

const addSubmitListener = () => {
  document.querySelector("#new-ramen").addEventListener("submit", (subEvent)=>{
    subEvent.preventDefault();
    subEvent === "submit";
    newObject.id = String(tempArray.length+1);
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
  .then(response => response.json())
  .then(convertedResponse => {tempArray.push(newObject)});
    updateRamens(newObject)

  });
};


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



const updateRamens = () => {
  fetch("http://localhost:3000/ramens/"+tempArray.length)
  .then(response=>response.json())
  .then(resConverted => {
    
      const icons = document.createElement("img");
      icons.src = resConverted.image;
      icons.id = resConverted.id;
      ;document.querySelector(`#ramen-menu`).append(icons);
    })
  
  .catch(error => console.log(error));}