

Meteor.methods({
    addPerson: function (personName, personAddress) {
        console.log('Adding Person');
        var personId = People.insert({
            name: personName,
            address: personAddress});
        return personId;
    }
});
