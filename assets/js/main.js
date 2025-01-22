document.addEventListener('DOMContentLoaded', () => {

    var saveButton = document.getElementById('btnSave');
    var saveButton2 = document.getElementById('btnSave2');
    var saveButton3 = document.getElementById('btnSave3');
    var saveButton4 = document.getElementById('btnSave4');
    var saveButton5 = document.getElementById('btnSave5');
    var saveButton6 = document.getElementById('btnSave6');
    var saveButton7 = document.getElementById('btnSave7');

    saveButton.addEventListener('click', () => {
      saveButton.classList.toggle('saved');
    });
    saveButton2.addEventListener('click', () => {
      saveButton2.classList.toggle('saved');
    });
    saveButton3.addEventListener('click', () => {
      saveButton3.classList.toggle('saved');
    });
    saveButton4.addEventListener('click', () => {
      saveButton4.classList.toggle('saved');
    });
    saveButton5.addEventListener('click', () => {
      saveButton5.classList.toggle('saved');
    });
    saveButton6.addEventListener('click', () => {
      saveButton6.classList.toggle('saved');
    });
    saveButton7.addEventListener('click', () => {
      saveButton7.classList.toggle('saved');
    });
});