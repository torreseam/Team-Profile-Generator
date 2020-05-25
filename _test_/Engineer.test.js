const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("should return engineer", () => {
    const eng = new Engineer();
});

test("Can set GitHub account via constructor", () => {
    const name = " Mike Jones";
    const eng = new Engineer(name, 1, "email@email.com", "Mike");
    expect(eng.name).toBe(name);
});

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const eng = new Engineer(role, 1, "email@email.com", "GitHubUser");
    expect(eng.getRole()).toBe(role);
});

test("Can get GitHub username via getGithub()", () => {
    const gitHub = "GitHubUser";
    const eng = new Engineer(name, 1, "email@email.com", gitHub);
    expect(eng.getGithub()).toBe(gitHub);
});


