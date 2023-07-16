# Call-Center-Ticket

This project involves the design and development of a Mockup Customer Relationship Management (CRM) Page that simulates the user interface and functionality of a typical CRM system. 

This project is used to showcase how ServiceNow's Robotic Process Automation (RPA) can filter the list of tickets to see only the tickets created today and with the status code LG99. The filtered data is then passed to a ServiceNow workflow to create cases automatically. 

This automation eliminates the need for users to manually export CRM tickets for the purpose of creating cases and streamlining the process to save valuable time.

## Features
This page provides ticket management functionality, including:
1. Displaying a table of tickets.
2. Filtering tickets based on various criteria.
3. Adding new tickets through a modal form.
4. Automatic ticket creation for non-CSR users.
5. Automatic updates the tickets' created date to current dates for demonstration purposes

## Mode of operation

CSR Mode: When a CSR navigates to the page using the URL https://marcmouries.github.io/Call-Center-Ticket?user=CSR, they can manually create a new ticket.

RPA Bot Mode: When the ServiceNow RPA bot visits the page without specifying a user (https://marcmouries.github.io/Call-Center-Ticket), the Mockup CRM automatically creates a ticket. This is done to ensure that the new ticket is present when the RPA bot interacts with the page.
