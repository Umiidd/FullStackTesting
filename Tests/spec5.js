//Pages
var SignIn        = require("../Pages/SignIn.js");
//var testData    = require("../TestData/data.json");

//DB Connection
var pgp         = require('pg-promise')(/*options*/);
var queries        = require("../TestData/queries.js");
var connectionString= require("../TestData/dbConnection.js")

describe('Login with DB Connection', () => {
    

    var db = pgp(connectionString);
    var arr=[];
    var username = '';
    var pass = '';

    it('Test Case 3- Login to the Website with DB Connection', () => {
        
        //Fetch the data from database

        db.any(queries.q1)
        .then(function(result){
            //console.log(result.length);
            username = result[0].email;
            //console.log(username);
            pass = result[0].firstname.toLowerCase()+result[0].lastname.toLowerCase();
            //console.log(pass);

        }).catch(function(error){
            console.log(error);
        }).then(function(){
            //All UI automation Code

            browser.get("https://cybertek-reservation-qa5.herokuapp.com/");
            SignIn.Email.sendKeys(username);
            SignIn.Password.sendKeys(pass);
            SignIn.Sbutton.click();
            browser.sleep(2000);
            browser.sleep(2000);
            SignIn.my.click();
            SignIn.self.click();
            browser.getCurrentUrl().then(function(siteUrl){
                console.log(siteUrl) 
            })               
            expect(SignIn.name.isDisplayed()).toBe(true);
            expect(SignIn.name.getText()).toEqual('James May');
            browser.sleep(2000);
            expect(SignIn.role.isDisplayed()).toBe(true);
            expect(SignIn.role.getText()).toEqual('student-team-member')
            browser.sleep(2000);
            expect(SignIn.team.isDisplayed()).toBe(true);
            expect(SignIn.team.getText()).toEqual('HighTech')
            browser.sleep(2000);
            expect(SignIn.batch.isDisplayed()).toBe(true);
            expect(SignIn.batch.getText()).toEqual('#7')
            browser.sleep(2000);
            expect(SignIn.campus.isDisplayed()).toBe(true);
            expect(SignIn.campus.getText()).toEqual('VA')
            browser.sleep(2000);
            expect(SignIn.bb.isDisplayed()).toBe(true);
            expect(SignIn.darks.getText()).toEqual('dark-side')
            browser.sleep(2000);
            SignIn.bb.click()
            expect(SignIn.darks.getText()).toEqual('light-side')


        })
        
        
        
        
        
        
        
        
        
        //Pre-test trials
        //Show all the users

        // db.any(`select * from users`)
        //     .then(function(result){
        //         arr=result;
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })
        //     .then(function(){
        //         //All our automation code will be here
        //         console.log(arr);
        //     })

        // Show Email, Firstname, Lastname,Role and Team Name   

        
    // db.any(`SELECT firstname,lastname, email, role, name
    // FROM users inner join team
    // on users.team_id= team.id`)
    //         .then(function(result){
    //             arr=result;
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         })
    //         .then(function(){
    //             //All our automation code will be here
    //             console.log(arr);
    //         })


    });



});