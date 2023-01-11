const browserlaunchpage = require('./browserlaunchpage');

class myntraloginpage extends browserlaunchpage{



    get mouseAction(){

        return $("//span[normalize-space()='Profile']");

    }

    get moveClick(){

        return $("//a[normalize-space()='login / Signup']");

    }

   

   open(){

    return super.open(`https://www.myntra.com/`);

 }

}

module.exports = new myntraloginpage();

