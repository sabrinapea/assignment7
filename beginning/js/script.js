// GET THE ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let employeeList = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let counter = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let newId = document.querySelector('#id').value;
    let newName = document.querySelector('#name').value;
    let newExt = document.querySelector('#extension').value;
    let newEmail = document.querySelector('#email').value;
    let newDepart = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeList.insertRow();
    row.className = 'table-employees';
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    let cellId = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellExt = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDepart = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(newId));
    cellName.appendChild(document.createTextNode(newName));
    cellExt.appendChild(document.createTextNode(newExt));
    cellEmail.appendChild(document.createTextNode(newEmail));
    cellDepart.appendChild(document.createTextNode(newDepart));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);


    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    counter++;
    let numemployee = document.querySelector('#empCount');
    numemployee.value = counter;
});

// DELETE EMPLOYEE
employeeList.addEventListener('click', (e) => {
    // confirm delete
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            employeeList.deleteRow(e.target.parentElement.parentElement.rowIndex);
            //decrement the counter
            counter--;
            let numemployee = document.querySelector('#empCount');
            numemployee.value = counter;
        }
    }

});