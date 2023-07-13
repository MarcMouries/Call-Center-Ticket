// Load data from ticket_data.js
var table = document.getElementById('ticketTable');

for (var i = 0; i < ticket_data.length; i++) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = ticket_data[i].number;
    cell2.innerHTML = ticket_data[i].email;
    cell3.innerHTML = ticket_data[i].phone;
    cell4.innerHTML = ticket_data[i].created_on;
    cell5.innerHTML = ticket_data[i].status;
}

function filterTickets() {
    // Declare variables 
    var inputNumber = document.getElementById('numberFilter');
    var inputEmail = document.getElementById('emailFilter');
    var inputPhone = document.getElementById('phoneFilter');
    var inputDate = document.getElementById('dateFilter');
    var inputStatus = document.getElementById('statusFilter');
    
    var filterNumber = inputNumber.value.toUpperCase();
    var filterEmail = inputEmail.value.toUpperCase();
    var filterPhone = inputPhone.value.toUpperCase();
    var filterDate = inputDate.value;
    var filterStatus = inputStatus.value.toUpperCase();
    
    var tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (var i = 1; i < tr.length; i++) {
        var tdNumber = tr[i].getElementsByTagName('td')[0];
        var tdEmail = tr[i].getElementsByTagName('td')[1];
        var tdPhone = tr[i].getElementsByTagName('td')[2];
        var tdDate = tr[i].getElementsByTagName('td')[3];
        var tdStatus = tr[i].getElementsByTagName('td')[4];
        
        if (tdNumber) {
            var txtValueNumber = tdNumber.textContent || tdNumber.innerText;
            var txtValueEmail = tdEmail.textContent || tdEmail.innerText;
            var txtValuePhone = tdPhone.textContent || tdPhone.innerText;
            var txtValueDate = tdDate.textContent || tdDate.innerText;
            var txtValueStatus = tdStatus.textContent || tdStatus.innerText;

            if (
                txtValueNumber.toUpperCase().indexOf(filterNumber) > -1 &&
                txtValueEmail.toUpperCase().indexOf(filterEmail) > -1 &&
                txtValuePhone.toUpperCase().indexOf(filterPhone) > -1 &&
                (filterDate == "" || txtValueDate.indexOf(filterDate) > -1) &&
                txtValueStatus.toUpperCase().indexOf(filterStatus) > -1
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Get the modal
var modal = document.getElementById("ticketModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// When the user submits the form in the modal
// Your previous JavaScript code

// When the user submits the form in the modal
document.getElementById("newTicketForm").onsubmit = function(event) {
  event.preventDefault(); // Prevent the form from being submitted in the traditional way

  // Get the last ticket number in the ticket_data
  var lastTicket = ticket_data[ticket_data.length - 1].number;

  // Remove non-numeric characters and increment the numeric part by one for the new record
  var lastNumber = parseInt(lastTicket.replace(/[^0-9]/g, ''), 10);
  var newNumber = "CCT" + String(lastNumber + 1).padStart(7, '0');

  // Get the values entered by the user in the modal
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var status = document.getElementById("status").value;

  // Get the current date and format it as YYYY-MM-DD
  var createdOn = new Date();
  var month = '' + (createdOn.getMonth() + 1);
  var day = '' + createdOn.getDate();
  var year = createdOn.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  createdOn = [year, month, day].join('-');

  // Add the new record to the table
  var row = table.insertRow(-1);
  row.insertCell(0).innerHTML = newNumber;
  row.insertCell(1).innerHTML = email;
  row.insertCell(2).innerHTML = phone;
  row.insertCell(3).innerHTML = createdOn;
  row.insertCell(4).innerHTML = status;

  // Also add the new record to ticket_data
  ticket_data.push({
    number: newNumber,
    email: email,
    phone: phone,
    created_on: createdOn,
    status: status
  });

  // Close the modal
  modal.style.display = "none";

  // Clear the form fields in the modal
  document.getElementById("email").value = "default@example.com";
  document.getElementById("phone").value = "1234567890";
  document.getElementById("status").value = "Open";
}