const list = document.getElementById("list")
const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")

addButton.addEventListener("click", event => {
    const newList = document.createElement("li")
    const item = list.childElementCount + 1
    newList.textContent = `アイテム${item}`
    list.appendChild(newList)
})

removeButton.addEventListener("click", event => {
    const indexList = list.childElementCount
    if (indexList >= 1) {
        list.removeChild(list.lastElementChild)
    }
})
