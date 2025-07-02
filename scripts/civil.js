
// ==========================Education===========================================================
function addNewEdu() {
  let eduExperienceContainer = document.getElementById("eduExperienceContainer");

  let newEducation = document.createElement("div");
  newEducation.classList.add("eduExperience");

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
  degreeInput.placeholder = "Degree/course";

  let durationInput = document.createElement("input");
  durationInput.type = "number";
  durationInput.classList.add("form-control", "startYearInput");
  durationInput.placeholder = "Start Year ex:2021";

  let durationInput2 = document.createElement("input");
  durationInput2.type = "number";
  durationInput2.classList.add("form-control", "endYearInput");
  durationInput2.placeholder = "End Year ex:2025";

  let percentageInput = document.createElement("input");
  percentageInput.type = "text";
  percentageInput.classList.add("form-control", "percentInput");
  percentageInput.placeholder = "CGPA/Percentage% ex:CGPA:7.2 or Percentage:90%";

  let deleteButtons = document.createElement("button");
  deleteButtons.classList.add("deleteButtons");
  deleteButtons.innerHTML = "delete";
  deleteButtons.addEventListener("click", function () {
      eduExperienceContainer.removeChild(newEducation);
  });

  newEducation.appendChild(clgInput);
  newEducation.appendChild(placeInput);
  newEducation.appendChild(degreeInput);
  newEducation.appendChild(durationInput);
  newEducation.appendChild(durationInput2);
  newEducation.appendChild(percentageInput);
  newEducation.appendChild(deleteButtons);
  newEducation.appendChild(document.createElement("div"));

  eduExperienceContainer.appendChild(newEducation);
}

function clearEduExperience(element) {
  element.parentElement.remove();
}

// =============================education section ends here===========================================

// =========================================Add new work experience======================================================
function addNewExp() {
  let workExperienceContainer = document.getElementById("workExperienceContainer");

  let newWorkExperience = document.createElement("div");
  newWorkExperience.classList.add("workExperience");

  let roleInput = document.createElement("input");
  roleInput.type = "text";
  roleInput.classList.add("form-control", "roleInput");
  roleInput.placeholder = "Role";

  let durationInput = document.createElement("input");
  durationInput.type = "text";
  durationInput.classList.add("form-control", "durationInput");
  durationInput.placeholder = "Duration";

  let companyInput = document.createElement("input");
  companyInput.type = "text";
  companyInput.classList.add("form-control", "companyInput");
  companyInput.placeholder = "Company name";



  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", function () {
      workExperienceContainer.removeChild(newWorkExperience);
  });

  newWorkExperience.appendChild(roleInput);
  newWorkExperience.appendChild(companyInput);
  newWorkExperience.appendChild(durationInput);
  newWorkExperience.appendChild(deleteButton);
  newWorkExperience.appendChild(document.createElement("div"));

  workExperienceContainer.appendChild(newWorkExperience);
}

function clearworkExperience(element) {
  element.parentElement.remove();
}

// =============================work experience section ends here===========================================

// ===========================add new project details===================================================
function addNewProj() {
  let projectDetailsContainer = document.getElementById("projectDetailsContainer");

  let newProject = document.createElement("div");
  newProject.classList.add("projDetails");

  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("form-control", "titleInput");
  titleInput.placeholder = "Project Title";

  let projdescriptionInput = document.createElement("textarea");
  projdescriptionInput.classList.add("form-control", "projdescriptionInput");
  projdescriptionInput.placeholder = "Description";

  let deleteButtonP = document.createElement("button");
  deleteButtonP.classList.add("deleteButtonP");
  deleteButtonP.innerHTML = "delete";
  deleteButtonP.addEventListener("click", function () {
      projectDetailsContainer.removeChild(newProject);
  });

  newProject.appendChild(titleInput);
  newProject.appendChild(projdescriptionInput);
  newProject.appendChild(deleteButtonP);
  newProject.appendChild(document.createElement("div"));

  projectDetailsContainer.appendChild(newProject);
}

function clearProjDetails(element) {
  element.parentElement.remove();
}

// =============================project details section ends here===========================================

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
  container.style.fontSize = '12px'; // Reduce font size
  container.style.padding = '5px'; // Reduce padding
  container.style.margin = '5px'; // Reduce margin

  // Additional style adjustments as needed
  // For example, reducing line heights, adjusting specific element sizes, etc.
  container.querySelectorAll('*').forEach(el => {
      el.style.margin = '2px';
      el.style.padding = '2px';
      el.style.lineHeight = '1.1';
      // el.style.overflow = 'hidden';
      // el.style.whiteSpace = 'normal';
  });
  // Adjust Specific Elements like headers or section
  container.querySelectorAll('h2,h3,h4').forEach(header => {
    header.style.fontSize = '14px';
    header.style.marginBottom = '2px';
  });
   // Reduce gap between li elements
   container.querySelectorAll('ul').forEach(ul => {
    ul.style.margin = '0';
    ul.style.padding = '0';
});
container.querySelectorAll('ul li').forEach(li => {
    li.style.margin = '2px 0';
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
  let objective = document.getElementById("objective").value;

  if (name) document.getElementById("nameTC").textContent = name;
  if (address) document.getElementById("addTC").textContent = address;
  if (contact) document.getElementById("numberTC").innerHTML = contact;
  if (email) document.getElementById("EmailTC").innerHTML = email;

 // Update objective
 let objectiveContainer = document.querySelector(".objectives");
 if (objective) {
   document.querySelector(".objectives ul").innerHTML = `<li>${objective}</li>`;
   objectiveContainer.style.display = "block";
 } else {
   objectiveContainer.style.display = "none";
 }

// techincal skills
let TechContainer = document.querySelector(".Tskill");

 // Clear any existing certification entries before adding new ones
 TechContainer.innerHTML = '<h2>TECHNICAL SKILLS</h2>';
 
 let TechEntries = document.querySelectorAll("#TechContainer .TechDetails");
 let hasTech = false;
 
 TechEntries.forEach(entry => {
   let title = entry.querySelector(".TechInput").value;
 
   if (title) {
     hasTech = true;
     let newTechEntry = document.createElement("div");
     newTechEntry.className = "Tsk";
     newTechEntry.innerHTML = `
        
        <p>${title}</p>
     `;
     TechContainer.appendChild(newTechEntry);
   }
 });
 
 if (!hasTech) {
   TechContainer.style.display = "none";
 } else {
   TechContainer.style.display = "block";
 }


  // Education Details
  let eduContainer = document.querySelector(".section.education");
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
              <p class="Loc" style="float:right;font-style:italic;">${location}</p>
              <ul><li><h3>${school}</h3></li></ul>
              <p class="Dur" style="float:right;">${startYear} - ${endYear}</p>
              <p>${degree}</p>
              <p>${percentage}</p>
          `;
          eduContainer.appendChild(newEduEntry);
      }
  });

  if (!hasEducation) {
      eduContainer.style.display = "none";
  } else{
    eduContainer.style.display = "block";
  }

  // Work Experience
  let expContainer = document.querySelector(".section.work-experience");
  expContainer.innerHTML = '<h2>WORK EXPERIENCE</h2>';
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
              <p style="float:right;">${duration}</p>
              <ul><li><h3>${company}</h3></li></ul>
              <p>${role} </p>
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
  let projContainer = document.querySelector(".section.volunteering");
  projContainer.innerHTML = '<h2>PROJECTS</h2>';
  let projEntries = document.querySelectorAll("#projectDetailsContainer .projDetails");
  let hasProjects = false;

  projEntries.forEach(entry => {
      let title = entry.querySelector(".titleInput").value;
      let description = entry.querySelector(".projdescriptionInput").value;

      if (title || description) {
          hasProjects = true;
          let newProjEntry = document.createElement("div");
          newProjEntry.className = "entry";
          newProjEntry.innerHTML = `
              <ul><li><h3>${title}</h3></li></ul>
              <p>- ${description}</p>
          `;
          projContainer.appendChild(newProjEntry);
      }
  });

  if (!hasProjects) {
      projContainer.style.display = "none";
  } else{
    projContainer.style.display = "block";
  }

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
  document.querySelector(".resume-container").style.display = "block";

  // Adjust styles to fit all content on a single page before downloading
  const resumeContainer = document.querySelector('.resume-container');
  adjustStylesForSinglePage(resumeContainer);
}
document.getElementById("removeFooterCheckbox").addEventListener("change", function() {
    if (this.checked) {
      document.querySelector("footer").style.display = "none";
    } else {
      document.querySelector("footer").style.display = "block";
    }
  });

// Function to download the resume
document.getElementById('downloadButton').addEventListener('click', () => {
  const resume = document.querySelector(".resume-container");
  const removeFooter = document.getElementById('removeFooterCheckbox').checked;

 

  const opt = {
      margin: [0.2, 0.2, 0.2, 0.2],
      filename: 'Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
          unit: 'in',
          format: [8.5, 11], // Set the page size to be standard letter size
          orientation: 'portrait'
      },
      pagebreak: { mode: ['avoid-all'] } // This option tries to avoid all page breaks
  };

  adjustStylesForSinglePage(resume);

  html2pdf().from(resume).set(opt).save().then(() => {
      // Show footer again after saving
      if (removeFooter) {
          document.querySelector("footer").style.display = "block";
      }
  });
});
