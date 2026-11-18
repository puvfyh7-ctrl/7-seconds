let start = 0
input.onButtonPressed(Button.B, function () {
    start = input.runningTime() + start
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
