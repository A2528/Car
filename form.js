class form {
    constructor() {
}
display() {
    var title = createElement("h2")
    title.html ("car racing game")
    title.position (130,0)
    var input = createInput("Name")
    input.position(130,160)
    var button = createButton("play")
    button.position(200,160)
}
}