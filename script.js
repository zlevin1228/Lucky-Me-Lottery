const nameArray = []; // Create a list to store names

document.getElementById("nameInput") //allows the enter key to submit names
    .addEventListener("keyup", function(event) {
    event.preventDefault(); //event from before is cancelled
    if (event.keyCode === 13) { //key code is the enter key
        document.getElementById("addNameBtn").click(); //clicks the button
    }
});

function addName() {
  const nameInput = document.getElementById("nameInput"); // Get a trimmed version of the name from the input box
  const name = nameInput.value.trim();
  nameArray.push(name);
  displayNames();
  nameInput.value = '';
}

function displayNames() {
  const nameList = document.getElementById('nameList') // get UL Element
  nameList.innerHTML = '' // clears the list

  for (let i = 0; i < nameArray.length; i++){
    const name =  nameArray[i]
    const li = document.createElement('li')
    li.className = 'list-group-item'
    const span = document.createElement('span')
    span.textContent = name
    li.appendChild(span)
    nameList.appendChild(li)
  }
}

function pickRandomName () {
  const randomNameDiv = document.getElementById('randomName')
  randomNameDiv.textContent = ''


  const randomNumber = Math.floor(Math.random() * nameArray.length)
  const randomName = nameArray[randomNumber]

  randomNameDiv.textContent = randomName

  nameArray.splice(randomNumber, 1)

  displayNames()

  if (nameArray.length === 0) {
    alert("There is only one name left! I cannot randomize anything!") //alerts you if the next choice is not random
  }
}

document.getElementById("addNameBtn").addEventListener("click", addName);

document.getElementById("pickRandomBtn").addEventListener("click", pickRandomName);
