// Function that matches the search bar input with photo captions
// The function name is the same as the onkeyup name in the index.html file for the search bar
function search_photos() {
  let input = document.getElementById('searchbar').value // The value of the search bar is stored in input
  input = input.toLowerCase(); // And changed to lower case
  let images = document.querySelectorAll('.inner-wrapper a'); // The element to search for
  
  // Looping through the captions ('data-title') in each imageLink[i] array)
  for (let i = 0; i < images.length; i++) {
    let imageLink = images[i]; 
    let caption = imageLink.getAttribute('data-title');
    caption = caption.toLowerCase();
    console.log(caption);
  
    //  Check if variable input is included in the captions and if so, display the image(s)
    if (caption.includes(input)) {
      imageLink[i].style.display = 'block';
    } else {
      imageLink[i].style.display = 'none';
    }
  }
}
