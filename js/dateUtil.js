// Format the date in the format 'mm-dd-yyyy'
function formatDate(date) {
    var month = '' + (date.getMonth() + 1);
    var day = '' + date.getDate();
    var year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [month, day, year].join('-');
}

// Format the date and time in the format 'mm-dd-yyyy hh:mm:ss AM/PM'
function formatDateTime(date) {
    var month = '' + (date.getMonth() + 1);
    var day = '' + date.getDate();
    var year = date.getFullYear();
    var hours = '' + date.getHours();
    var minutes = '' + date.getMinutes();
    var seconds = '' + date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // make sure hours is not 0
    hours = '' + hours; // convert hours back to a string
    hours = hours.length < 2 ? '0' + hours : hours; // add leading 0 if necessary

    minutes = minutes.length < 2 ? '0' + minutes : minutes;
    seconds = seconds.length < 2 ? '0' + seconds : seconds;
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    console.log(strTime)
    return [month, day, year].join('-') + ' ' + strTime;
}


// Export the functions so they can be used in other scripts
window.formatDate = formatDate;
window.formatDateTime = formatDateTime;
