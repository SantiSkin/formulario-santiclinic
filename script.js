document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can access form fields here using document.getElementById() or other DOM methods
    // Then you can process the form data or perform any other actions
    // For example:
    let formData = new FormData(this);
    let formObject = {};
    formData.forEach(function(value, key){
      formObject[key] = value;
    });
    console.log(formObject); // You can see the form data in the browser console
    // Here you can send the form data to a server using AJAX or perform other tasks
  });

  
  function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the pop-up when close button is clicked
  }

  document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById("popup").style.display = "block"; // Display the pop-up
  });






// This script handles form submission to a Google Apps Script endpoint
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwTI8c1ZG01OAnx5IeAhguG8yVc5YeaH_foWckVTIrXgFGSrvrYyrWu83SRAXLOP7R9qQ/exec';
  const form = document.forms['formulario-santiclinic'];

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset();
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message));
  });