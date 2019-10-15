
class securityCore {
    constructor() {
        this.logged = false;
        this.userName = '';

    }

    logIn(username , pass) {
        this.userName = username;
        if (pass === 'admin') {
            localStorage.setItem('user','jose');
            this.logged = true;
        } else alert('Wrong pass!!!');
    }

    logOut(){
        this.logged = false;
        localStorage.clear();  
    }

    isLogged() {
        return this.logged;
    }

     get loggedUserName(){
        return this.userName; 
     }

}


exports.securityCore = securityCore;