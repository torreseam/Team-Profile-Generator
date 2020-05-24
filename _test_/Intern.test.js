const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

//These tests seem redundant
test("Can set school via constructor", () => {
    const school = "Purdue";
    const int = new Intern("ooo", 1, "test@test.com", school);
    expect(int.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const int = new Intern("ooo", 1, "test@test.com", "Purdue");
    expect(int.getRole()).toBe(role);
});

// test("Can get school via getSchool()", () => {
//     const testValue = "UCLA";
//     const e = new Intern("Foo", 1, "test@test.com", testValue);
//     expect(e.getSchool()).toBe(testValue);
// });