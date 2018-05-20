var events = [
  {'Date': new Date(2018, 4, 7), 'Title': 'Call mom.'},
  {'Date': new Date(2018, 4, 10), 'Title': 'Soccer time at 5pm', 'Link': 'https://www.soccarena-olympiapark.de'}
];
var settings = {};
var element = document.getElementById('calendar');
calendar(element, events, settings);