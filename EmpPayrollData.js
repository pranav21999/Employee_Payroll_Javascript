class EmployeePayrollData {
  id;
  name;
  salary;
  gender;
  startDate;

  constructor(id, name, salary,gender,startData) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.gender = gender;
    this.startDate = salary;
  }

  get name() { return this._name; }
  set name(name) { this._name = name; }

  toString() {
    return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary+"gender="+this.gender+"startDate="+this.startDate;
  }
}
const employeePayrolldata = new EmployeePayrollData(1, "pranav", 90000,"male","2020-05-06");
console.log("Payroll Data: " + employeePayrolldata.toString());
employeePayrolldata.name = "pranav1";
console.log("After Replacement: " + employeePayrolldata.toString());

