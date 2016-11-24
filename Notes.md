#Requirements#

* UI to add employees, including

  * First name (text input)

  * Last name (text input)

  * ID Number (text input)

  * Job Title (text input)

  * Annual salary (text input)

  * Submit button (should clear inputs)

* Table to show employees

* Total _monthly_ cost of employees

#Additional Requests#

* UI to delete employees

  * Drop down of current employees (updated with each addition)

  * Button to delete selected employee

* Employee deletion should remove from table

* Employee deletion should remove from costs

#Processes#

[] Collect user input

[] Create new employee

[] Append employee to DOM

[] Clear input values

#Functions#

addEmployee() -> ()
calls
  createEmployee(firstName, lastName, id, jobTitle, salary) -> Employee
  displayEmployee(employee) -> ()
  calculateMonthlyCost() -> monthlyCost
  displayCost(monthlyCost) -> ()
  clearForm() -> ()