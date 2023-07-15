// Flag to check if we're still loading the initial data
var isLoading = true;

// Load data from the ticket_data list and update the records' created_on date upon loading the page
// so that all the tickets have the created on date set as yesterday and the last ticket to today's date
function createTicketTable(table) {
  for (var i = 0; i < ticket_data.length; i++) {
    insertTicketToTable(table, ticket_data[i], i);
  }
  isLoading = false; // Finished loading the initial data
}

function insertTicketToTable(table, ticket, index) {
  var row = table.insertRow(-1);
  row.insertCell(0).innerHTML = ticket.number;
  row.insertCell(1).innerHTML = ticket.email;
  row.insertCell(2).innerHTML = ticket.phone;
  row.insertCell(3).innerHTML = formatDateTime(getCreatedOnDate(ticket, index));
  row.insertCell(4).innerHTML = ticket.status;
}

// Get the appropriate created_on date based on the index and ticket
function getCreatedOnDate(ticket, index) {
  var originalDate = new Date(ticket.created_on); // Convert to Date object if not already
  var newDate;

  // If loading, set all tickets to 'yesterday' except the last one, if not loading set to 'today'
  if (isLoading) {
    newDate = index === ticket_data.length - 1 ? new Date(today) : new Date(yesterday);
  } else {
    newDate = new Date(today);
  }

  // Combine the date from newDate with the time from originalDate
  newDate.setHours(originalDate.getHours(), originalDate.getMinutes(), originalDate.getSeconds(), originalDate.getMilliseconds());

  return newDate;
}


createTicketTable(table);

// if the page is loaded by the robot, it won't see the new record created by the CSR so we're adding it manually
if (user !== 'CSR' || user === null) {
  insertTicketToTable(table, newTicket, ticket_data.length);
}
