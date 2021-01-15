const list = document.getElementById("list")
const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")

addButton.addEventListener("click", event => {
    const newList = document.createElement("li")
    list.appendChild(newList)

    for (let i = 0; i < list.childElementCount + 1; i++) {
        newList.textContent = `アイテム${i}`
    }
})

removeButton.addEventListener("click", event => {
    const indexList = list.childElementCount

    if (indexList >= 1) {
        list.removeChild(list.lastChild)
    }
})
