class Dog {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    voice() {
        alert('Гав!! Рррр!');
    }

    eat(calories) {
        this.weight = this.weight + calories/10000;
    }
}

var ourDog = new Dog('Бублик', 5);

ourDog.voice();
ourDog.eat(3000);

alert("Нашого собаку звуть " + ourDog.name);
alert("Він важить " + ourDog.weight + " кг.");