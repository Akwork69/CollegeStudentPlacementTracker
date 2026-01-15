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

  await fetch("https://placementstracker-4.onrender.com/api/students", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(student),
  });

  alert("Student added Successfully");
});
