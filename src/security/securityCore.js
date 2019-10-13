class securityCore {
    constructor() {
        this.logged = false;
        this.userName = '';

    }

    logIn(username , pass) {
        this.userName = username;
        if (pass === 'admin') {
            this.logged = true;
        } else alert('Wrong pass!!!');
    }

    logOut(){
        this.logged = false;  
    }

    isLogged() {
        return this.logged;
    }

     get loggedUserName(){
        return this.userName; 
     }

}


exports.securityCore = securityCore;