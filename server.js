var express = require("express");
var path = require("path");
var fs = require("fs");
var notes = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

currentID = notes.length;
console.log("notes.length");
console.log(currentID);

// API Routes

app.get("/api/notes", function (req, res) {

    console.log("get /api/notes HAS BEEN CALLED");

    console.log("notes.length");
    console.log(currentID);

    return res.json(notes);
});

app.post("/api/notes", function (req, res) {
    var newNote = req.body;
    console.log("post /api/notes HAS BEEN CALLED");

    console.log("Adding new property to object");
    newNote["id"] = currentID +1;
    currentID++;
    console.log(newNote);

    notes.push(newNote);

    rewriteNotes();

    return res.status(200).end();
});

app.delete("/api/notes/:id", function (req, res) {
    res.send('Got a DELETE request at /api/notes/:id')

    var id = req.params.id;

    console.log("Current ID called to be deleted");
    console.log(id);

    var idLess = notes.filter(function (less) {
        return less.id < id;
    });

    console.log("idLess");
    console.log(idLess);

    var idGreater = notes.filter(function (greater) {
        return greater.id > id;
    });

    console.log("idGreater");
    console.log(idGreater);

    notes = idLess.concat(idGreater);

    rewriteNotes();
})

// Access files in "public" folder

app.use(express.static("public"));

// HTML Routes

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Listen

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// Functions

function rewriteNotes() {
    fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
        if (err) {
            console.log("this error is from rewriteNotes")
            return console.log(err);
        }

        console.log("Success!");
    });
}
