const Animal = (name,type) => {
    this.name = name;
    this.type = type;
    this.age = 0;
    }
    Animal.prototype.birthday = function () {
        this.age++;
    }
    const leo = new Animal ('leo', 'lion');