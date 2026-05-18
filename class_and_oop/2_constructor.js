function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    return this;
}

const userOne = new user("sarthak", "sarthak@example.com", "password123");  
// new keyword is used to create an instance of the user function, which is treated as a constructor. It initializes the properties of the user object with the provided values and returns the newly created object.

const userTwo = new user("kalash", "kalash@example.com", "password123");  

console.log(userTwo);
//console.log(userOne);

console.log(userOne instanceof user);
// The instanceof operator is used to check if userOne is an instance of the user constructor function. It returns true if userOne was created using the user constructor, and false otherwise. In this case, it will return true since userOne was created using the user constructor.

