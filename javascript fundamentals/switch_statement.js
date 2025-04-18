let employee = {
  firstname: "divyansh",
  lastname: "sinha",
  age: 20,
  date: "09-01-2004",
  year: 17,
  isactive: true,
  department: "engineering",
  branch: "aiml",
};

switch (employee.branch) {
  case "csbs": {
    console.log("building 1");
    break;
  }
  case "aiml": {
    console.log("building 2");
    break;
  }
  case "cloud": {
    console.log("building 3");
    break;
  }
  case "cyber": {
    console.log("building 4");
    break;
  }
  case "core": {
    console.log("building 5");
    break;
  }
  default: {
    console.log("chill man");
  }
}
