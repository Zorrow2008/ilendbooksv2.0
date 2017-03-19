Template.navigation.events({
	'click .login': function(event){
        event.preventDefault();
        Router.go('login');
    },

    // 'click .signup': function(event){
    // 	event.preventDefault();
    // 	Router.go('signup');
    // },

    'click .bookSearch': function(event){
    	event.preventDefault();
    	Router.go('bookSearch');
    },

    'click .aboutUs': function(event) {
        event.preventDefault();
        Router.go('aboutUs');
    }



})
