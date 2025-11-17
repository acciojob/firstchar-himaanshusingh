function firstChar(text) {
  // your code here
  if (text.charCodeAt(0) === " " || text.charCodeAt(0) === "") return "";
  else return String.from(text.charCodeAt(0));
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));
