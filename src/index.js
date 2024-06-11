// // index.js
let ramenSelected = {
  id: "",
  name: "",
  restaurant: "",
  rating: "",
  comment: ""
};

fetch("http://localhost:3000/ramens")
  .then(response=>response.json())
  .then(resConverted => {
    resConverted.forEach((ramenImage)=>{
      const icons = document.createElement("img");
      icons.src = ramenImage.image;      
      document.querySelector("#ramen-menu").append(icons)});
    document.querySelector(`#ramen-menu`).addEventListener("click", (event)=>{
      console.log(event.target);
    });
  });
  
  
  // Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  

//displayRamens();
  //document.querySelector("#ramen-menu")
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
