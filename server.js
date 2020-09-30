var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

// API Routes

app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

app.post("/api/notes", function (req, res) {
    var newNote = req.body;

    console.log(newNote);

    notes.push(newNote);

    return res.status(200).end();
});

app.delete("/api/notes/:id", function (req, res) {
    res.send('Got a DELETE request at /api/notes/:id')
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
