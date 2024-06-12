// // index.js
let array = [];
let ramenSelected = {};

const first = () => {{fetch("http://localhost:3000/ramens")
  .then(response=>response.json())
  .then(resConverted => {
    resConverted.forEach((ramen)=>{
      array.push(ramen);
      const icons = document.createElement("img");
      icons.alt = ramen.id
      icons.src = ramen.image;
      console.log(icons.alt);
      document.querySelector(`#ramen-menu`).append(icons);
    });
  });
}};
first();

document.querySelector("#ramen-menu").addEventListener("click", (event)=>{
    handleClick(first, event);
});

console.log(first);

// Callbacks
const handleClick = (ramens, event) => {
  ramens.forEach((ramen)=>{
    if (event.target === ramen.image){console.log("SUCCESS!")}

  });  
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
