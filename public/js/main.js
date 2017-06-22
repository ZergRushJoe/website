/**
 * Created by jkarp on 5/30/2017.
 */
class Bubble
{
    constructor(x,y,parent)
    {
        this.offscreen = false;
        this.pos = new Vector(x,y);
        this.parent = parent;
        this.img = document.createElement('img');
        this.img.src = 'public/imgs/cubeBubble.svg';
        this.size = Math.floor(Math.random()*20)+20;
        this.img.width = this.size;
        this.img.height = this.size;
        this.img.className = 'bubble';
        this.parent.append(this.img);
        this.vel = new Vector(0,0);
        this.acc = new Vector(0,0);
    }
    moveUp()
    {
        this.acc.add(Vector.fromAngMag(1,(Math.random()*-Math.PI/3)+Math.PI/3));
        this.vel.add(this.acc);
        this.vel.add(new Vector(this.vel.x*-.9,this.vel.y*-.9));
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    check()
    {
        return true;
    }
    update()
    {
        this.moveUp();
        this.offscreen = this.check();
    }
}



let bubbles = [];






