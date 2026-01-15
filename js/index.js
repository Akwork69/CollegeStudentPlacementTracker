let index = async () => {
  let students = await getStudents();
  let colleges = await getColleges();
  let companies = await getCompanies();
  let jobRoles = await getJobRoles();
  //   console.log(students.length);

  //   console.log(students.length);
  let studentbox = document.getElementById("students");
  let collegesbox = document.getElementById("colleges");
  let companiesbox = document.getElementById("companies");
  let jobRolesbox = document.getElementById("jobRoles");

  //   console.log(studentbox);

  studentbox.innerHTML = `<h2>Total Students <br> ${students.length}</h2>`;
  collegesbox.innerHTML = `<h2>Total Colleges <br>${colleges.length}</h2>`;
  companiesbox.innerHTML = `<h2>Total Companies <br>${companies.length}</h2>`;
  jobRolesbox.innerHTML = `<h2>Total Job Roles <br>${jobRoles.length}</h2>`;
};

index();
