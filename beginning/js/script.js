// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let employeeList = docment.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
for (let i = 0; i < headings.length; i++) {

}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let newItem = document.querySelector('#item').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedtable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(newItem));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


    // RESET THE FORM
    document.querySelector('#item').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#item').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE
itemList.addEventListener('submit', (e) => {
    
})