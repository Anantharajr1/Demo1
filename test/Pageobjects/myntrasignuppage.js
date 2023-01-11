const browserlaunchpage = require('./browserlaunchpage');

class myntrasignuppage extends browserlaunchpage{



   

    get searchInput(){

        return $("//input[@type='tel']");

    }

    get continueBtn(){

        return $("//div[@class='submitBottomOption']");



    }

   

   open(){

    return super.open(`https://www.myntra.com/`);

 }

}

module.exports = new myntrasignuppage();