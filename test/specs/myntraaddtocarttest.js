describe('User should able to launch the myntra application url',() => {

    it('User should able to open the mynta url', async() =>{
    
        await myntraloginpage.open()
    
        await browser.maximizeWindow()
    
        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining('myntra')
    
    })
})