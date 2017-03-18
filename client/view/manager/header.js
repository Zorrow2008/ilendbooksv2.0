Template.header.helpers({
	getFirstName: function() {
		console.log("Meteor.userId(): " +  Meteor.userId());
		var userProfile = UserProfile.findOne({userID: Meteor.userId()})
	    console.log("userProfile: " + userProfile);
	    console.log("userProfile.fName: " + userProfile.fName);
		return userProfile.fName;
	}

})