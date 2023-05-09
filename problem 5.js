class Pribor
{
    constructor(size)
    {
        this.ison = false;
        this.size = size;
    }

    getIson()
    {
        console.log(this.ison);
    }

    setIson(swith)
    {
        this.ison = swith
    }

    getSize()
    {
        console.log(this.size);
    }

}



class Lamp extends Pribor
{
    constructor(size, color)
    {
        super(size);
        this.color = color;

    }

    getColor()
    {
        console.log(this.color);
    }
}

class PC extends Pribor
{
    constructor(size, frequecy)
    {
        super(size);
        this.frequecy = frequecy;
    }

    getFrequecy()
    {
        console.log(this.frequecy);
    }
}



let prib = new Pribor(10)
prib.getSize();
prib.getIson();

const lampa1 = new Lamp(12, 'red');

lampa1.getColor();


const pc1 = new PC(14, 900);

pc1.getFrequecy()
pc1.getSize()