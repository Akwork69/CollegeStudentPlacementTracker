let jobRolesbox = document.getElementById("jobRoles");

let allJobRoles;

let callJobRolesFromAPI = async () => {
  allJobRoles = await getJobRoles();
  displayJobRoles(allJobRoles);
  //   console.log(jobRoles);
};
callJobRolesFromAPI();

let displayJobRoles = async (jobRoles) => {
  jobRolesbox.innerHTML = jobRoles
    .map(
      (ele) => `
    <div id = "jobRole_card">
    <h4>Name: ${ele.role_id}</h4>
    <h4>College ID: ${ele.title}</h4>
    <button>Edit</button>
    <button>Delete</button>
    </div>
`
    )
    .join("");
};
