let urlId = new URLSearchParams(window.location.search);

let id = urlId.get("id");

// console.log(id);

let loadStudent = async () => {
  let data = await fetch(
    `https://placementstracker-4.onrender.com/api/students/${id}`
  );

  let student = await data.json();
  console.log(student.personal_info.full_name);

  full_name.value = student.personal_info.full_name;
  gender.value = student.personal_info.gender;
  date_of_birth.value = student.personal_info.date_of_birth;
  college_id.value = student.academic_info.college_id;
  department.value = student.academic_info.department;
  degree.value = student.academic_info.degree;
  graduation_year.value = student.academic_info.graduation_year;
  cgpa.value = student.academic_info.cgpa;
  backlogs.value = student.academic_info.backlogs;
  programming.value = student.skills.programming;
  databases.value = student.skills.databases;
  tools.value = student.skills.tools;
  placement_status.value = student.placement_status;
};

loadStudent();

let studentData = document.getElementById("studentData");

studentData.addEventListener("submit", async (e) => {
  e.preventDefault();
  // console.log(full_name.value);

  let student = {
    personal_info: {
      full_name: full_name.value,
      gender: gender.value,
      date_of_birth: date_of_birth.value,
      profile_image: profile_image.value,
    },
    academic_info: {
      college_id: college_id.value,
      department: department.value,
      degree: degree.value,
      graduation_year: graduation_year.value,
      cgpa: cgpa.value,
      backlogs: backlogs.value,
    },
    skills: {
      programming: programming.value.split(","),
      databases: databases.value.split(","),
      tools: tools.value.split(","),
    },
    placement_status: placement_status.value,
  };

  await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(student),
  });

  alert("Student updated Successfully");
  window.location.href = "../html/students.html";
});
