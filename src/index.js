let localRamens = []

//HTML ELEMENT VARIABLES
const ramenMenuElement = document.querySelector(`#ramen-menu`);
const currentImage = document.querySelector(`#current-image`);
const currentName = document.querySelector(`#ramen-name`);
const currentRestaurant = document.querySelector(`#restaurant-name`);
const currentRating = document.querySelector(`#rating-display`);
const currentComment = document.querySelector(`#comment-display`);
const newRamenName = document.querySelector(`#new-name`);
const newRestaurant = document.querySelector(`#new-restaurant`);
const newImage = document.querySelector(`#new-image`);
const newRating = document.querySelector(`#new-rating`);
const newComment = document.querySelector(`#new-comment`);
const newRamenForm = document.querySelector(`#new-ramen`);

async function getRamens(){
  localRamens=[];
  ramenMenuElement.innerHTML="";
  try {
    const response = await fetch("http://localhost:3000/ramens");
    const ramens = await response.json();
    ramens.forEach((ramen)=>{localRamens.push(ramen);});displayRamens();
  } catch (error) {
      console.error(error);
  };
}

ramenMenuElement.addEventListener("click",(clickRamenMenu)=>{handleClick(clickRamenMenu);console.log(clickRamenMenu.target.id);});

const handleClick = (ramen) => {
  localRamens.forEach((localRamen)=>{
    if (ramen.target.id === `ramen-${localRamen.id}`){
      currentImage.src = localRamen.image;
      currentName.textContent = localRamen.name;
      currentRestaurant.textContent = localRamen.restaurant;
      currentRating.textContent = localRamen.rating;
      currentComment.textContent = localRamen.comment;
  }});
}
  
const addSubmitListener = () => {
  newRamenForm.addEventListener("submit", (submitNewRamen)=>{
    submitNewRamen.preventDefault();
    submitNewRamen === "submit";
    let newId = localRamens.length+1;
    let newRamenObj ={
      id: newId.toString(), 
      name: newRamenName.value,
      restaurant: newRestaurant.value,
      image: newImage.value,
      rating: parseInt(newRating.value),
      comment: newComment.value};
    newRamenForm.reset()
    postNewRamen(newRamenObj);
  });
}

const displayRamens = () => {
  localRamens.forEach((ramen)=>{

    let iteratedImage = document.createElement(`img`);
    iteratedImage.id = `ramen-${ramen.id}`
    iteratedImage.src = ramen.image;
    document.querySelector(`#ramen-menu`).append(iteratedImage);
  });
}
  
const main = () => {
  getRamens()
  addSubmitListener();
}
main()
  
// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}
  
async function postNewRamen(ramenForPost){
  const settings = {
      method: "POST",
      headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(ramenForPost),
  } 
  try {   
      const response = await fetch("http://localhost:3000/ramens",settings)
      const keywordResponse = await response.json()
      console.log(`Added ramen "${keywordResponse.name}" successfully!`);
      getRamens();
     
  } catch (error) {
      console.error(error)
  }
};

//DOM content loaded event
//document.addEventListener("DOMContentLoaded", (event)=>{})