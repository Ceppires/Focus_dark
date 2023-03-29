export default function() {
    const buttonPressForest = new Audio("audio/Floresta.wav")
    const buttonPressRain = new Audio("audio/Chuva.wav")
    const buttonPressCoffeeShop = new Audio("audio/Cafeteria.wav")
    const buttonPressFireplace = new Audio("audio/Lareira.wav")

    function playMusic(data) {
        switch(data){
            case 'forest':
                stopMusic()
                buttonPressForest.play()
                vol(buttonPressForest, 'f')
                break;
            case 'rain':
                stopMusic()
                buttonPressRain.play()
                vol(buttonPressRain, 'r')
                break
            case 'coffeeshop':
                stopMusic()
                buttonPressCoffeeShop.play()
                vol(buttonPressCoffeeShop, 'c')
                break
            case 'fireplace':
                stopMusic()
                buttonPressFireplace.play()
                vol(buttonPressFireplace, 'fp')
                break
        }
    }

    function stopMusic() {
        buttonPressCoffeeShop.pause()
        buttonPressRain.pause()
        buttonPressFireplace.pause()
        buttonPressForest.pause()
    }

    function vol(music, id) {
        var a = music
        var slider = 0 + "." + document.getElementById(id).value;
        a.volume = slider
    }

    return {
        playMusic,
        stopMusic
    }
}



    


