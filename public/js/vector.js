/**
 * Created by jkarp on 6/13/2017.
 */
class Vector
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    getMag()
    {
        this.lastCalMag = Math.sqrt(this.x*this.x+this.y*this.y);
        return this.lastCalMag;
    }
    setMag(length)
    {
        this.lastCalMag = Math.sqrt(this.x*this.x+this.y*this.y);
        this.x = (this.x*length) / this.lastCalMag;
        this.y = (this.y*length) / this.lastCalMag;
    }
    add(vector)
    {
        this.x = this.x + vector.x;
        this.y = this.y + vector.y;
    }
    sub(vector)
    {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    div(num)
    {
        this.x = this.x/num;
        this.y = this.y/num;
    }
    mult(num)
    {
        this.x *= num;
        this.y *= num;
    }
    calRotation()
    {
        this.lastCalAngel = Math.atan2(this.x,this.y);
        return this.lastCalAngel
    }
    setRotation(angel)
    {
        if(this.lastCalMag)
        {
            this.x = this.lastCalMag*Math.cos(angel);
            this.y = this.lastCalMag*Math.sin(angel);
        }
        else
        {
            this.getMag();
            this.setRotation(angel);
        }
    }

}
/*
    Vector fromAngMag
    mag: the length of the vector
    ang: the direction of the vector in radians
 */
Vector.fromAngMag = function(mag,ang)
{
    let x = mag*Math.cos(ang);
    let y = mag*Math.sin(ang);
    return new Vector(x,y);
};
