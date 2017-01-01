Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=emailAddress]').val();
        var password = $('[name=password]').val();
         Meteor.loginWithPassword(email, password, function(){
         	console.log("You initiated login process.");
         });
         Router.go('/')
	}
})