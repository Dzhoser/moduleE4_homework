// функции конструкторы
// наследование, полиморфизм

function Pribor(size)
{
    this.ison = false,
    this.size = size
}

Pribor.prototype.getIson = function ()
{
    console.log(this.ison);
}

Pribor.prototype.setIson = function (swith)
{
    this.ison = swith
}

Pribor.prototype.getSize = function ()
{
    console.log(this.size);
}


function Lamp(color, size)
{
    this.color = color,
    this.size = size
}

Lamp.prototype = new Pribor()

Lamp.prototype.getColor = function ()
{
    console.log(this.color);
}

function PC(frequecy, size)
{
    this.frequecy = frequecy,
    this.size = size
}

PC.prototype = new Pribor()

PC.prototype.getFrequecy = function ()
{
    console.log(this.frequecy);
}



const prib = new Pribor(10)

prib.getIson();
prib.setIson(true);
prib.getIson();

const lampa1 = new Lamp('red', 12);

lampa1.getColor();



const pc1 = new PC(1444, 14);

pc1.getFrequecy()
pc1.getSize()