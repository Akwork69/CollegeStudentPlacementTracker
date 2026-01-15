let baseURL = "https://placementstracker-4.onrender.com/api";

let getStudents = async () => {
  return fetch(`${baseURL}/students`).then((res) => {
    return res.json();
  });
};
console.log(getStudents());

let getColleges = async () => {
  return fetch(`${baseURL}/colleges`).then((res) => {
    return res.json();
  });
};
console.log(getColleges());

let getCompanies = async () => {
  return fetch(`${baseURL}/companies`).then((res) => {
    return res.json();
  });
};
console.log(getCompanies());

let getJobRoles = async () => {
  return fetch(`${baseURL}/job-roles`).then((res) => {
    return res.json();
  });
};
console.log(getJobRoles());
