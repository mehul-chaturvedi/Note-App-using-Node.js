const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleVar = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyVar = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}
const args = yargs
.command('add', 'Add a new Note', {
    title: titleVar,
    body: bodyVar,
    author: {
        demand: true,
        describe: 'Author of the note',
        alias: 'a'
    }
})
.command('list', 'List of all notes')
.command('read', 'Reading a note', {
    title: titleVar
})
.command('remove', 'Removing a note', {
    title: titleVar
})
.help()
.argv;
var command = args._[0];

if(command === 'add'){
    notes.addNote(args.title, args.author, args.body);
}
else if(command === 'read'){
    var noteRead = notes.readNote(args.title);
    if(noteRead)
    {
        console.log('Note Found');
        notes.logNotes(noteRead);
    }else{ console.log('No match found'); }
}
else if(command === 'remove'){
    var noteRemoved = notes.removeNote(args.title);
    var message = noteRemoved ? 'Note Removed' : 'Note not found';
    console.log(message);
}
else if(command === 'list'){
    var allNotes = notes.listNote();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        notes.logNotes(note);
    });
}
else {
    console.log('Command not recognized');
}