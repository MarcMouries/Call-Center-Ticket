// UI Handler

cancelButton.addEventListener("click", function() {
  modal.style.display = "none";
});

document.getElementById("newTicketForm").addEventListener("submit", addNewTicket);

openModalButton.onclick = function() {
  modal.style.display = "block";
  // set default values
  document.getElementById("email").value = newTicket.email;
  document.getElementById("phone").value = newTicket.phone;
  document.getElementById("status").value = newTicket.status;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}






// Check if a row matches the filter values
function isRowMatchingFilter(row, filterNumber, filterEmail, filterPhone, filterDate, filterStatus) {
  var tdNumber = row.getElementsByTagName('td')[0];
  var tdEmail = row.getElementsByTagName('td')[1];
  var tdPhone = row.getElementsByTagName('td')[2];
  var tdDate = row.getElementsByTagName('td')[3];
  var tdStatus = row.getElementsByTagName('td')[4];

  if (tdNumber) {
      var txtValueNumber = tdNumber.textContent || tdNumber.innerText;
      var txtValueEmail = tdEmail.textContent || tdEmail.innerText;
      var txtValuePhone = tdPhone.textContent || tdPhone.innerText;

      // Convert the table's date format to match the filter's date format for comparison
      var tableDateString = tdDate.textContent || tdDate.innerText;
      var tableDateParts = tableDateString.split(" ");
      var txtValueDate = tableDateParts[0]; // Extract date part

      var txtValueStatus = tdStatus.textContent || tdStatus.innerText;

      // Log the filter values and row values for debugging
      console.log("Filter Values: ", filterNumber, filterEmail, filterPhone, filterDate, filterStatus);
      console.log("Row Values: ", txtValueNumber, txtValueEmail, txtValuePhone, txtValueDate, txtValueStatus);

      if (
          txtValueNumber.toUpperCase().indexOf(filterNumber) > -1 &&
          txtValueEmail.toUpperCase().indexOf(filterEmail) > -1 &&
          txtValuePhone.toUpperCase().indexOf(filterPhone) > -1 &&
          (filterDate == "" || txtValueDate.indexOf(filterDate) > -1) &&
          txtValueStatus.toUpperCase().indexOf(filterStatus) > -1
      ) {
          return true;
      } else {
          return false;
      }
  }
}



// Filter tickets based on filter input
function filterTickets() {
  var numberFilter = document.getElementById('numberFilter').value.toUpperCase();
  var emailFilter = document.getElementById('emailFilter').value.toUpperCase();
  var phoneFilter = document.getElementById('phoneFilter').value.toUpperCase();
  var dateFilter = document.getElementById('dateFilter').value;
  var statusFilter = document.getElementById('statusFilter').value.toUpperCase();
  
  // Convert the filter date to match the format in table (mm-dd-yyyy)
  if(dateFilter !== "") {
      var parts = dateFilter.split("-");
      dateFilter = parts[1] + '-' + parts[2] + '-' + parts[0];
  }

  var tr = table.getElementsByTagName('tr');

  // Loop through all table rows, and hide those who don't match the search query
  for (var i = 1; i < tr.length; i++) {
      var isRowMatch = isRowMatchingFilter(tr[i], numberFilter, emailFilter, phoneFilter, dateFilter, statusFilter);
      if (isRowMatch) {
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
  }
}


// SUBMIT FORM
// Submit the form and add new ticket
function addNewTicket(event) {
  event.preventDefault(); // Prevent the form from being submitted in the traditional way

  var lastTicket = ticket_data[ticket_data.length - 1].number;

  // Remove non-numeric characters and increment the numeric part by one for the new record
  var lastNumber = parseInt(lastTicket.replace(/[^0-9]/g, ''), 10);
  var newNumber = "CCT" + String(lastNumber + 1).padStart(7, '0');

  // Get the values entered by the user in the modal
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var status = document.getElementById("status").value;

  // Format the current date and time
  var createdOn = window.formatDateTime(window.today);

  // Add the new record to the table
  var table = document.getElementById('ticketTable');
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
}

// Display today's date
var todayFriendly = window.today;
var options = { year: 'numeric', month: 'long', day: 'numeric' };
todayFriendly = todayFriendly.toLocaleDateString('en-US', options);
document.getElementById("today_date").innerHTML = todayFriendly;
