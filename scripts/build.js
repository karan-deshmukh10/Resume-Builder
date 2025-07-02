

// =========================================Add new work experience======================================================
function addNewExp() {
  // Get the work experience container
  let workExperienceContainer = document.getElementById("workExperienceContainer");

  // Create a new work experience div
  let newWorkExperience = document.createElement("div");
  newWorkExperience.classList.add("workExperience");

  // Create input elements
  let roleInput = document.createElement("input");
  roleInput.type = "text";
  roleInput.classList.add("form-control", "roleInput");
  roleInput.placeholder = "Role";

  let companyInput = document.createElement("input");
  companyInput.type = "text";
  companyInput.classList.add("form-control", "companyInput");
  companyInput.placeholder = "Company Name";

  let durationInput = document.createElement("input");
  durationInput.type = "text";
  durationInput.classList.add("form-control", "durationInput");
  durationInput.placeholder = "Duration";

 
  // Create delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", function () {
    workExperienceContainer.removeChild(newWorkExperience);
  });

  // Append the input elements and delete button to the new work experience div
  newWorkExperience.appendChild(roleInput);
  newWorkExperience.appendChild(companyInput);
  newWorkExperience.appendChild(durationInput);
  newWorkExperience.appendChild(deleteButton);
  newWorkExperience.appendChild(document.createElement("div")); // Clear float

  // Append the new work experience div to the container
  workExperienceContainer.appendChild(newWorkExperience);
}

function clearworkExperience(btn) {
  // Get the parent element (.workExperience)
  let workExperience = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = workExperience.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}

// ==========================Education===========================================================
function addNewEdu() {
  // Get the education experience container
  let eduExperienceContainer = document.getElementById("eduExperienceContainer");

  // Create a new education experience div
  let newEducation = document.createElement("div");
  newEducation.classList.add("eduExperience");

  // Create input elements
  let clgInput = document.createElement("input");
  clgInput.type = "text";
  clgInput.classList.add("form-control", "clgInput");
  clgInput.placeholder = "School/College";

  let placeInput = document.createElement("input");
  placeInput.type = "text";
  placeInput.classList.add("form-control", "PlaceInput");
  placeInput.placeholder = "City/State/District";

  let degreeInput = document.createElement("input");
  degreeInput.type = "text";
  degreeInput.classList.add("form-control", "degInput");
  degreeInput.placeholder = "Degree/Course";

  let durationInput = document.createElement("input");
  durationInput.type = "number";
  durationInput.classList.add("form-control", "startYearInput");
  durationInput.placeholder = "Start Year";

  let durationInput2 = document.createElement("input");
  durationInput2.type = "number";
  durationInput2.classList.add("form-control", "endYearInput");
  durationInput2.placeholder = "End Year";

  let percentageInput = document.createElement("input");
  percentageInput.type = "text";
  percentageInput.classList.add("form-control", "percentInput");
  percentageInput.placeholder = "CGPA/Percentage% ex:CGPA:7.2 or Percentage:90%";

  // Create delete button
  let deleteButtons = document.createElement("button");
  deleteButtons.classList.add("deleteButtons");
  deleteButtons.innerHTML = "delete";
  deleteButtons.addEventListener("click", function () {
    eduExperienceContainer.removeChild(newEducation);
  });

  // Append the input elements and delete button to the new education experience div
  newEducation.appendChild(clgInput);
  newEducation.appendChild(placeInput);
  newEducation.appendChild(degreeInput);
  newEducation.appendChild(durationInput);
  newEducation.appendChild(durationInput2);
  newEducation.appendChild(percentageInput);
  newEducation.appendChild(deleteButtons);
  newEducation.appendChild(document.createElement("div")); // Clear float

  // Append the new education experience div to the container
  eduExperienceContainer.appendChild(newEducation);
}

// Clear education delete button
function clearEduExperience(btn) {
  // Get the parent element (.eduExperience)
  let eduExperience = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = eduExperience.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}

// =============================Education section ends here===========================================

// ===========================Add new project details===================================================
function addNewProj() {
  // Get the project details container
  let projectDetailsContainer = document.getElementById("projectDetailsContainer");

  // Create a new project details div
  let newProject = document.createElement("div");
  newProject.classList.add("projDetails");

  // Create input elements
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("form-control", "titleInput");
  titleInput.placeholder = "Project Title";

  let projdescriptionInput = document.createElement("input");
  projdescriptionInput.type = "text";
  projdescriptionInput.classList.add("form-control", "projdescriptionInput");
  projdescriptionInput.placeholder = "Project Description";

  // Create delete button
  let deleteButtonP = document.createElement("button");
  deleteButtonP.classList.add("deleteButtonP");
  deleteButtonP.innerHTML = "delete";
  deleteButtonP.addEventListener("click", function () {
    projectDetailsContainer.removeChild(newProject);
  });

  // Append the input elements and delete button to the new project details div
  newProject.appendChild(titleInput);
  newProject.appendChild(projdescriptionInput);
  newProject.appendChild(deleteButtonP);
  newProject.appendChild(document.createElement("div")); // Clear float

  // Append the new project details div to the container
  projectDetailsContainer.appendChild(newProject);
}

// Clear project details delete button
function clearProjDetails(btn) {
  // Get the parent element (.projDetails)
  let projDetails = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = projDetails.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}

// =============================Project details section ends here===========================================
//add Activity
// =========================Activity Details===========================================
function addNewActi() {
  let ActivitiesDetailContainer = document.getElementById("ActivitiesDetailContainer");

  let newActivity = document.createElement("div");
  newActivity.classList.add("ActivityDetails");

  let ActiTitleInput = document.createElement("input");
  ActiTitleInput.type = "text";
  ActiTitleInput.classList.add("form-control", "ActiTitleInput");
  ActiTitleInput.placeholder = "Activity Title";

  let durInput = document.createElement("input");
  durInput.type = "text";
  durInput.classList.add("form-control", "durInput");
  durInput.placeholder = "Activity Duration ex: 2020-2021 or 1 jan 2020 - 31 dec 2021";

  let ActivitydescriptionInput = document.createElement("textarea");
  ActivitydescriptionInput.classList.add("form-control", "ActivitydescriptionInput");
  ActivitydescriptionInput.placeholder = "Description Of The Activity";

  let deleteButtonAct = document.createElement("button");
  deleteButtonAct.classList.add("deleteButtonAct");
  deleteButtonAct.innerHTML = "delete";
  deleteButtonAct.addEventListener("click", function () {
      ActivitiesDetailContainer.removeChild(newActivity);
  });

  newActivity.appendChild(ActiTitleInput);
  newActivity.appendChild(durInput);
  newActivity.appendChild(ActivitydescriptionInput);
  newActivity.appendChild(deleteButtonAct);
  newActivity.appendChild(document.createElement("div"));

  ActivitiesDetailContainer.appendChild(newActivity);
}

function clearActiDetails(element) {
  element.parentElement.remove();
}
// add activity ends
// ========================Add New Certification
function addNewCerti() {
  // Get the project details container
  let CertiContainer = document.getElementById("CertiContainer");

  // Create a new project details div
  let newCerti = document.createElement("div");
  newCerti.classList.add("CertiDetails");

  // Create input elements
  let CertiInput = document.createElement("input");
  CertiInput.type = "text";
  CertiInput.classList.add("form-control", "CertiInput");
  CertiInput.placeholder = "Introduction to Web Devlopment(Coursera)";

  let certidescriptionInput = document.createElement("input");
  certidescriptionInput.type = "text";
  certidescriptionInput.classList.add("form-control", "certidescriptionInput");
  certidescriptionInput.placeholder = "Certificate/Training Description";
  // Create delete button
  let deleteButtonC = document.createElement("button");
  deleteButtonC.classList.add("deleteButtonC");
  deleteButtonC.innerHTML = "delete";
  deleteButtonC.addEventListener("click", function () {
    CertiContainer.removeChild(newCerti);
  });

  // Append the input elements and delete button to the new project details div
  newCerti.appendChild(CertiInput);
  newCerti.appendChild(certidescriptionInput);
  newCerti.appendChild(deleteButtonC);
  newCerti.appendChild(document.createElement("div")); // Clear float

  // Append the new project details div to the container
  CertiContainer.appendChild(newCerti);
}

// Clear project details delete button
function clearCertiDetails(btn) {
  // Get the parent element (.projDetails)
  let CertiDetails = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = CertiDetails.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}

// ========================certification adding ends here
// ===============================================================================
function adjustStylesForSinglePage(container) {
  // Example adjustments to fit content on a single page
  container.style.fontSize = '11px'; // Reduce font size
  container.style.padding = '1px'; // Reduce padding
  container.style.margin = '1px'; // Reduce margin

  // Additional style adjustments as needed
  // For example, reducing line heights, adjusting specific element sizes, etc.
  container.querySelectorAll('*').forEach(el => {
      el.style.margin = '1px';
      el.style.padding = '1px';
      el.style.lineHeight = '1.0';
      // el.style.overflow = 'hidden';
      // el.style.whiteSpace = 'normal';
  });
  // Adjust Specific Elements like headers or section
  container.querySelectorAll('h2,h3,h4').forEach(header => {
    header.style.fontSize = '14px';
    header.style.marginBottom = '1px';
  });

   // Reduce gap between li elements
   container.querySelectorAll('ul').forEach(ul => {
    ul.style.margin = '0';
    ul.style.padding = '0';
});
container.querySelectorAll('ul li').forEach(li => {
    li.style.margin = '0';
    li.style.padding = '0';
});
}

// ========================= Function to the generateResumeButton ===========================
function generateResumeButton() {
  // Personal Information
  let name = document.getElementById("namefield").value;
  let address = document.getElementById("addfield").value;
  let contact = document.getElementById("contactfield").value;
  let email = document.getElementById("emailfield").value;
  let github = document.getElementById("githubfield").value;
  let linkedin = document.getElementById("linkedinfield").value;
  let objective = document.getElementById("objective").value;
  
  if (name) document.getElementById("nameT").textContent = name;
  if (address) document.getElementById("addT").textContent = address;
  if (contact) document.getElementById("numberT").innerHTML =  contact;
  if (email) document.getElementById("EmailT").innerHTML =  email;

  // Update social links
  // let socialLinksContainer = document.querySelector(".social-links");
  // if (github || linkedin || website) {
  //   if (github) document.getElementById("githubT").href = github;
  //   if (linkedin) document.getElementById("linkedinT").href = linkedin;
  //   if (website) document.getElementById("portfolioT").href = website;
  //   socialLinksContainer.style.display = "flex";
  //   socialLinksContainer.style.whiteSpace = "nowrap";
  // } else {
  //   socialLinksContainer.style.display = "none";
  // }
// Update social links
let socialLinksContainer = document.querySelector(".social-links");
if (github || linkedin ) {
  if (github) {
    let githubLink = document.getElementById("githubT");
    githubLink.href = github;
    githubLink.innerHTML = github;
  }
  if (linkedin) {
    let linkedinLink = document.getElementById("linkedinT");
    linkedinLink.href = linkedin;
    linkedinLink.innerHTML = linkedin;
  }
  socialLinksContainer.style.display = "flex";
  socialLinksContainer.style.whiteSpace = "nowrap";
} else {
  socialLinksContainer.style.display = "none";
}

  

  

  // Update objective
  let objectiveContainer = document.querySelector(".objectives");
  if (objective) {
    document.querySelector(".objectives ul").innerHTML = `<li>${objective}</li>`;
    objectiveContainer.style.display = "block";
  } else {
    objectiveContainer.style.display = "none";
  }




  // Technical Skills
  let languages = document.getElementById("language").value;
  let tools = document.getElementById("tool").value;
  let softwares = document.getElementById("softwares").value;
  if (languages) document.getElementById("langT").innerHTML = "<strong>Programming Languages:</strong> " + languages;
  if (tools) document.getElementById("toolsT").innerHTML = "<strong>Development Tools:</strong> " + tools;
  if (softwares) document.getElementById("softwareT").innerHTML = "<strong>Softwares:</strong> " + softwares;

  // Education Details
  let eduContainer = document.querySelector(".education");
  eduContainer.innerHTML = '<h2>Education</h2>';
  let eduEntries = document.querySelectorAll("#eduExperienceContainer .eduExperience");
  let hasEducation = false;

  eduEntries.forEach(entry => {
    let school = entry.querySelector(".clgInput").value;
    let location = entry.querySelector(".PlaceInput").value;
    let degree = entry.querySelector(".degInput").value;
    let startYear = entry.querySelector(".startYearInput").value;
    let endYear = entry.querySelector(".endYearInput").value;
    let percentage = entry.querySelector(".percentInput").value;

    if (school || location || degree || startYear || endYear || percentage) {
      hasEducation = true;
      let newEduEntry = document.createElement("div");
      newEduEntry.className = "edu-experience";
      newEduEntry.innerHTML = `
        <p id="Loc">${location}</p>
        <ul><li><h3>${school}</h3></li></ul>
        <p class="Dur" style="float:right;">${startYear} - ${endYear}</p>
        <p>${degree}</p>
        <p id="perctc">${percentage}</p>
      `;
      eduContainer.appendChild(newEduEntry);
    }
  });

  if (!hasEducation) {
    eduContainer.style.display = "none";
  } else {
    eduContainer.style.display = "block";
  }

  // Work Experience
  let expContainer = document.querySelector(".work-experience");
  expContainer.innerHTML = '<h2>Work Experience</h2>';
  let expEntries = document.querySelectorAll("#workExperienceContainer .workExperience");
  let hasExperience = false;

  expEntries.forEach(entry => {
    let role = entry.querySelector(".roleInput").value;
    let company = entry.querySelector(".companyInput").value;
    let duration = entry.querySelector(".durationInput").value;

    if (role || company || duration) {
      hasExperience = true;
      let newExpEntry = document.createElement("div");
      newExpEntry.className = "experience";
      newExpEntry.innerHTML = `
        <p id="weT">${duration}</p>
        <ul><li><h3>${company}</h3></li></ul>
        <p>${role}</p>
        
      `;
      expContainer.appendChild(newExpEntry);
    }
  });

  if (!hasExperience) {
    expContainer.style.display = "none";
  } else {
    expContainer.style.display = "block";
  }

  // Project Details
  let projContainer = document.querySelector(".projects");
  projContainer.innerHTML = '<h2>Projects</h2>';
  let projEntries = document.querySelectorAll("#projectDetailsContainer .projDetails");
  let hasProjects = false;

  projEntries.forEach(entry => {
    let title = entry.querySelector(".titleInput").value;
    let description = entry.querySelector(".projdescriptionInput").value;

    if (title || description) {
      hasProjects = true;
      let newProjEntry = document.createElement("div");
      newProjEntry.className = "project";
      newProjEntry.innerHTML = `
        <ul><li><h3>${title}</h3></li></ul>
        <p>- ${description}</p>
      `;
      projContainer.appendChild(newProjEntry);
    }
  });

  if (!hasProjects) {
    projContainer.style.display = "none";
  } else {
    projContainer.style.display = "block";
  }

  // Activity
// Activity Details
let actContainer = document.querySelector(".section.activities");
actContainer.innerHTML = '<h2>ACTIVITIES</h2>';
let actEntries = document.querySelectorAll("#ActivitiesDetailContainer .ActivityDetails");
let hasActivities = false;

actEntries.forEach(entry => {
    let title = entry.querySelector(".ActiTitleInput").value;
    let duration = entry.querySelector(".durInput").value;
    let description = entry.querySelector(".ActivitydescriptionInput").value;

    if (title || duration || description) {
        hasActivities = true;
        let newActEntry = document.createElement("div");
        newActEntry.className = "entry";
        newActEntry.innerHTML = `
            <ul><li><h3>${title}</h3></li></ul>
            <p style="float:right;">${duration}</p>
            <p>- ${description}</p>
        `;
        actContainer.appendChild(newActEntry);
    }
});

if (!hasActivities) {
    actContainer.style.display = "none";
} else{
  actContainer.style.display = "block";
}

  // certifications
let CertiContainer = document.querySelector(".certify");

// Clear any existing certification entries before adding new ones
CertiContainer.innerHTML = '<h2>Certifications & Training</h2>';

let CertiEntries = document.querySelectorAll("#CertiContainer .CertiDetails");
let hasCerti = false;

CertiEntries.forEach(entry => {
  let title = entry.querySelector(".CertiInput").value;
  let descriptionc = entry.querySelector(".certidescriptionInput").value

  if (title || descriptionc) {
    hasCerti = true;
    let newCertiEntry = document.createElement("div");
    newCertiEntry.className = "certiT";
    newCertiEntry.innerHTML = `
       <ul><li><h3>${title}</h3></li></ul>
       <p>- ${descriptionc}</p>
    `;
    CertiContainer.appendChild(newCertiEntry);
  }
});

if (!hasCerti) {
  CertiContainer.style.display = "none";
} else {
  CertiContainer.style.display = "block";
}


  // Hide the form and show the resume template
  document.getElementById("cv-form").style.display = "none";
  document.querySelector(".resume").style.display = "block";

  // Adjust styles to fit all content on a single page before downloading
  let resumeContainer = document.querySelector('.resume');
  adjustStylesForSinglePage(resumeContainer);

}
// Add an event listener to the checkbox to handle its state change
document.getElementById("removeFooterCheckbox").addEventListener("change", function() {
  if (this.checked) {
    document.querySelector("footer").style.display = "none";
  } else {
    document.querySelector("footer").style.display = "block";
  }
});
// Function to download the resume
document.getElementById('downloadButton').addEventListener('click', () => {
  let resume = document.querySelector(".resume");
  let removeFooter = document.getElementById('removeFooterCheckbox').checked;

 

  let opt = {
      margin: [0.2, 0.2, 0.2, 0.2],
      filename: 'Resume.pdf',
      // image: { type: 'jpeg', quality:1 },
      html2canvas: { scale: 3 },
      jsPDF: {
          unit: 'in',
          format: [8.5, 11], // Set the page size to be standard letter size
          orientation: 'portrait'
      },
      // pagebreak: { mode: ['avoid-all'] } // This option tries to avoid all page breaks
      pagebreak: {
        mode: ['avoid-all'], // Avoid splitting content between pages
        // before: '.section', // Ensure sections start on a new page
        avoid: '.avoid', // Add class 'avoid' to elements you want to avoid page breaks within
    },
  };



  
 adjustStylesForSinglePage(resume);

  html2pdf().from(resume).set(opt).save().then(() => {
      // Show footer again after saving
      if (removeFooter) {
          document.querySelector("footer").style.display = "block";
      }
  });
});


// // Event listener for the download button
// document.getElementById('downloadButton').addEventListener('click', generateResumePDF);

document.getElementById("generateButton").addEventListener("click", generateResumeButton);

// Event listener for save progress button
document.getElementById("saveProgressButton").addEventListener("click", saveFormData);

// Event listener for delete progress button
document.getElementById("deleteProgressButton").addEventListener("click", deleteFormData);
