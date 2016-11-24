var debug = true;


var displayEmployee = function(employeeArray) {
  if (debug) {
    console.log("Inside displayEmployee");
    console.log("Called with: " + employeeArray);
  }
  // Get the table location from the DOM
  var table = $("#employeeTable");
  // Add the new employee to the HTML. Add name and salary as data attributes for later modification
  var htmlString = '<tr data-name="' + employeeArray[0] + ' ' + employeeArray[1] + '" data-salary="' + employeeArray[4] + '">';
  for (var i = 0; i < employeeArray.length; i++) {
    htmlString += "<td>" + employeeArray[i] + "</td>";
  }
  htmlString += "</tr>";
  // Add the employee to the DOM
  table.append(htmlString);
};

var addEmployee = function() {
  if (debug) { console.log("Inside addEmployee"); }
  // Collect user input from the DOM
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var id = $("#idNumber").val();
  var jobTitle = $("#jobTitle").val();
  var salary = $("#salary").val();
  // Create a new employee
  if (debug) {
    console.log(firstName);
    console.log(lastName);
    console.log(id);
    console.log(jobTitle);
    console.log(salary);
  }
  var employee = displayEmployee([firstName, lastName, id, jobTitle, salary]);
};
