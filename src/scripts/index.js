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
  //span.classList.add("far", "fa-window-close", "close");
  span.classList.add("fas","fa-bomb","close");
  let listAll = document.querySelectorAll("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });
};

// i need to connect the HTML to the js, so i created this: how can i connect it to the formula above? 
//let icon = document.getElementById('icon');
//icon.innerHTML = '<i class="far fa-lightbulb"></i>' ;
//let checkB = document.getElementById('check');
//checkB.innerHTML ='<input type="checkbox" checked="checked>';



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
  //span.className = "close";
  //span.classList.add("far", "fa-window-close", "close");
  
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

/*let span = document.createElement("span");
  //let text = document.createTextNode("x");
  span.classList.add("far", "fa-window-close", "close");
  //span.className = ;
  console.log(span.classList);
  //span.appendChild(text);
  let listAll = document.querySelectorAll("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });

  let close = document.querySelectorAll(".close");

  close.forEach((element) => {
    element.onclick = function () {
      // this.parentElement.style.display = "none";
      this.parentElement.remove();
    };
  });
};
*/


function keyUpFunction(e) {
  this.style.backgroundColor = "aqua";
  console.log(e);
  if (e.code == "KeyS") alert("You are cool");
  // if (e.code == "Enter") addToList();
}
function keyDownFunction(e) {
  this.style.backgroundColor = "cyan";
  //getComputedStyle(document.documentElement).getPropertyValue('soft');
}
function keyPressFunction(e) {
  this.style.backgroundColor = "darkcyan"; //i want to add my own colors to create the color palette theme.
}


// - Keyboard Events:
// `keydown`, `keyup`

let userInput = document.querySelector("#userText");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
userInput.addEventListener("keypress", keyPressFunction);

