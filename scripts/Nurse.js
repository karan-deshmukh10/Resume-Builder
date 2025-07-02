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
  CertiInput.placeholder = "Basic Life Support(BLS)";

  let CertiDescription = document.createElement("input");
  CertiDescription.type ="textarea";
  CertiDescription.classList.add("form-control","certidescriptionInput");
  CertiDescription.placeholder = "Completed Basic Life Support Licenses offered by ______"

  // Create delete button
  let deleteButtonC = document.createElement("button");
  deleteButtonC.classList.add("deleteButtonC");
  deleteButtonC.innerHTML = "delete";
  deleteButtonC.addEventListener("click", function () {
    CertiContainer.removeChild(newCerti);
  });

  // Append the input elements and delete button to the new project details div
  newCerti.appendChild(CertiInput);
  newCerti.appendChild(CertiDescription);
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
 // ========================Add New Skill
 function addNewSkill() {
  // Get the project details container
  let SkillContainer = document.getElementById("SkillContainer");

  // Create a new project details div
  let newSkill = document.createElement("div");
  newSkill.classList.add("SkillDetails");

  // Create input elements
  let SkillInput = document.createElement("input");
  SkillInput.type = "text";
  SkillInput.classList.add("form-control", "SkillInput");
  SkillInput.placeholder = "ex:Post-Operative Care";

  // Create delete button
  let deleteButtonSk = document.createElement("button");
  deleteButtonSk.classList.add("deleteButtonSk");
  deleteButtonSk.innerHTML = "delete";
  deleteButtonSk.addEventListener("click", function () {
    SkillContainer.removeChild(newSkill);
  });

  // Append the input elements and delete button to the new project details div
  newSkill.appendChild(SkillInput);
  newSkill.appendChild(deleteButtonSk);
  newSkill.appendChild(document.createElement("div")); // Clear float

  // Append the new project details div to the container
  SkillContainer.appendChild(newSkill);
}

// Clear project details delete button
function clearSkillDetails(btn) {
  // Get the parent element (.projDetails)
  let SkillDetails = btn.parentElement;

  // Clear the input fields within the .eduExperience element
  let inputs = SkillDetails.querySelectorAll('input, textarea');
  inputs.forEach(function (input) {
    input.value = '';
  });
}

// ========================Skill adding ends here
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
  
  if (name) document.getElementById("nameT").textContent = name;
  if (address) document.getElementById("addT").textContent = address;
  if (contact) document.getElementById("numberT").innerHTML =  contact;
  if (email) document.getElementById("EmailT").innerHTML =  email;



  // Update objective
  let objectiveContainer = document.querySelector(".objectives");
  if (objective) {
    document.querySelector(".objectives ul").innerHTML = `<li>${objective}</li>`;
    objectiveContainer.style.display = "block";
  } else {
    objectiveContainer.style.display = "none";
  }




  

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
        <p id = "courseTc">${degree}</p>
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
  expContainer.innerHTML = '<h2>Professional Experience</h2>';
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

 

  // certifications
let CertiContainer = document.querySelector(".certify");

// Clear any existing certification entries before adding new ones
CertiContainer.innerHTML = '<h2>CERTIFICATIONS</h2>';

let CertiEntries = document.querySelectorAll("#CertiContainer .CertiDetails");
let hasCerti = false;

CertiEntries.forEach(entry => {
  let title = entry.querySelector(".CertiInput").value;
  let descrip = entry.querySelector(".certidescriptionInput").value;

  if (title || descrip) {
    hasCerti = true;
    let newCertiEntry = document.createElement("div");
    newCertiEntry.className = "certiT";
    newCertiEntry.innerHTML = `
      <ul><li><h3>${title}</h3></li></ul>
      <p>- ${descrip}</p>
    `;
    CertiContainer.appendChild(newCertiEntry);
  }
});

if (!hasCerti) {
  CertiContainer.style.display = "none";
} else {
  CertiContainer.style.display = "block";
}

// certifications
let SkillContainer = document.querySelector(".Skillt");

// Clear any existing certification entries before adding new ones
SkillContainer.innerHTML = '<h2>SKILL</h2>';

let SkillEntries = document.querySelectorAll("#SkillContainer .SkillDetails");
let hasSkill = false;

SkillEntries.forEach(entry => {
 let title = entry.querySelector(".SkillInput").value;

 if (title) {
   hasSkill = true;
   let newSkillEntry = document.createElement("div");
   newSkillEntry.className = "SkillsT";
   newSkillEntry.innerHTML = `
     <ul><li>${title}</li></ul>
   `;
   SkillContainer.appendChild(newSkillEntry);
 }
});

if (!hasSkill) {
 SkillContainer.style.display = "none";
} else {
 SkillContainer.style.display = "block";
}

// certifications
let TheraContainer = document.querySelector(".Thera");

// Clear any existing certification entries before adding new ones
TheraContainer.innerHTML = '<h2>INTRESTS</h2>';

let TheraEntries = document.querySelectorAll("#TheraContainer .TheraDetails");
let hasThera = false;

TheraEntries.forEach(entry => {
let title = entry.querySelector(".TheraInput").value;

if (title) {
  hasThera = true;
  let newTheraEntry = document.createElement("div");
  newTheraEntry.className = "Thera";
  newTheraEntry.innerHTML = `
    <p>${title}</p>
  `;
  TheraContainer.appendChild(newTheraEntry);
}
});

if (!hasThera) {
TheraContainer.style.display = "none";
} else {
TheraContainer.style.display = "block";
}

  // Hide the form and show the resume template
  document.getElementById("cv-form").style.display = "none";
  document.querySelector(".resume").style.display = "block";

  // Adjust styles to fit all content on a single page before downloading
  const resumeContainer = document.querySelector('.resume');
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
  const resume = document.querySelector(".resume");
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


document.getElementById("generateButton").addEventListener("click", generateResumeButton);
