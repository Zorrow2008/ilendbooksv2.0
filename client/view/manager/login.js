Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=emailAddress]').val();
        var password = $('[name=password]').val();
         Meteor.loginWithPassword(email, password, function(){
         	if (Meteor.user()) {
         	console.log("You initiated login process.");
         	Router.go('/')
         }else{
         	Bert.alert( 'Invalid credentials.', 'danger' );
         }
         });
         
	}
})