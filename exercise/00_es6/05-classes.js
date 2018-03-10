log('example -- Classes')
class Animal {
  sleep(){
    console.log('sleeping...')
  }
  walk(){
    console.log('walking')
  }
  run(){
    console.log('running')
  }
}

class Dog extends Animal{
  bark(){
    console.log('arf! arf!')
  }
}

class Doge extends Dog {
  bark(){
    console.log('wow')
  }
}

let human = new Animal()
let lucky = new Dog() 
let shobe = new Doge()
human.sleep()
human.walk()
lucky.sleep()
lucky.bark()
shobe.bark()
shobe.run()
