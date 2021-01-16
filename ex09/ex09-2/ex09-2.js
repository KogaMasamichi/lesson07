const list = document.getElementById("list")
const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")

addButton.addEventListener("click", event => {
    const newList = document.createElement("li")
    const item = list.childElementCount + 1

    const newImg = document.createElement("img")
    newImg.setAttribute("src", "http://placehold.it/64x64")
    newImg.setAttribute("alt", `アイテム${item}`)
    newList.appendChild(newImg)

    const newSpan = document.createElement("span")
    newList.appendChild(newSpan)
    newSpan.textContent = `アイテム${item}`

    list.appendChild(newList)
})

removeButton.addEventListener("click", event => {
    const indexList = list.childElementCount

    if (indexList >= 1) {
        list.removeChild(list.lastElementChild)
    }
})
