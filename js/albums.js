var records = {
    album1: [
        "https://open.spotify.com/embed/album/1KZC0cX0qq6hodR9YVgh9F?utm_source=generator&theme=0"
    ],
    album2: [
        "https://open.spotify.com/embed/album/6BzxX6zkDsYKFJ04ziU5xQ?si=-xLI743VQ2WZIY8s4zpJQw&utm_source=generator&theme=0"
    ],
    album3: [
        "https://open.spotify.com/embed/album/1Mo4aZ8pdj6L1jx8zSwJnt?si=uYquXzgrRyeuDKxFiO3uDw&utm_source=generator&theme=0"
    ],
    album4: [
        "https://open.spotify.com/embed/album/0EiI8ylL0FmWWpgHVTsZjZ?si=JyAqF3uqRLy6F0NMPpISAg&utm_source=generator&theme=0"
    ],
    album5: [
        "https://open.spotify.com/embed/album/0icHZs4Xsrte8mapiDco1W?si=LAq3RI75QfuV41cLfOhtEA&utm_source=generator&theme=0"
    ],
    album6: [
        "https://open.spotify.com/embed/album/3qBWNcWifNhUKJAWzswdJY?si=ju-IhPEYSc-euUcnje14-Q&utm_source=generator&theme=0"
    ],
};

// album1 on click
// var spotify = document.getElementById("spotify1");
document.querySelector("#album1").addEventListener("click", function() {
    document.getElementById("spotify1").src = records.album1[0];
    console.log("album1 clicked");
});

// album2 on click
document.querySelector("#album2").addEventListener("click", function() {
    document.getElementById("spotify2").src = records.album2[0];
    console.log("album2 clicked");
});

// album3 on click
document.querySelector("#album3").addEventListener("click", function() {
    document.getElementById("spotify3").src = records.album3[0];
    console.log("album3 clicked");
});

// album4 on click
document.querySelector("#album4").addEventListener("click", function() {
    document.getElementById("spotify4").src = records.album4[0];
    console.log("album4 clicked");
});

// album5 on click
document.querySelector("#album5").addEventListener("click", function() {
    document.getElementById("spotify5").src = records.album5[0];
    console.log("album5 clicked");
});

// album6 on click
document.querySelector("#album6").addEventListener("click", function() {
    document.getElementById("spotify6").src = records.album6[0];
    console.log("album6 clicked");
});