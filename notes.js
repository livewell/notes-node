console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = function(){
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e){
        return [];
    }
};

var saveNotes = function(notes){
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = function(title, body){
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    //loops through notes array and finds duplicate notes with same title.
    var duplicateNotes = notes.filter(function(note){
        return note.title == title;
    });
    
    //if there are no duplicate notes, add the note 
    //to notes array and save to json
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
    }
    else
        console.log("Duplicate note!");   
}; 

var getAll = function(){
    console.log('Getting all notes');
};

var getNote = function(title){
    console.log('Grabbing note', title);
}

var removeNote = function(title){
    console.log.log('Removing note', title);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};