Template.user.events({
	'submit form': function(event) {
		event.preventDefault();
	    console.log("Form submitted");
    	console.log(event.type);
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var studentID = event.target.studentID.value;
		var grade = event.target.grade.value;
		console.log(firstName);
		console.log(lastName);
		
		console.log(grade);
		UserProfile.insert({
			userID: Meteor.userId(),
			fName: firstName,
			lName: lastName,
			studentID: studentID,
			grade: grade
		})
		// event.target.firstName.value = "";
		// event.target.lastName.value = "";
		// event.target.age.value = "";
		// event.target.grade.value = "";
		Router.go('/loggedIn');
	}
})


