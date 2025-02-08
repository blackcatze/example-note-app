document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.getElementById("notes-container");

    const notes = [
        { title: "Belajar JavaScript", content: "Hari ini belajar tentang Web Component!" },
        { title: "Membuat Aplikasi", content: "Membuat aplikasi catatan dengan HTML, CSS, dan JS." },
        { title: "Custom Elements", content: "Menggunakan custom elements untuk UI yang lebih modular." }
    ];

    notes.forEach(note => {
        const noteElement = document.createElement("note-card");
        noteElement.setAttribute("title", note.title);
        noteElement.setAttribute("content", note.content);
        notesContainer.appendChild(noteElement);
    });

    document.addEventListener("note-added", function (event) {
        const newNote = document.createElement("note-card");
        newNote.setAttribute("title", event.detail.title);
        newNote.setAttribute("content", event.detail.content);
        notesContainer.appendChild(newNote);
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    
    if (title.trim() === "" || content.trim() === "") {
        alert("Please fill out all fields!");
        event.preventDefault(); 
    }
});


