# Note-App-using-Node.js
Its an simple Node.js app that let's you do CRD operations on a JSON file.
Run app.js using node app.js
Its a command line app so you will be doing CRD operations using terminal.

For adding new note:
node app.js add --title="First Note" --author="Me" --body="Hello There"

For deleting a note:
node app.js remove --title="First Note"

For reading a note: 
node app.js read --title="First Note"

For reading all notes:
node app.js list

You can also use flag -t in place of --title, -a for --author and -b for --body
