var SignIn=require('../Pages/SignIn.js');
var testData=require('../TestData/data.json')
describe('reservation', () => {
    it('should login on that website', async () => {
        browser.get('https://cybertek-reservation-qa.herokuapp.com/')
        SignIn.Email.sendKeys(testData.email)
        SignIn.Password.sendKeys(testData.password)
        SignIn.Sbutton.click() 
        browser.sleep(2000)
        expect(SignIn.img.isDisplayed()).toBe(true);
        expect(SignIn.title.getText()).toEqual('VA');
        
        for (var i=0; i<=3; i++){
            browser.get('https://cybertek-reservation-qa.herokuapp.com/map')
            browser.sleep(2000)
            var pageUrl=[SignIn.denali,SignIn.kilimanjaro,SignIn.meru,SignIn.halfDome]
            pageUrl[i].click();
            browser.getCurrentUrl().then(function(siteUrl){
                console.log(siteUrl)
            });
            
        }
    })
});