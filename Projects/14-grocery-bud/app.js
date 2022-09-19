// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');

const submitBtn = document.querySelector('.submit-btn');
const groceryCont = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';


// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);

// clear values
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
function addItem(e) {
	e.preventDefault();
	const value = grocery.value;
	const id = new Date().getTime().toString();

	if (value && !editFlag) {
		const element = document.createElement('article');
		// add class
		element.classList.add('grocery-item');

		// add ID
		const attr = document.createAttribute('data-id');
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;

		const deleteBtn = element.querySelector('.delete-btn');
		const editBtn = element.querySelector('.edit-btn');

		deleteBtn.addEventListener('click', deleteItem);
		editBtn.addEventListener('click', editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert('item added to the list', 'success')
    // show container
    groceryCont.classList.add('show-container');

		// add to local storage
		addToLocalStorage(id, value);

		// set back to default
		setBackToDefault();
	} 
  
  else if (value && editFlag) {
		editElement.innerHTML = value;
		displayAlert('value changed', 'success');
		editLocalStorage(editID, value);
		setBackToDefault();
	} 
  
  else {
		displayAlert('please enter value', 'danger');
	}
}


// ****** ALERT **********
// display alert
function displayAlert(text, action) {
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);

	// remove alert
	setTimeout(function () {
		alert.textContent = '';
		alert.classList.remove(`alert-${action}`);
	}, 2000);
}


// ****** EDIT ITEMS **********
function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement;

	// set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling;

	// set form value
	grocery.value = editElement.innerHTML;
	editFlag = true;
	editID = element.dataset.id;
	submitBtn.textContent = 'edit';
}

editLocalStorage(editID, value);


// ****** DELETE ITEMS **********
function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;

	list.removeChild(element);
	if(list.children.length === 0) {
		groceryCont.classList.remove('show-container');	
	}

	displayAlert('item removed', 'danger')
	setBackToDefault();

	// remove from local storage
	// removeFromLocalStorage(id);
}


// ****** CLEAR ITEMS **********
function clearItems() {
	const items = document.querySelectorAll('.grocery-item');
	if(items.length > 0) {
		items.forEach(function(item) {
			list.removeChild(item);
		});
	}

	groceryCont.classList.remove('show-container');
	displayAlert('emptied list', 'success');
	setBackToDefault();
	// localStorage.removeItem('list');
}


// ****** SET BACK TO DEFAULT **********
function setBackToDefault() {
	grocery.value = '';
	editFlag = false;
	editID = '';
	submitBtn.textContent = 'submit';
}


// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
	
}

function removeFromLocalStorage(id) {

}

function editLocalStorage(id, value) {
	
}


// ****** SETUP ITEMS **********
