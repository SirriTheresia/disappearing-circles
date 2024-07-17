
//   document
//   .getElementById("first-heading")
//   .addEventListener("mouseover",(Event) => {
//     Event.target.classList.toggle("green");
//     Event.target.classList.toggle("red");
//   });
//   document
//   .getElementById("first-heading")
//   .addEventListener("mouseleave",(Event) => {
//    Event.target.classList.toggle("green");
//    Event.target.classList.toggle("red");
//   });

 

// Array.from(document.getElementsByClassName("red")).forEach((element) => {
//   element.style.color = "red";
// });
// Array.from(document.getElementsByClassName("blue")).forEach((element) => {
//   element.style.color = "blue";
// });

Array.from(document.getElementsByClassName("circle")).forEach((element)=>{
    console.log("circles selected")
    element.addEventListener("click",(event)=>{
event.target.classList.toggle("hide");
    });
});
