const myntraloginpage = require('../pageobjects/myntraloginpage')

describe('User should able to launch the myntra application url and verifying the add to cart functionality',() => {

    it('User should able to open the mynta url', async() =>{
    
        await myntraloginpage.open()
    
        await browser.maximizeWindow()
    
        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining('myntra')
    
    })

    
})