const form = document.getElementById('form');  //connecting the form element by id
const input = document.getElementById('input');   //connecting the input element by id
const list = document.getElementById('list');      //connecting the list element by id

// -------------to perform some additional processing or validation before submitting the data to the server.----------------------

form.addEventListener('submit', (e) => {        // sets up the event listener to listen for the "submit" event on the "form" element.
    e.preventDefault();                        // prevents the default action of the form submission,
    const item = input.value.trim();          // assigning the trimed input value to the variable item
    if(item !== '') { addItem(item);   input.value = ''; } // check if our item is a string 
});

// ------ loads items from the browser's localStorage object and adds them to web page. ------------

function loadItems() {                                              
    let items = JSON.parse(localStorage.getItem('items')) || [];  //The localStorage.getItem('items') method retrieves a JSON string stored under the key 'items' from the localStorage object, which is an API that allows you to store data in the browser. If there is no data stored under the 'items' key, it returns an empty array.
    items.forEach((item) => addItem(item));   //The forEach() method is then used to iterate over each item in the array and calls another function called addItem() to add the item to the web page.
}
//  the loadItems function won't run until all of the page's content has loaded
// for the window to finish loading before running a function called "loadItems".
window.addEventListener('load',loadItems);

// ------------------------------------
function addItem(item) {
    const li = document.createElement('li'); //create a list element
    const line = document.createElement('hr'); //create a hr element
    li.innerHTML = `
    <span  class="item">${item}</span>
    <button type="button" class="edit btn btn-secondary btn-sm" onclick="edit(this)">Edit</button>
    <button type="button" class="delete btn btn-danger btn-sm">Delete</button>
    `;
    
    list.appendChild(li);
    list.appendChild(line);
    // ---- this code sets up a delete button that removes a list item from the page and updates the stored data when clicked----
     const deleteButton = li.querySelector('.delete');
     deleteButton.addEventListener('click', () => {
        li.remove(); 
        line.remove(); 
        saveItems();
       });
        saveItems();
}
// --------------------------------------------

function edit(e) {
    const updatedTask = prompt("Update task");
    if (updatedTask !== null) {
        const taskElement = e.parentElement.querySelector('.item');
        taskElement.textContent = updatedTask;

        const items = Array.from(list.children).map((li) => li.querySelector('.item').textContent);
        localStorage.setItem('items', JSON.stringify(items));
    }
}

// ---------------------Saving Items---------------------- 


function saveItems() {
    const items = Array.from(list.children).map((li) => li.querySelector('.item').textContent);
    localStorage.setItem('items', JSON.stringify(items));
}


//  will take the current list of items in the HTML document, convert it into an array of text content, convert that array into a JSON string, and save it to localStorage with the key 'items'. This allows the user to close the browser and come back to the page later, and their list of items will still be there because it's stored in localStorage.



