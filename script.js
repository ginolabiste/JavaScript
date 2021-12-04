let selectedRow = null;

function onFormSubmit(){
    let formData = readFormData();
    if(validate()){
        if(selectedRow == null){
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}
function readFormData(){
    let formData = {};
    formData['fullName'] = document.getElementById('fullName').value;
    formData['occupation'] = document.getElementById('occupation').value;
    formData['company'] = document.getElementById('company').value;
    formData['code'] = document.getElementById('code').value;
    return formData;
}
function insertNewRecord(data){
    let table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.occupation;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.company;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.code;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
                        <a onClick = "onDelete(this)">Delete</a>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('occupation').value = selectedRow.cells[1].innerHTML;
    document.getElementById('company').value = selectedRow.cells[2].innerHTML;
    document.getElementById('code').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.occupation;
    selectedRow.cells[2].innerHTML = formData.company;
    selectedRow.cells[3].innerHTML = formData.code;
    selectedRow = null;
}
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
function resetForm(){
    document.getElementById('fullName').value = "";
    document.getElementById('occupation').value = "";
    document.getElementById('company').value = "";
    document.getElementById('code').value = "";
}
function validate(){
    isValid = true;
    if(document.getElementById('fullName').value == ""){
        isValid = false; 
        document.getElementById('fullNameValidationError').classList.remove('hide');
    } else {
        isValid = true;
        if(!document.getElementById('fullNameValidationError').classList.contains('hide')){
            document.getElementById('fullNameValidationError').classList.add('hide');
        }
    }
    return isValid;
}