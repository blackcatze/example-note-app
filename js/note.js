const notesData = [
    {
      id: 'notes-jT-jjsyz61J8XKiI',
      title: 'Welcome to Notes, Dimas!',
      body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
      createdAt: '2022-07-28T10:03:12.594Z',
      archived: false,
    },
    {
      id: 'notes-aB-cdefg12345',
      title: 'Meeting Agenda',
      body: 'Discuss project updates and assign tasks for the upcoming week.',
      createdAt: '2022-08-05T15:30:00.000Z',
      archived: false,
    },
    {
      id: 'notes-XyZ-789012345',
      title: 'Shopping List',
      body: 'Milk, eggs, bread, fruits, and vegetables.',
      createdAt: '2022-08-10T08:45:23.120Z',
      archived: false,
    },
    {
      id: 'notes-1a-2b3c4d5e6f',
      title: 'Personal Goals',
      body: 'Read two books per month, exercise three times a week, learn a new language.',
      createdAt: '2022-08-15T18:12:55.789Z',
      archived: false,
    },
    {
      id: 'notes-LMN-456789',
      title: 'Recipe: Spaghetti Bolognese',
      body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
      createdAt: '2022-08-20T12:30:40.200Z',
      archived: false,
    },
    {
      id: 'notes-QwErTyUiOp',
      title: 'Workout Routine',
      body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
      createdAt: '2022-08-25T09:15:17.890Z',
      archived: false,
    },
    {
      id: 'notes-abcdef-987654',
      title: 'Book Recommendations',
      body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
      createdAt: '2022-09-01T14:20:05.321Z',
      archived: false,
    },
    {
      id: 'notes-zyxwv-54321',
      title: 'Daily Reflections',
      body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
      createdAt: '2022-09-07T20:40:30.150Z',
      archived: false,
    },
    {
      id: 'notes-poiuyt-987654',
      title: 'Travel Bucket List',
      body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
      createdAt: '2022-09-15T11:55:44.678Z',
      archived: false,
    },
    {
      id: 'notes-asdfgh-123456',
      title: 'Coding Projects',
      body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
      createdAt: '2022-09-20T17:10:12.987Z',
      archived: false,
    },
    {
      id: 'notes-5678-abcd-efgh',
      title: 'Project Deadline',
      body: 'Complete project tasks by the deadline on October 1st.',
      createdAt: '2022-09-28T14:00:00.000Z',
      archived: false,
    },
    {
      id: 'notes-9876-wxyz-1234',
      title: 'Health Checkup',
      body: 'Schedule a routine health checkup with the doctor.',
      createdAt: '2022-10-05T09:30:45.600Z',
      archived: false,
    },
    {
      id: 'notes-qwerty-8765-4321',
      title: 'Financial Goals',
      body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
      createdAt: '2022-10-12T12:15:30.890Z',
      archived: false,
    },
    {
      id: 'notes-98765-54321-12345',
      title: 'Holiday Plans',
      body: 'Research and plan for the upcoming holiday destination.',
      createdAt: '2022-10-20T16:45:00.000Z',
      archived: false,
    },
    {
      id: 'notes-1234-abcd-5678',
      title: 'Language Learning',
      body: 'Practice Spanish vocabulary for 30 minutes every day.',
      createdAt: '2022-10-28T08:00:20.120Z',
      archived: false,
    },
  ];
  
console.log(notesData);

  document.addEventListener("DOMContentLoaded", function () {
    const notesContainer = document.getElementById("notes-container");

    notesData.forEach(note => {
        const noteElement = document.createElement("note-card");
        noteElement.setAttribute("title", note.title);
        noteElement.setAttribute("content", note.body);
        notesContainer.appendChild(noteElement);
    });

    document.addEventListener("note-added", function (event) {
        const newNote = document.createElement("note-card");
        newNote.setAttribute("title", event.detail.title);
        newNote.setAttribute("content", event.detail.content);
        notesContainer.appendChild(newNote);
    });
});

class AppBar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .app-bar {
                    background: skyblue;
                    color: white;
                    padding: 15px;
                    text-align: center;
                    font-size: 1.5em;
                    font-weight: bold;
                }
            </style>
            <div class="app-bar">Aplikasi Catatan</div>
        `;
    }
}
customElements.define("app-bar", AppBar);

class NoteForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <style>
                .form-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-bottom: 20px;
                }
                input, textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
            </style>
            <div class="form-container">
                <input type="text" id="note-title" placeholder="Judul Catatan">
                <textarea id="note-content" rows="3" placeholder="Isi Catatan"></textarea>
                <button id="add-note-btn">Tambah Catatan</button>
            </div>
        `;

        this.querySelector("#add-note-btn").addEventListener("click", () => {
            const title = this.querySelector("#note-title").value.trim();
            const content = this.querySelector("#note-content").value.trim();

            if (title && content) {
                const event = new CustomEvent("note-added", {
                    detail: { title, content }
                });
                document.dispatchEvent(event);

                this.querySelector("#note-title").value = "";
                this.querySelector("#note-content").value = "";
            }
        });
    }
}
customElements.define("note-form", NoteForm);

class NoteCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const title = this.getAttribute("title") || "No Title";
        const content = this.getAttribute("content") || "No Content";

        this.shadowRoot.innerHTML = `
            <style>
                .note-card {
                    background: white;
                    border: 2px solid #ccc;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 10px;
                    box-shadow: 0 2px 5px rgba(135, 206, 235, 0.2);
                    transition: all 0.3s ease;
                }
                .note-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(135, 206, 235, 0.3);
                }
                h3 {
                    margin: 0 0 10px;
                }
            </style>
            <div class="note-card">
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;
    }
}
customElements.define("note-card", NoteCard);

class NoteElement extends HTMLElement {
  constructor() {
      super();
      this.title = this.getAttribute("title") || "Untitled";
      this.content = this.getAttribute("content") || "No content";
  }

  connectedCallback() {
      this.innerHTML = `
          <div>
              <h3>${this.title}</h3>
              <p>${this.content}</p>
          </div>
      `;
  }
}

customElements.define("note-item", NoteElement);

