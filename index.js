import { initializeApp } from "https:www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-f5543-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const listInDB = ref(database, "list")

const inputEl = document.getElementById("input-el")
const addButtonEl = document.getElementById("add-button-el")
const listEl = document.getElementById("list-el")

onValue(listInDB, (snapshot) => {
    let itemsArray = Object.values(snapshot.val())
    clearListEl()
    for (let i = 0; i < itemsArray.length; i++) {
        addItemToList(itemsArray[i])
    }
})

addButtonEl.addEventListener("click", () => {
    let inputVal = inputEl.value
    push(listInDB, inputVal)
    clearInputField()
})

function clearInputField() {
    inputEl.value = ""
}

function addItemToList(itemValue) {
    listEl.innerHTML += `<li class="list-item">${itemValue}</li>`
}

function clearListEl() {
    listEl.innerHTML = ""
}