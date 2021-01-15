const list = document.getElementById("list")
const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")

addButton.addEventListener("click", event => {
    const newList = document.createElement("li")

    const newImg = document.createElement("img")

    const newSpan = document.createElement("span")

    for (let i = 0; i < list.childElementCount + 1; i++) {
        newImg.setAttribute("src", "http://placehold.it/64x64")
        newImg.setAttribute("alt", `アイテム${i}`)
        newList.appendChild(newImg)
        newList.appendChild(newSpan)
        list.appendChild(newList)
        newSpan.textContent = `アイテム${i}`
    }
})

removeButton.addEventListener("click", event => {
    const indexList = list.childElementCount

    if (indexList >= 1) {
        list.removeChild(list.lastChild)
    }
})
