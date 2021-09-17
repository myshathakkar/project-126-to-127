ochintu = ""
aisa_sama_na_hota = ""
function preload() {
    ochintu = loadSound("music.mp3")
    aisa_sama_na_hota = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video, 0, 0, 600, 500)
}