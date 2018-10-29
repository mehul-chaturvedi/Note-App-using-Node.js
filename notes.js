const fs = require('fs');

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);

    }catch(e){return [];}
}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, author, body) => {
   
    var notes = fetchNotes();
    var note = {
        title,
        author,
        body
    };

    var duplicateNote = notes.filter((note) => note.title === title );
    if(duplicateNote.length === 0){
        notes.push(note);
        saveNote(notes);
        console.log('Note Added');
        logNotes(note);
    } else{console.log("Note with same title exist")}
    
};
var readNote = (title) =>{
    var notes = fetchNotes();
    var matchNote = notes.filter((note) => note.title === title);
    return matchNote[0];
};
var removeNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNote(filteredNotes);
    return notes.length !== filteredNotes.length;
};
var listNote = () => {
    return fetchNotes();
};

var logNotes = (note) => {
    console.log('----------------');
    console.log(`Title: ${note.title}`);
    console.log(`Author: ${note.author}`);
    console.log(`Message: ${note.body}`);
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    listNote,
    logNotes
};