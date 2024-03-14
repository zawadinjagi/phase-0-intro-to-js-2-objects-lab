let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
}
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  console.log("Original employee object:", employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Employee after non-destructive update:", updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Employee after destructive update:", employee);
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after non-destructive deletion:", employeeWithoutAddress);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee after destructive deletion:", employee);
