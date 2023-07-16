const showInput = document.querySelector("#showInput");
const writeInput = document.querySelector("#writeInput");
const myBtn = document.querySelector("#myBtn");
const addNotes = document.querySelector(".onmybutton");
const menuClass = document.querySelector('.menuclass')
const addButton = document.querySelector("#addButton");
const backButton = document.querySelector("#backButton");
const closeButton = document.querySelector("#closeButton");
const showList = document.querySelector(".container");
const showText = document.querySelector("#showText");
const showDay = document.querySelector("#showDay");
const clickOne = document.querySelector("#clickOne");
const clickTwo = document.querySelector("#clickTwo");
const pleaseWrite = document.querySelector(".pleaseWrite");
const pleaseWritebtn = document.querySelector("#pleaseWritebtn");
const openButton = document.querySelector("#openButton");
const openMenu  =  document.querySelector(".greeting");
const footerApp = document.querySelector(".footerApp");
const acceptName = document.querySelector("#acceptName");
const userField = document.querySelector("#nameField");
const imageTwo = document.querySelector("#image2");
const aboutMe = document.querySelector(".aboutMe");
const getName = document.querySelector("#getName");
const aboutUsbtn = document.querySelector("#aboutusbtn");
const aboutUs = document.querySelector(".aboutUs")
const homeButton = document.querySelector("#homeButton");
const getNameTwo = document.querySelector("#getName2");
const homeButtonone = document.querySelector("#homeButton1");
const recentlyDeleted = document.querySelector("#image4");
const showProfile2 = document.querySelector("#image3");
const showTodos = document.querySelector("#image4");
const footerApp2 = document.querySelector(".footerApp2");
const imageFooter = document.querySelector("#imageFooter");
const recently = document.querySelector(".recently");
const recentButton = document.querySelector("#recentButton");
const recentlyBtn = document.querySelector("#image6");
const imageFive = document.querySelector("#image5");
const getTodos = document.querySelector("#getTodos");



imageTwo.addEventListener("click", () =>{
   aboutMe.classList.add("hidden")
   openMenu.style.display = "none"
   footerApp.style.display ="none"
})

acceptName.addEventListener("click", () =>{
   aboutMe.classList.remove("hidden")
   menuClass.style.display = "block"

})

 userField.addEventListener("input", ()=> {
 getName.textContent = userField.value
 //getNameTwo.textContent = userField.Value

})

homeButton.addEventListener("click", () =>{
   aboutUs.classList.add("showAbout")
   openMenu.style.display = "none"
   footerApp.style.display ="none"
})

homeButtonone.addEventListener("click", () =>{
   aboutUs.classList.add("showAbout")
   openMenu.style.display = "none"
   footerApp.style.display ="none"
   menuClass.style.display = "none"
})

aboutUsbtn.addEventListener("click", ()=>{
   aboutUs.classList.remove("showAbout")
   menuClass.style.display = "block"
   footerApp.style.display ="none"  
})

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.classList.add('todo-delete');

const GetDay = document.createElement("p")
GetDay.textContent = "sunday";

openButton.addEventListener("click", () => {
   footerApp.style.display = "none"
   openMenu.style.display = "none";
   addNotes.classList.add("show")
   addNotes.style.display = "block"

})


addButton.addEventListener("click", ()=>{
   addNotes.classList.add("show");
   menuClass.style.display = "none";

    writeInput.value = ""; // Clear the input field
    //showText.textContent = ""; // Clear the todo list
    addNotes.style.display = "block";

})

backButton.addEventListener("click", ()=>{
   addNotes.style.display = "none"
   menuClass.style.display = "block"

   const li = document.createElement("li");
   li.classList.add('todo-item');
   li.textContent = writeInput.value;
   const deleteBtn = deleteButton.cloneNode(true);
   li.appendChild(deleteBtn);
   showText.appendChild(li);
})


closeButton.addEventListener("click", ()=>{
   //addNotes.classList.remove("show");
   addNotes.style.display = "none"
   menuClass.style.display = "block"
})


myBtn.addEventListener("click", () => {
   const writeInput = document.querySelector("#writeInput");
//footerApp.style.display = "block"
   
   if(writeInput.value === ""){
      pleaseWrite.classList.add("active");
      addNotes.style.display = "block" 
      menuClass.style.display = "none"
   
} else {
   pleaseWrite.classList.remove("active");
   addNotes.style.display = "none";
   menuClass.style.display = "block";

}
const li = document.createElement("li");
   li.classList.add('todo-item');
   li.textContent = writeInput.value;
   const deleteBtn = deleteButton.cloneNode(true);
   
   li.appendChild(deleteBtn);
   showText.appendChild(li);
}) 

showText.addEventListener("click", (event) => {
   if (event.target.classList.contains('todo-delete')) {
     const li = event.target.closest('li'); // Get the closest li element
     li.remove();
   }
 });
 


 pleaseWritebtn.addEventListener("click", ()=>{
   pleaseWrite.classList.remove("active");
})

const menuCaller = document.querySelector("#menuCaller");
const navigateMenu = document.querySelector(".navigateMenu");
const cancelButton = document.querySelector("#cancelButton");
const showProfile = document.querySelector("#sameBtn");
const showAboutUS = document.querySelector("#sameBtn1");
const deleteAll = document.querySelector("#sameBtn2");

menuCaller.addEventListener("click", () =>{
   navigateMenu.style.display = "block"

})

cancelButton.addEventListener("click", ()=>{
   navigateMenu.style.display = "none"
})

showProfile.addEventListener("click", ()=>{
   aboutMe.classList.add("hidden")
   menuClass.style.display = "none"
   navigateMenu.style.display = "none"
})

showAboutUS.addEventListener("click", ()=>{
   aboutUs.classList.add("showAbout")
   menuClass.style.display = "none"
   navigateMenu.style.display = "none"
})

deleteAll.addEventListener("click", () => {
   const todoItems = document.querySelectorAll(".todo-item");
   todoItems.forEach((item) => {
      item.remove();
   });
});

showProfile2.addEventListener("click", ()=>{
   aboutMe.classList.add("hidden")
   menuClass.style.display = "none"
   navigateMenu.style.display = "none"
   
})
showTodos.addEventListener("click", () => {
   menuClass.style.display = "block"
})

imageFooter.addEventListener("click", () => {
   menuClass.style.display = "block"
   openMenu.style.display = "none"
   footerApp.style.display = "none"
})
recentlyBtn.addEventListener("click", () => {
   recently.classList.add("forRecently")
   openMenu.style.display = "none"
   footerApp.style.display = "none"
   menuClass.style.display = "none" 
});

recentButton.addEventListener("click", () => {
   recently.classList.remove("forRecently")
   menuClass.style.display = "block"
    footerApp.style.display ="none"  
});

imageFive.addEventListener("click", ()=>{
   recently.classList.add("forRecently")
   openMenu.style.display = "none"
   footerApp.style.display ="none"
   menuClass.style.display = "none"
})



const recentlyGetTodos = document.querySelector(".recently #getTodos"); // Select the p element in recently class


showText.addEventListener("click", (event) => {
  if (event.target.classList.contains('todo-delete')) {
    const li = event.target.closest('li'); // Get the closest li element
    li.remove();
    recentlyGetTodos.textContent += li.textContent + ' '; // Append the deleted todo to the text content in the p element
  }
});

const profilePic = document.querySelector("#profile-pic");
const inputFile = document.querySelector("#input-file");
const profilePiccc = document.querySelector("#profile-piccc");

inputFile.onchange = function(){
   profilePic.src = URL.createObjectURL(inputFile.files[0]);
   profilePiccc.src = URL.createObjectURL(inputFile.files[0]); // Set the source of profilePiccc to the uploaded image

}



