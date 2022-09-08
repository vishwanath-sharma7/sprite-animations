window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    function Mandrake(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.image = document.getElementById('mandrake');
        this.spriteWidth = 256;
        this.spriteHeight = 256;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.scale = 0.75;
        this.x = this.canvasWidth / 2 - this.width * this.scale / 2;
        this.y = this.canvasHeight / 2 - this.height * this.scale / 2;
        this.minFrame = 0;
        this.maxFrame = 355;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.framesHold = 0;

        this.draw = (ctx) => {
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
            ctx.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale)
            this.framesHold++;

        }
        this.update = () => {
            if (this.framesHold % 3 === 0) {

                this.frame = this.frame < this.maxFrame ? this.frame + 1 : this.minFrame;
                this.frameX = this.frame % 18;
                this.frameY = Math.floor(this.frame / 18)
            }
        }


        this.setAnimation = (newMinFrame, newMaxFrame) => {
            this.minFrame = newMinFrame;
            this.maxFrame = newMaxFrame;
            this.frame = this.minFrame;
        }

    }

    const mandrake = new Mandrake(canvas.width, canvas.height)



    function animate() {
        mandrake.draw(c)
        mandrake.update()
        requestAnimationFrame(animate)

    }

    animate()



    document.getElementById('all').addEventListener('click', () => {

        mandrake.setAnimation(0, 355)
    })

    document.getElementById('grow').addEventListener('click', () => {

        mandrake.setAnimation(0, 75)
    })
    document.getElementById('wink').addEventListener('click', () => {

        mandrake.setAnimation(76, 112)
    })
    document.getElementById('float').addEventListener('click', () => {

        mandrake.setAnimation(113, 262)
    })
    document.getElementById('hide').addEventListener('click', () => {

        mandrake.setAnimation(263, 355)
    })


})





