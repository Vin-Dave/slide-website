// pobieranie elementów HTML
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const noteList = document.getElementById("note-list");

// pobieranie notatek z localStorage lub tworzenie nowej tablicy
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// funkcja renderująca listę notatek
function renderNotes() {
  // wyczyszczenie listy notatek
  noteList.innerHTML = "";
}
// dodanie każdej notatki do listy
notes.forEach((note, index) => {
  const noteItem = document.createElement("li");
  noteItem.classList.add("note-item");
  noteItem.dataset.id = index;
  noteItem.innerHTML = `
			<p>${note}</p>
			<button class="delete-note-btn">Usuń</button>
			<button class="edit-note-btn">Edytuj</button>
			<button class="save-note-btn hidden">Zapisz</button>
			<button class="cancel-note-btn hidden">Anuluj</button>
		`;
  noteList.appendChild(noteItem);
});

// dodanie obsługi zdarzeń dla przycisków usuwania i edycji notatek
const deleteNoteBtns = document.querySelectorAll(".delete-note-btn");
const editNoteBtns = document.querySelectorAll(".edit-note-btn");
const saveNoteBtns = document.querySelectorAll(".save-note-btn");
const cancelNoteBtns = document.querySelectorAll(".cancel-note-btn");

deleteNoteBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const noteItem = event.target.closest(".note-item");
    const noteIndex = noteItem.dataset.id;
    notes.splice(noteIndex, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
  });
});

editNoteBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const noteItem = event.target.closest(".note-item");
    const noteIndex = noteItem.dataset.id;
    const noteText = noteItem.querySelector("p").textContent;
    noteItem.querySelector("p").classList.add("hidden");
    noteItem.querySelector(".delete-note-btn").classList.add("hidden");
    noteItem.querySelector(".edit-note-btn").classList.add("hidden");
    noteItem.querySelector(".save-note-btn").classList.remove("hidden");
    noteItem.querySelector(".cancel-note-btn").classList.remove("hidden");
    noteItem.innerHTML = `
				<textarea>${noteText}</textarea>
				<button class="save-note-btn">Zapisz</button>
				<button class="cancel-note-btn">Anuluj</button>
			`;
    const saveNoteBtn = noteItem.querySelector(".save-note-btn");
    const cancelNoteBtn = noteItem.querySelector(".cancel-note-btn");
    saveNoteBtn.addEventListener("click", () => {
      const updatedNote = noteItem.querySelector("textarea").value;
      notes[noteIndex] = updatedNote;
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
    });
    cancelNoteBtn.addEventListener("click", () => {
      renderNotes();
    });
  });
});

saveNoteBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const noteItem = event.target.closest(".note-item");
    const noteIndex = noteItem.dataset.id;
    const updatedNote = noteItem.querySelector("textarea").value;
    notes[noteIndex] = updatedNote;
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
  });
});

cancelNoteBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    renderNotes();
  });
});

// dodawanie nowej notatki
addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    renderNotes();
  }
});

// inicjowanie aplikacji
renderNotes();
