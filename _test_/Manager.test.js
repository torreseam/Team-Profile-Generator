const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumber = "123456789";
    const mgmt = new Manager("boo", 1, "test@test.com", officeNumber);
    expect(mgmt.officeNumber).toBe(officeNumber);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const mgmt = new Manager("boo", 1, "test@test.com", role);
    expect(mgmt.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
    const officeNumber = "123456789";
    const mgmt = new Manager("boo", 1, "test@test.com", officeNumber);
    expect(mgmt.getOfficeNumber()).toBe(officeNumber);
});