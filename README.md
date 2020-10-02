# NoteTaker

For this assignment I was tasked with building the back end functionality of the note taking application. I created a small data base labeled "db.json" which houses the notes as an array of objects containing a title, content, and an ID number. When the user enters a new note, they must fill out the title and content of the note before a "save" icon will appear in the top right corner. When the user clicks the "save" icon, the note is sent to the server.js file where it is given an ID number and written to the db.json file for storage. When the user clicks a previous note from the side bar, they send a request for the array of notes to the server.js file which, in turn, gets it from the db.json file and sends it back to be displayed to the user. When the user deletes a note, they send a delete request to the server.js file which finds the note to be deleted by it's ID number property and creates a new array of notes not containing the deleted note and overwrites the previous array of notes.

## Link

https://peaceful-brushlands-85202.herokuapp.com/

![ReadMe Screenshot](/Assets/NoteTalerDemo.png)
