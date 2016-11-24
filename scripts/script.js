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

var calculateMonthlyCost = function() {
  if (debug) { console.log("In calculateMonthlyCost"); }
  // Get an array of table rows
  var rows = $("tr");
  var totalSalary = 0;
  // Loop through table rows and sum the salaries
  for (var i = 0; i < rows.length; i++) {
    var salary = parseInt($("tr").eq(i).data("salary"));
    // Exclude NaN (the header row)
    if (!isNaN(salary)) {
      totalSalary += salary;
    }
  }
  if (debug) { console.log(totalSalary); }
  // Divide for monthly total
  return totalSalary / 12;
};

var displayMonthlyCost = function(monthlyCost) {
  // Round to the nearest penny
  var roundedMonthlyCost = Math.round(monthlyCost * 100) / 100;
  $("#totalCost").html("$" + roundedMonthlyCost);
};

var clearInputFields = function() {
  $("#firstName").val("");
  $("#lastName").val("");
  $("#idNumber").val("");
  $("#jobTitle").val("");
  $("#salary").val("");
};

var addSelectOptions = function() {
  // Reset the select to empty
  $(".employeeNames").html("");
  // Get the first table row
  var tableRow = $("tr").first();
  console.log("Header Row: " + tableRow);
  // Skip the header row
  var i = 1;
  while(tableRow.length > 0) {
    tableRow = $("tr").eq(i);
    console.log("Table Row: " + i);
    console.log(tableRow);
    var employeeName = tableRow.data("name");
    $(".employeeNames").append("<option value='" + employeeName + "'>" + employeeName + "</option>");
    i++;
  }
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
  displayEmployee([firstName, lastName, id, jobTitle, salary]);
  var monthlyCost = calculateMonthlyCost();
  displayMonthlyCost(monthlyCost);
  clearInputFields();
  addSelectOptions();
};

var removeEmployee = function() {
  var employeeName = $(".employeeNames").val();
  var tableRow = $("tr").first();
  console.log("Header Row: " + tableRow);
  // Skip the header row
  var i = 1;
  // Loop until no rows remain
  while(tableRow.length > 0) {
    tableRow = $("tr").eq(i);
    console.log("Table Row: " + i);
    console.log(tableRow);
    // If table row's name matches, remove it
    if (tableRow.data("name") === employeeName) {
      tableRow.remove();
    }
    i++;
  }
  // Reset the select
  addSelectOptions();
};

$(document).ready( function() {
  if (debug) {
    displayEmployee(["Dev", "Jana", "1", "Instructor", "75000"]);
    displayEmployee(["Millie", "Walsh", "2", "Instructor", "84000"]);
    displayEmployee(["Jimmy", "Ericson", 3, "Student", "23000"]);
    var cost = calculateMonthlyCost();
    displayMonthlyCost(cost);
    addSelectOptions();
  }});
