// Decorator - anything that is not part of function 
// class, method, property can be decorated

function logger(target, name, descriptor) {
    console.log(target);
    console.log(name);
    console.log("inside logger");
    return descriptor
}

class Animal {
    name: string  = 'dog';
    
    @logger
    walk() {
        console.log(this.name + " is walking");
    }
}

const dog = new Animal();
dog.walk();