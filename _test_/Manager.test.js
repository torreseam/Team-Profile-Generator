const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumber = "";
    const manager = new Manager("boo", 1, "test@test.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const manager = new Manager("ooo", 1, "test@test.com", role);
    expect(manager.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
    const officeNumber = "123456789";
    const manager = new Manager("boo", 1, "test@test.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});