const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialisation:'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialisation:'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialisation:'Java' },
    // ...
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate employees' total salaries
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
}
// Function to display HR employees'
function displayHREmployees() {
        const hrEmployees = employees.filter(employee => employee.department === 'HR');
         const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
         document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to display employees' based on ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
}

// Function to display employees' based on specialisation
function findEmployeeBySpecialisation(employeeSpec) {
    const foundEmployeeSpec = employees.find(employee => employee.specialisation === employeeSpec);
    if (foundEmployeeSpec) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployeeSpec.specialisation}: ${foundEmployeeSpec.name}: ${foundEmployeeSpec.name} - ${foundEmployeeSpec.department} - $${foundEmployee.specialisation}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this Specialisation';
     }
}