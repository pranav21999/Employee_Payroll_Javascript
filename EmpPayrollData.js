class EmployeePayrollData {
  id;
  name;
  salary;

  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  get name() { return this._name; }
  set name(name) { this._name = name; }

  toString() {
    return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary;
  }
}
const employeePayrolldata = new EmployeePayrollData(1, "pranav", 90000);
console.log("Payroll Data: " + employeePayrolldata.toString());
employeePayrolldata.name = "pranav1";
console.log("After Replacement: " + employeePayrolldata.toString());

const employeePayrolldata1 = new EmployeePayrollData(2, "sanket", 50000);
console.log("Payroll Data: " + employeePayrolldata1.toString());
