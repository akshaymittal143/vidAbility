module.exports = function(app) {

  // Home page
  app.get('/', function(req, res) {
    res.send('This is the hompage');
  });



  var jobDatabase = [{
  "Title": "Sample Job 1",
  "Description": "Sample Description 1",
  "Requirements": "Sample Requirements 1",
  "Accomodation": "Sample Accomodation 1",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 1",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 1",
  "id": 1
}, {
  "Title": "Sample Job 2",
  "Description": "Sample Description 2",
  "Requirements": "Sample Requirements 2",
  "Accomodation": "Sample Accomodation 2",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 2",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 2",
  "id": 2
}, {
  "Title": "Sample Job 3",
  "Description": "Sample Description 3",
  "Requirements": "Sample Requirements 3",
  "Accomodation": "Sample Accomodation 3",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 3",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 3",
  "id": 3
}, {
  "Title": "Sample Job 4",
  "Description": "Sample Description 4",
  "Requirements": "Sample Requirements 4",
  "Accomodation": "Sample Accomodation 4",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 4",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 4",
  "id": 4
}, {
  "Title": "Sample Job 5",
  "Description": "Sample Description 5",
  "Requirements": "Sample Requirements 5",
  "Accomodation": "Sample Accomodation 5",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 5",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 5",
  "id": 5
}, {
  "Title": "Sample Job 6",
  "Description": "Sample Description 6",
  "Requirements": "Sample Requirements 6",
  "Accomodation": "Sample Accomodation 6",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 6",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 6",
  "id": 6
}, {
  "Title": "Sample Job 7",
  "Description": "Sample Description 7",
  "Requirements": "Sample Requirements 7",
  "Accomodation": "Sample Accomodation 7",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 7",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 7",
  "id": 7
}, {
  "Title": "Sample Job 8",
  "Description": "Sample Description 8",
  "Requirements": "Sample Requirements 8",
  "Accomodation": "Sample Accomodation 8",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 8",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 8",
  "id": 8
}, {
  "Title": "Sample Job 88",
  "Description": "Sample Description 88",
  "Requirements": "Sample Requirements 98",
  "Accomodation": "Sample Accomodation 88",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 88",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 88",
  "id": 88
}, {
  "Title": "Sample Job 9",
  "Description": "Sample Description 9",
  "Requirements": "Sample Requirements 9",
  "Accomodation": "Sample Accomodation 9",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 9",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 9",
  "id": 9
}, {
  "Title": "Sample Job 10",
  "Description": "Sample Description 10",
  "Requirements": "Sample Requirements 10",
  "Accomodation": "Sample Accomodation 10",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 10",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 10",
  "id": 10
}, {
  "Title": "Sample Job 11",
  "Description": "Sample Description 11",
  "Requirements": "Sample Requirements 11",
  "Accomodation": "Sample Accomodation 11",
  "Remote": true,
  "InHouse": true,
  "PartTime": true,
  "FullTIme": true,
  "Date": "Sample Date 11",
  "Applicants": [
    {}
  ],
  "Pay": "Pay 11",
  "id": 11
}];

  // Jobs page for searching with keywords
  app.get('/job', function(req, res) {

  	for (var i = 0; i < jobDatabase.length; i++) {
  		if (jobDatabase[i].Title.toLowerCase().includes("SAMPLE".toLowerCase())) {
  			console.log(jobDatabase[i].Title);
  		}
  	}

    //res.send('This is the job page');
    res.json(jobDatabase);
  });

  // Interview page
  app.get('/interview', function(req, res) {
    res.send('This is the hompage');
  });
}