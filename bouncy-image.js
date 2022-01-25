const Google = document.getElementById('google')
        const FPS = 30

        const canvas = document.getElementById("gameCanvas")
        console.log("canvas height and width are " + canvas.height + " & " + canvas.width)

        var size = 50
        degree = 0
        // var context;
        console.log("page dimensions are " + canvas.width + " x " + canvas.height)

        var LogoX = 0
        var LogoY = 0
        var clicks = 0

        xVelo = Math.floor(Math.random() * 501 + 100) / FPS
        yVelo = Math.floor(Math.random() * 501 + 100) / FPS

        // button.addEventListener('click', bounce)

        function bounce() {
            // clicks = 1
            // context.fillStyle = "./art&design/GC logo.png"
            // context.fillRect(LogoX - size / 2, LogoY- size / 2, size, size)
            Google.style.top = `${LogoY}px`
            Google.style.left = `${LogoX}px`
            console.log("postion is " + Google.style.top, Google.style.left)
            // Google.src = "./art&design/GC logo.png"

            setInterval(update, 1000 / FPS )
            console.log("bouncy")
        }

        function update() {
            // if (clicks = 1) {
                // button.disabled = true
                degree += 15
                // apply movement first THEN rotate so it works properly
                Google.style.transform = `translate(${LogoX}px, ${LogoY}px)`
                LogoX += xVelo
                LogoY += yVelo
                //+= allows for multiple transforms
                Google.style.transform += `rotate(${degree}deg)`
                // `translate(${LogoX}px, ${LogoY}px)`
            // }
            canvas.getContext("2d")

            // var xInput = document.getElementById('xVelo')
            // var yInput = document.getElementById('yVelo')
            // xInput.textContent = Math.floor(LogoX)
            // yInput.textContent = Math.floor(LogoY)

            if (LogoX - size / 2 < -25 && xVelo < 0) {
                xVelo = -xVelo
            }
            else if (LogoX + size * 2 > canvas.width && xVelo > 0) {
                xVelo = -xVelo
            }
            if (LogoY - size / 2 < -25 && yVelo < 0) {
                yVelo = -yVelo
            }
            else if (LogoY + size * 2 > canvas.height && yVelo > 0) {
                yVelo = -yVelo
            }
        }

        bounce()