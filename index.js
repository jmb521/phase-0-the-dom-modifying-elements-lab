let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.textContent = "Jennifer is the champion"
document.body.append(newHeader)
const main = document.getElementById("main")
main.remove()
console.log("main should be gone", main)