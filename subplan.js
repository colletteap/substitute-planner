// Clickable homepage button

document.getElementById("homepageButton").addEventListener("click", function () {
  window.location.href = "./index.html", "_blank";
});

//Saving to Local Storage

const inputFields = document.querySelectorAll('.inputField');

function saveToLocalStorage() {
  const inputFieldValues = {};

  inputFields.forEach((inputField, index) => {
    inputFieldValues[`field_${index}`] = inputField.value;
  });

  localStorage.setItem('inputFieldData', JSON.stringify(inputFieldValues));
}

function loadFromLocalStorage() {
  const savedData = localStorage.getItem('inputFieldData');

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    inputFields.forEach((inputField, index) => {
      if (parsedData[`field_${index}`]) {
        inputField.value = parsedData[`field_${index}`];
      }
    });
  }
}

loadFromLocalStorage();

inputFields.forEach(inputField => {
  console.log('Adding event listener to inputField');
  inputField.addEventListener('input', saveToLocalStorage);
});


// Clickable PDF

document.getElementById('pdfButton').addEventListener('click', function () {
  window.open("./While_You_Were_Away.pdf", '_blank');
});

// Add Period Button

  const addPeriodButton = document.getElementById('buttonPeriod');
  const classScheduleContainer = document.querySelector('.classScheduleDays');
  const periodDiv = document.getElementById('period');
  let clonedPeriodCount = 0;
 
    const savedNewPeriodData = localStorage.getItem('newPeriodData');
    if (savedNewPeriodData) {
      classScheduleContainer.innerHTML = savedNewPeriodData;
      clonedPeriodCount = classScheduleContainer.querySelectorAll('.period').length;
    }

  addPeriodButton.addEventListener('click', function () {
    if (clonedPeriodCount < 5) {
      const clonedPeriod = periodDiv.cloneNode(true);
      clonedPeriod.className = 'inputField savedPeriodDiv';

      classScheduleContainer.querySelectorAll('.day-container').forEach(dayContainer => {
        dayContainer.appendChild(clonedPeriod.cloneNode(true));
      });
      clonedPeriodCount++;

      localStorage.setItem('newPeriodData', classScheduleContainer.innerHTML);
    } else {
      alert('If you have more than 10 periods in a day, please see your administrator... something went wrong.');
    }
  });

  // Delete Period Button

  const deletePeriodButton = document.getElementById('buttonPeriodDelete');

  deletePeriodButton.addEventListener('click', function () {
    const allDays = document.querySelectorAll('.day-container');
    let maxPeriodsDeleted = false;
  
    allDays.forEach((elementEachDay) => {
      if (elementEachDay.childElementCount < 8) {
        maxPeriodsDeleted = true;
      } else {
        elementEachDay.lastElementChild.remove();
      }
    });
  
    if (maxPeriodsDeleted) {
      alert('Max number of periods deleted!');
    }
  });  

// Hide/Unhide Day 6

const hiddenButton6 = document.getElementById("hiddenButton6");
const classScheduleDay6 = document.getElementById("classScheduleDay6");

// Add a click event listener to the button
hiddenButton6.addEventListener("click", function () {

  classScheduleDay6.style.display = "none";
});

// Adding Unhide Button

const unhideButton6 = document.getElementById("unhideButton6");

hiddenButton6.addEventListener("click", function () {

  unhideButton6.style.display = "flex";
});

unhideButton6.addEventListener("click", function () {

  classScheduleDay6.style.display = "flex";
  unhideButton6.style.display = "none";
})

// Hide/Unhide Day 7

const hiddenButton7 = document.getElementById("hiddenButton7");
const classScheduleDay7 = document.getElementById("classScheduleDay7");

// Add a click event listener to the button
hiddenButton7.addEventListener("click", function () {

  classScheduleDay7.style.display = "none";
});

// Adding Unhide Button

const unhideButton7 = document.getElementById("unhideButton7");

hiddenButton7.addEventListener("click", function () {

  unhideButton7.style.display = "flex";
});

unhideButton7.addEventListener("click", function () {

  classScheduleDay7.style.display = "flex";
  unhideButton7.style.display = "none";
})

// Hide/Unhide Day 8

const hiddenButton8 = document.getElementById("hiddenButton8");
const classScheduleDay8 = document.getElementById("classScheduleDay8");

// Add a click event listener to the button
hiddenButton8.addEventListener("click", function () {

  classScheduleDay8.style.display = "none";
});

// Adding Unhide Button

const unhideButton8 = document.getElementById("unhideButton8");

hiddenButton8.addEventListener("click", function () {

  unhideButton8.style.display = "flex";
});

unhideButton8.addEventListener("click", function () {

  classScheduleDay8.style.display = "flex";
  unhideButton8.style.display = "none";
})

// Hide/Unhide Day 9

const hiddenButton9 = document.getElementById("hiddenButton9");
const classScheduleDay9 = document.getElementById("classScheduleDay9");

// Add a click event listener to the button
hiddenButton9.addEventListener("click", function () {

  classScheduleDay9.style.display = "none";
});

// Adding Unhide Button

const unhideButton9 = document.getElementById("unhideButton9");

hiddenButton9.addEventListener("click", function () {

  unhideButton9.style.display = "flex";
});

unhideButton9.addEventListener("click", function () {

  classScheduleDay9.style.display = "flex";
  unhideButton9.style.display = "none";
})

// Hide/Unhide Day 10

const hiddenButton10 = document.getElementById("hiddenButton10");
const classScheduleDay10 = document.getElementById("classScheduleDay10");

// Add a click event listener to the button
hiddenButton10.addEventListener("click", function () {

  classScheduleDay10.style.display = "none";
});

// Adding Unhide Button

const unhideButton10 = document.getElementById("unhideButton10");

hiddenButton10.addEventListener("click", function () {

  unhideButton10.style.display = "flex";
});

unhideButton10.addEventListener("click", function () {

  classScheduleDay10.style.display = "flex";
  unhideButton10.style.display = "none";
})


//Looping Student Names 

const studentNamesDiv = document.getElementById('studentNames');

for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = 'eachStudentName';
  textarea.placeholder = `Student ${i} Name`;
  const savedNames = localStorage.getItem(`studentNames${i}`);
  if (savedNames) {
    textarea.value = savedNames;
  }

  textarea.addEventListener('input', () => {
    const names = textarea.value;
    localStorage.setItem(`studentNames${i}`, names);
  });
  studentNamesDiv.appendChild(textarea);
}

// Looping Student Notes

const studentNotesDiv = document.getElementById('studentNotes');

for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = 'eachStudentNotes';
  textarea.placeholder = `Student ${i} Notes`;
  const savedNotes = localStorage.getItem(`studentNotes${i}`);
  if (savedNotes) {
    textarea.value = savedNotes;
  }

  textarea.addEventListener('input', () => {
    const notes = textarea.value;
    localStorage.setItem(`studentNotes${i}`, notes);
  });
  studentNotesDiv.appendChild(textarea);
}

// Add Period Plan Button

  const addPeriodPlanBtn = document.getElementById('addPeriodPlanBtn');
  const containerPlan = document.querySelector('.containerPlan');
  const parentPeriodDiv = document.getElementById('periodDiv');
  let clonedPeriodPlanCount = 0;

  const savedPeriodData = localStorage.getItem('periodData');
  if (savedPeriodData) {
    containerPlan.innerHTML = savedPeriodData;
    clonedPeriodPlanCount = containerPlan.querySelectorAll('.periodDiv').length;
  }

  addPeriodPlanBtn.addEventListener('click', function () {
    if (clonedPeriodPlanCount < 5) {
      const clonedPeriod = parentPeriodDiv.cloneNode(true);

      containerPlan.appendChild(clonedPeriod);
      clonedPeriodPlanCount++;

      localStorage.setItem('periodData', containerPlan.innerHTML);
    } else {
      alert('Seriously, if you have more than 10 periods.. your problem is bigger than needing a planner');
    }
  });

  const infoBox = document.getElementById('infoBox');
  const infoBoxCloseButton = document.getElementById('infoBoxCloseButton');

  // Check if the user has visited before
  const visitedBefore = localStorage.getItem('visitedBefore');

  if (!visitedBefore) {
    infoBox.style.display = 'block';

    infoBoxCloseButton.addEventListener('click', function() {
      infoBox.style.display = 'none';
      localStorage.setItem('visitedBefore', true);
    });
  }