const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backkward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backkward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log('Play')
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log('Pause');
}

function handleBackward() {
    $video.currentTime -= 10;
    console.log('Menos 10', $video.currentTime);
}

function handleForward() {
    $video.currentTime += 10;
    console.log('Más 10', $video.currentTime);
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
}