// // index.js
// let ramenCopied = {array[],};


fetch("http://localhost:3000/ramens")
  .then(response=>response.json())
  .then(resConverted => {
    resConverted.forEach((ramen)=>{
      const icons = document.createElement("img");
      icons.src = ramen.image;
      icons.class = "menu-image";
      document.querySelector("#ramen-menu").append(icons)
    })
  });


  





    

  



// document.querySelector(`#ramen-menu`).addEventListener("click", (event)=>{});
  

// Callbacks
const handleClick = (ramen) => {
  let selected = ramen.image
  //console.log(array);
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
