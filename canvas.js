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
        this.scale = 1;
        this.x = this.canvasWidth / 2 - this.width * this.scale / 2;
        this.y = this.canvasHeight / 2 - this.height * this.scale / 2;
        this.minFrame = 0;
        this.maxFrame = 355;
        this.frameX = 6;
        this.frameY = 8;


        this.draw = (ctx) => {
            ctx.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale)

        }
    }

    const mandrake = new Mandrake(canvas.width, canvas.height)



    function animate() {
        mandrake.draw(c)
    }

    animate()






})





