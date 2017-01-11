Template.bookSearch.events({
  	'submit form' ( event, template ) {
    	event.preventDefault();

    	var title = event.target.title.value;
		var author = event.target.author.value;
		console.log("title = " + title);
		console.log("author = " + author);

		Meteor.call( 'itemSearch', title, author, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'itemSearch was called', 'success' );
          }
        });
	    
	}	
})

 

