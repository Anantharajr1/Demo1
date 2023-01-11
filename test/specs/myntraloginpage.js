const myntraloginpage = require('../pageobjects/myntraloginpage')

const myntrasignuppage = require('../pageobjects/myntrasignuppage')



describe('should open the url',() => {

it('should open the main url', async() =>{

    await myntraloginpage.open()

    await browser.maximizeWindow()

    await browser.pause(5000)

})

it('should mouse the profile and select the signup', async() => {

    await myntraloginpage.mouseAction.click()

     await myntraloginpage.moveClick.click()

     await browser.pause(3000)

     await myntrasignuppage.searchInput.addValue('9095634100')

     await browser.pause(5000)

     await myntrasignuppage.continueBtn.click()



     //await browser.pause(5000)

     //await myntrasignuppage.acceptAlert()

   

})





})
