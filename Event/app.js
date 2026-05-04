// document.getElementById("images").addEventListener("click", () => {
//     console.log("Image clicked!");
// }, false);

// document.getElementById("japan").addEventListener("click", (e) => {
//     console.log("Japan clicked!");
//     e.stopPropagation(); // This will prevent the event from bubbling up to the parent elements
// }, false);

// document.getElementById("car").addEventListener("click", (e) => {
//     console.log("Car clicked!");
//     e.preventDefault(); // This will prevent the default action associated with the event
// }, false);

// ===========================================

document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target.parentNode); // Logs the parent element of the clicked target

  if (e.target.tagName === "IMG") {
    // Check if the clicked element is an image
    let removeIt = e.target.parentNode; // Store the parent element of the clicked target in a variable
    removeIt.remove(); // Remove the parent element from the DOM
  }

  //    removeIt.parentNode.removeChild(removeIt); // Remove the parent element from the DOM using its parent node
});
