const Employee = require("../lib/Employee");

//test employee profile argument
test("create inital employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

//test employee name argument
test("create name via const argument", () => {
    const name = "Eddie";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

//test email arugment 
test("Set email via constructor argument", () => {
    const email = "email@email.com";
    const employee = new Employee("Eddie", 1, email);
    expect(employee.email).toBe(email);
});

//test the return of constructor values for employee name
test("Return name via getName", () => {
    const name = "Eddie";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

//test the return of constructor values for employee id
test("Return empId via getId", () => {
    const empId = 100;
    const employee = new Employee("Eddie", empId);
    expect(employee.getId()).toBe(empId);
});

//test the return of constructor values for email
test("Return email via getEmail", () => {
    const email = "email@email.com";
    const employee = new Employee("Eddie", 1, email);
    expect(employee.getEmail()).toBe(email);
});

//test the return of constructor values for employee role
test("Test getRole", () => {
    const role = "Employee";
    const employee = new Employee("Eddie", 1, "email@email.com");
    expect(employee.getRole()).toBe(role);
});

//End of Employee test