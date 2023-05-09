 ////////////////// task 1
function ref(object)
{
    for (let prop in object)
    {
        if (object.hasOwnProperty(prop))
        {
            console.log(prop);
        }
    }
}

const azim =
{
    a: "Furm",
    b: "azor"
}

const zebra = Object.create(azim);

zebra.velos = 11;
zebra.size = 15;


ref(zebra);

///////////////////////////// task 2

function test_obj(object, str)
{
    for (let key in object)
    {
        if (str == key)
        {
            return true;
        }
        else
        {
            return false;
        }

    }
}

const ob1 =
{
    az1 : 12,
    bz1 : 24
}

console.log(test_obj(ob1, "az2"));

////////////////////////////////////// task 3


function createEmptyObject() {
    return Object.create(null);
}