const fs  = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};


const argv = yargs
  .command('add','Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','Listing all the notes')
  .command('read','Read a note',{
    title: titleOptions
  })
  .command('remove','Remove a note',{
    title: titleOptions
  })
  .help()
  .argv;
var cmd = argv._[0];


if (cmd === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if (note){
    console.log("Adding note with title: " + note.title);
  }else{
    console.log("Note title already exist try another")
  }

} else if (cmd === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} nodes(s)`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (cmd === 'read'){
  var note = notes.getNote(argv.title);
  if (note){
  }else{
    console.log ('Note not found');
  }
} else if (cmd === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : "Note not found"
  console.log(message);

} else{
  console.log('Command not reconized');
}
