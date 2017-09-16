class Greeting {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    throw new Error('I don\'t know how to speak!')
  }
}

// Add your new classes here
export class English extends Greeting {
  sayHello() {
    return 'Hello Chris';
  }
}

export class French extends Greeting {
  sayHello() {
    return 'Bonjour Chris';
  }
}

export class Spanish extends Greeting {
  sayHello() {
    return 'Hola Chris';
  }
}
