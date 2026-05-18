const user = {
    username: "sarthak",
    logincount: 25,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Username: ${this.username}, Login Count: ${this.logincount}, Signed In: ${this.signedIn}`);
    }
}

user.getUserDetails();