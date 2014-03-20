function setPerson (context) {
    var _id = context.params._id;
    Session.set("person", People.findOne(_id));
}

Template.personShow.helpers({
    person: function () {
        return Session.get("person");
    }
});

Meteor.pages({
    // Page values can be an object of options, a function or a template name string

    '/': { to: 'people', as: 'root'},
    '/people': { to: 'people' },
    '/people/:_id': { to: 'personShow', before: setPerson  },
    '/add': { to: 'addPerson' },
    '/contact': { to: 'contact' },
    '*': 'notFound'
}, {

    // optional options to pass to the PageRouter

    defaults: {
        layout: 'layout'
    }



});