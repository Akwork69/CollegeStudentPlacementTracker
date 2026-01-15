let companiesbox = document.getElementById("companies");

let allCompanies;

let callCompaniesFromAPI = async () => {
  allCompanies = await getCompanies();
  displayCompanies(allCompanies);
  //   console.log(companies);
};
callCompaniesFromAPI();

let displayCompanies = async (companies) => {
  companiesbox.innerHTML = companies
    .map(
      (ele) => `
    <div id = "company_card">
    <h4>Name: ${ele.company_id}</h4>
    <h4>College ID: ${ele.name}</h4>
    <h4>Placement Status: ${ele.industry}</h4>
    <button>Edit</button>
    <button>Delete</button>
    </div>
`
    )
    .join("");
};
