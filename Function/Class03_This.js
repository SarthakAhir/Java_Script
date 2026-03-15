const user = {
    username: 'sarthak',
    price: 100,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
user.username = 'sarthak Ahir';
user.welcomeMessage();