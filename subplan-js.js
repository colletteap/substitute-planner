// local storage for all inputs - use form

// when title of day clicked on, it changes color

// seating chart will have a click listener to duplicate, a click listener to move, a click listener for double click to type inside

// calendar add Days and Periods

//Saving to Local Storage

const inputFields = document.querySelectorAll('.inputField');

function saveToLocalStorage() {
  const inputFields = document.querySelectorAll('.inputField');
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
  inputField.addEventListener('input', saveToLocalStorage);
});


// Alert on Teacher Name Input

function onPageContentLoaded() {
  alert('Input is saved upon entry ---------- Screenshot this is you are mobile to send to your sub ------------------ If on a desktop, print as a PDF to save and send to your sub');
}

document.addEventListener('DOMContentLoaded', onPageContentLoaded);


// Add Period Button

document.addEventListener('DOMContentLoaded', function () {
  const addPeriodButton = document.getElementById('buttonPeriod');
  const classScheduleContainer = document.querySelector('.classScheduleDays');
  const periodDiv = document.getElementById('period');
  let clonedPeriodCount = 0;

  addPeriodButton.addEventListener('click', function () {
    if (clonedPeriodCount < 5) {
      const clonedPeriod = periodDiv.cloneNode(true);
      clonedPeriod.className = 'inputField savedPeriodDiv';

      classScheduleContainer.querySelectorAll('.day-container').forEach(dayContainer => {
        dayContainer.appendChild(clonedPeriod.cloneNode(true));
      });
      clonedPeriodCount++;
    } else {
      alert('If you have more than 10 periods in a day, please see your administrator... something went wrong.');
    }
  });

  // Write code to save clonedPeriod div into local storage once created

  // Delete Period Button

  const deletePeriodButton = document.getElementById('buttonPeriodDelete')
  deletePeriodButton.addEventListener('click', function () {
    const allDays = document.querySelectorAll('.day-container');
    allDays.forEach((elementEachDay) => {
      if (elementEachDay.childElementCount < 7) {
        alert('Max number of periods deleted!');
        return;
      }
      elementEachDay.lastElementChild.remove();
    })
  })
});







// Hiding Days - hiding day 6

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

// Looping


for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = 'eachStudentName';
  textarea.placeholder = `Student ${i} Name`;
  textarea.className = 'inputField';
  studentNamesDiv.appendChild(textarea);
}

// Looping Student Notes
const studentNotesDiv = document.getElementById('studentNotes');

// Looping

for (let i = 1; i <= 30; i++) {
  const textarea = document.createElement('textarea');
  textarea.id = 'eachStudentNotes';
  textarea.placeholder = `Student ${i} Notes`;
  textarea.className = 'inputField';
  studentNotesDiv.appendChild(textarea);
}



// Add Period Plan Button

document.addEventListener('DOMContentLoaded', function () {
  const addPeriodPlanBtn = document.getElementById('addPeriodPlanBtn');
  const containerPlan = document.querySelector('.containerPlan');
  const parentPeriodDiv = document.getElementById('periodDiv');
  let clonedPeriodCount = 0;

  addPeriodPlanBtn.addEventListener('click', function () {
    if (clonedPeriodCount < 5) {
      const clonedPeriod = parentPeriodDiv.cloneNode(true);

      containerPlan.appendChild(clonedPeriod);
      clonedPeriodCount++;
    } else {
      alert('Seriously, if you have more than 10 periods.. your problem is bigger than needing a planner');
    }
  });
});

  //Saving to Local Storage
