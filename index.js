// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress : "123 John St."
}

function updateEmployeeWithKeyAndValue(employee, address, value){
    let newEmp = {...employee};
    newEmp[address] = value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, address, value){
    employee[address]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee, address) {
    let newEmp = {...employee};
    delete newEmp[address];
    return newEmp;

}

function destructivelyDeleteFromEmployeeByKey(employee, address) {
    delete employee[address];
    return employee;
}

