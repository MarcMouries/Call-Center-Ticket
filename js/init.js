// Define today's date globally so it can be accessed from other scripts
window.today = new Date();
var today = new Date();
var yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

var table = document.getElementById('ticketTable');
var modal = document.getElementById("ticketModal");
var openModalButton = document.getElementById('openModalButton');
var span = document.getElementsByClassName("close")[0];

var cancelButton = document.getElementById("cancelButton");

// Check user parameter
var urlParams = new URLSearchParams(window.location.search);
var user = urlParams.get('user');
console.log("init USER = " + user);

  // The default new ticket: used to set the values in the modal and insert if the page is not used by the CSR (by the bot)
var newTicket = {
    number: 'CCT0001008',
    email: "Frank.Fisher@gmail.com'",
    phone: '123-100-0666',
    created_on: today,
    status: 'LG99'
  };
  console.log("init newTicket = " , newTicket);
