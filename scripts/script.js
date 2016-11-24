var debug = true;

var displayEmployee = function(employee) {
  if (debug) { console.log("Inside displayEmployee with: " + employee);}
};

var createEmployee = function(firstName, lastName, id, jobTitle, salary) {
  if (debug) {
    console.log("Inside createEmployee");
    console.log("Called with: " + firstName + " " + lastName + " " + id + " " + jobTitle + " " + salary);
  }
};

var addEmployee = function() {
  if (debug) { console.log("Inside addEmployee"); }
};
