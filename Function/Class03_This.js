const user = {
    username: 'sarthak',
    price: 100,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }

}

user.welcomeMessage();