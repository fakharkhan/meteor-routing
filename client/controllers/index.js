
Template.people.people = function () {
    return People.find({});
};


Template.addPerson.events({

    'click #addButton': function (event) {
        event.preventDefault();
        var personName = document.getElementById("personName"),
            personAddress = document.getElementById("personAddress");

        if (personName.value != '') {
            Meteor.call("addPerson", personName.value, personAddress.value, function (error, personId) {
                console.log('added person with Id .. ' + personId);
                window.location='/';
            });
        }
        else
            alert('Person name is required');
    }
});