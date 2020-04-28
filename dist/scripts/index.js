//erika version: 
/*const addToList = () => {
    let userInput = document.querySelector('#userText').value;
    //console.log(userInput);
    let newLi = document.createElement("li");
    let text = document.createTextNode(userInput);
    newLi.appendChild(text);
    document.querySelector('.result').appendChild(newLi);
    document.querySelector('#userText').value="";
};
*/
//Hadi version:
const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  if (userInput == "") {
    return alert("Write something Please");
  }
  let newLi = document.createElement("li");
  let textNode = document.createTextNode(userInput);
  newLi.appendChild(textNode);//i add only text, and its textNode to make it works
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
  let list = document.querySelectorAll("li:nth-child(odd)");
  list.forEach(({ style: item }) => {
    item.backgroundColor = colorGen();
  });
  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  let listAll = document.querySelectorAll("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });
};

//erika version
function colorGen() {
    let result = "#";
    let HexNum = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      result += HexNum[Math.floor(Math.random() * 16)];
      // console.log(result);
    }
    result += "50";
    return result;
  };

  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  let listAll = document.querySelectorAll("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });
  
  //hadi version
/*const colorGen = () => {
  let result = "#",
    HexString = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexString[Math.floor(Math.random() * 16)];
  }
  result += "50";
  return result;
};


/*
  completeList.forEach((element, index) => { 
     if (index % 2 !== 0) { 
    element.style.backgroundColor = colorGen();
  };
*/

let completeList = document.querySelectorAll(".result");
completeList.forEach(({style: item},i) => {
    if (i % 2 ==1){
        item.backgroundColor = colorGen();
    } else {
        item.backgroundColor = "#FFD091";
    }
    //item.paddingLeft = "1rem";
    //item.paddingRight = "1rem";
});

 //let thingsToDo = document.querySelectorAll(".result");
 
/*result.forEach(({style: item}){
    item.backgroundColor = colorGen();
    item.height = "10rem";
});
*/

unction keyUpFunction(e) {
  this.style.backgroundColor = "pink";
  console.log(e);
  if (e.code == "KeyS") alert("You are cool");
  // if (e.code == "Enter") addToList();
}
function keyDownFunction(e) {
  this.style.backgroundColor = "yellow";
}
function keyPressFunction(e) {
  this.style.backgroundColor = "white";
}
// - Keyboard Events:
// `keydown`, `keyup`

/*
let userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
userInput.addEventListener("keypress", keyPressFunction);
