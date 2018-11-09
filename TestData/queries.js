var queries = function(){

    this.q1 = `select firstname,lastname,email from users where email='efewtrell8c@craigslist.org'`;

    this.q2 = `select email, firstname, lastname, users.role, campus.location, batch_number, team_id, team.name from users inner join team on users.team_id=team.id inner join campus 
    on users.campus_id = campus.id
    where email='efewtrell8c@craigslist.org';`;

}

module.exports = new queries();