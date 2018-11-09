var SignIn=function(){

    
    this.Email=$('body > app-root > div > app-sign-in-page > div > div > div > div > form > div:nth-child(1) > div.field-body > div > p > input')
    this.Password=$('body > app-root > div > app-sign-in-page > div > div > div > div > form > div:nth-child(2) > div.field-body > div > p > input')
    this.Sbutton=$('body > app-root > div > app-sign-in-page > div > div > div > div > form > div:nth-child(3) > div.field-body > div > div > button')
    this.img=$('body > app-root > div > app-map-page > app-hero > section > div > nav > div.navbar-brand > a > img')
    this.kilimanjaro=element(by.id('room-121'))
    this.halfDome=$('#room-122')
    this.denali=$('#room-123')
    this.meru=$('#room-124')
    this.title=$('.title');
    this.my=$('body > app-root > div > app-map-page > app-hero > section > div > nav > div.navbar-menu.is-transparent > div > div:nth-child(4) > a')
    this.self=$('body > app-root > div > app-map-page > app-hero > section > div > nav > div.navbar-menu.is-transparent > div > div:nth-child(4) > div > a:nth-child(1)')
    this.name=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(1) > div.media-content > p.title.is-6')
    this.role=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(2) > div.media-content > p.title.is-6')
    this.team=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(3) > div.media-content > p.title.is-6')
    this.batch=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(4) > div.media-content > p.title.is-6')
    this.campus=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(5) > div.media-content > p.title.is-6')
    this.bb=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(6) > div.media-right > figure > span > fa > i')
    this.darks=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(6) > div.media-content > p.title.is-6')
    this.lights=$('body > app-root > div > app-me-page > div > div > div > div.column.is-12-tablet.is-4-desktop > app-user-card > div > div > div:nth-child(6) > div.media-content > p.title.is-6')


};
module.exports=new SignIn();