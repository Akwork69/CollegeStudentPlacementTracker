let collegesbox = document.getElementById("colleges");

let allColleges;

let callCollegesFromAPI = async () => {
  allColleges = await getColleges();
  displayColleges(allColleges);
  //   console.log(colleges);
};
callCollegesFromAPI();

let displayColleges = async (colleges) => {
  collegesbox.innerHTML = colleges
    .map(
      (ele) => `
    <div id = "college_card">
    <h4>Name: ${ele.name}</h4>
    <h4>College ID: ${ele.college_id}</h4>
    <h4>Affiliation: ${ele.affiliated_to}</h4>
    <button>Edit</button>
    <button>Delete</button>
    </div>
`
    )
    .join("");
};
