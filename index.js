// static = keyword that defines properties or methoss that belong to 
// a class itself rather than the objects created from that class (class owns anything static, not the objects)
class MathUtill {
    static PI = 3.14159;

    static getDiameter(radius){
        return radius *2;
    }
    static getCircumference(radus){
        return 2 * this.PI *radus;
    }


}
console.log(MathUtill.PI);
console.log(MathUtill.getDiameter(10));
console.log(MathUtill.getCircumference(10));

// another example.
 
class User{
    static userCount = 0;
    constructor(username){
        this.username = username
        User.userCount++;
    }
    static userTotal(){
        console.log(`there are ${this.userCount} user on online`);
        
    }

    sayHello(){
        console.log(`hello my name is ${this.username}`);
        
    }
}
const user1 = new User("spongebob");
const user2 = new User("patri");
const user3 = new User("sandy")
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);


console.log(User.userCount);
user1.sayHello()
user2.sayHello()
user3.sayHello()
User.userTotal()




