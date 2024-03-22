const nameArray = []; // Create a list to store names

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

document.getElementById("addNameBtn").addEventListener("click", addName);
