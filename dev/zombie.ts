/// <reference path="gameobject.ts" />

class Zombie extends GameObject {
        
    private chicken:Chicken;

    constructor(c:Chicken) {
        super("zombie", document.body);

        this.width = 67;
        this.height = 119;
        this.x = Math.random() * (window.innerWidth - 67);
        this.y = Math.random() * (window.innerHeight/2) + (window.innerHeight/2-67);
        this.speedmultiplier = Math.random() * 2;
        this.chicken = c;

    }

    public update(){
        // deze regel code geeft de zombie de snelheid waarmee hij naar de kip beweegt
        Util.setSpeed(this, this.chicken.x - this.x, this.chicken.y - this.y);

        // nu passen we de x en y positie aan met de snelheid
        this.x += this.xspeed;
        this.y += this.yspeed;

        // het gameObject tekent de zombie in het scherm
        super.update();
    }

}