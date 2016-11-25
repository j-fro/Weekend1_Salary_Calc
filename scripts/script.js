var debug = false;

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
    if (debug) {
        console.log("In calculateMonthlyCost");
    }
    // Get an array of table rows
    var rows = $("tr");
    var totalSalary = 0;
    // Iterate through table rows and sum the salaries
    $("tr").each(function() {
        var salary = $(this).data("salary");
        // Exclude undefined (header row)
        if (salary !== undefined) {
            totalSalary += salary;
        }
    });
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
    // Iterate through table rows and add names as select options to the select box
    $("tr").each(function() {
        var employeeName = $(this).data("name");
        // Skip undefined (header row)
        if (employeeName !== undefined) {
            $(".employeeNames").append("<option value='" + employeeName + "'>" + employeeName + "</option>");
        }
    });
};

var addEmployee = function() {
    if (debug) {
        console.log("Inside addEmployee");
    }
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
    // Iterate through table rows and remove those with a matching name
    $("tr").each(function() {
        if ($(this).data("name") === employeeName) {
            var currentCost = $("#totalCost").html();
            // Remove the $ sign from the html string
            currentCost = currentCost.substring(1, currentCost.length);
            // Subtract the removed salary (divided by 12 for monthly) and round to nearest penny
            var totalCost = Math.round((currentCost - $(this).data("salary") / 12) * 100) / 100;
            $("#totalCost").html("$" + totalCost);
            $(this).remove();
        }
    });
    // Reset the select
    addSelectOptions();
};

$(document).ready(function() {
    if (debug) {
        displayEmployee(["Dev", "Jana", "1", "Instructor", "75000"]);
        displayEmployee(["Millie", "Walsh", "2", "Instructor", "84000"]);
        displayEmployee(["Jimmy", "Ericson", 3, "Student", "23000"]);
        var cost = calculateMonthlyCost();
        displayMonthlyCost(cost);
        addSelectOptions();
    }
});
