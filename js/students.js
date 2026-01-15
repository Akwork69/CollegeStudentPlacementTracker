let studentsbox = document.getElementById("students");

let allStudents;

let callStudentsFromAPI = async () => {
  allStudents = await getStudents();
  displayStudents(allStudents);
  //   console.log(students);
};
callStudentsFromAPI();

let displayStudents = async (students) => {
  studentsbox.innerHTML = students
    .map(
      (ele) => `
    <div id = "student_card">
    <img src= "${ele.personal_info.profile_image}">
    <h4>Name: ${ele.personal_info.full_name}</h4>
    <h4>College ID: ${ele.academic_info.college_id}</h4>
    <h4>Placement Status: ${ele.placement_status}</h4>
    <button onclick = "editStudent('${ele.student_id}')">Edit</button>
    <button onclick = "deleteStudent('${ele.student_id}')">Delete</button>
    </div>
`
    )
    .join("");
};

let editStudent = async (id) => {
  window.location.href = `../html/editStudent.html?id=${id}`;
};

deleteStudent = async (id) => {
  let confirmDelete = confirm("Are you sure?");
  if (!confirmDelete) return;

  await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`, {
    method: "DELETE",
  });

  callStudentsFromAPI();
};

let placedStudents = document.getElementById("placed");

placedStudents.addEventListener("click", () => {
  let filterPlaced = allStudents.filter((ele) => {
    return ele.placement_status === "Placed";
  });
  //   console.log(filterPlaced);

  displayStudents(filterPlaced);
});

let notPlacedStudents = document.getElementById("notPlaced");

notPlacedStudents.addEventListener("click", () => {
  let filterNotPlaced = allStudents.filter((ele) => {
    return ele.placement_status === "Not Placed";
  });
  //   console.log(filterNotPlaced);

  displayStudents(filterNotPlaced);
});

let allStud = document.getElementById("all");

allStud.addEventListener("click", () => {
  displayStudents(allStudents);
});

let newStudent = document.getElementById("addNewStudent");

newStudent.addEventListener("click", () => {
  window.location.href = "../html/addStudent.html";
});
