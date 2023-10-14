// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// var savebtn = document.querySelector(".fas fa-save")

var present = dayjs();
var presentTime = present.hour();
var blank1 = $('<div>');
var blank2 = $('<div>');
var blank3 = $('<textarea>');
var blank4 = $('<button>');
var blank5 = $('<i>');
var time = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var primetime;
var block = $('#block');
var prime = "";
var timeReturn = [9, 10, 11, 12, 1, 2, 3, 4, 5]
var r = 0;

// newcode

  for (var i = 0; i < time.length; i++) {
    if (presentTime > time[i]) {
      addPastTimeBlock();
    }
    else if (presentTime < time[i]) {
      addFutureTimeBlock();
    }
    else {
      addPresentTimeBlock();
    }
  }

function addPastTimeBlock() {
  if (time[i] > 12){
    primetime = time[i] - 12
  }
  else if (time[i] < 12){
    primetime = time[i]
    prime = "AM"
  }
  else {
    primetime = time[i]
    prime = "PM"
  }

  block.append(`
  <div id=card${i} class="row time-block past">
    <div id=hour${i} class='col-2 col-md-1 hour text-center py-3'>
      <span id=tMinus${i}>${primetime}<span>${prime}
    </div>
    <textarea class='col-8 col-md-10 description' rows=3 id=textarea${i}>
    </textarea>
    <button class='btn saveBtn col-2 col-md-1' id=Btn${i} aria-label=save>
      <i class='fas fa-save' aria-hidden='true'></i>
    </button>
  </div>
  `)
  }

  function addPresentTimeBlock() {
    if (time[i] > 12){
      primetime = time[i] - 12
    }
    else if (time[i] < 12){
      primetime = time[i]
      prime = "AM"
    }
    else {
      primetime = time[i]
      prime = "PM"
    }

    block.append(`
    <div id=card${i} class="row time-block present">
      <div id=hour${i} class='col-2 col-md-1 hour text-center py-3'>
        <span id=tMinus${i}>${primetime}<span>${prime}
      </div>
      <textarea class='col-8 col-md-10 description' rows=3 id=textarea${i}>
      </textarea>
      <button class='btn saveBtn col-2 col-md-1' id=Btn${i} aria-label=save>
        <i class='fas fa-save' aria-hidden='true'>
      </button>
    </div>
    `)
  }

function addFutureTimeBlock() {
  if (time[i] > 12){
    primetime = time[i] - 12
  }
  else if (time[i] < 12){
    primetime = time[i]
    prime = "AM"
  }
  else {
    primetime = time[i]
    prime = "PM"
  }

  block.append(`
  <div id=card${i} class="row time-block future">
    <div id=hour${i} class='col-2 col-md-1 hour text-center py-3'>
      <span class="idtag" id=tMinus${i}>${primetime}<span>${prime}
    </div>
    <textarea class='col-8 col-md-10 description' rows=3 id=textarea${i}>
    </textarea>
    <button class='btn saveBtn col-2 col-md-1' id=Btn${i} aria-label=save>
      <i class='fas fa-save' aria-hidden='true'>
    </button>
  </div>
  `)
  }

  $(`.btn`).on("click",saveText)
  function saveText(event){
      event.preventDefault();
      var dump = $(this).siblings(`textarea`).val()
      var saveID = $(this).siblings(`.hour`).text()
      localStorage.setItem(saveID, dump)
    }

  //render saves
  for (var i = 0; i < time.length; i++){
    var saveID = $(`#hour${i}`).text()
    $(`#textarea${i}`).text(localStorage.getItem(saveID))
  }

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // savebtn.addEventListener("click", locoSave)

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(present.format('dddd[,] MMMM[,] DD YYYY'))
});
