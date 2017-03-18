Template.bookSearch.events({
  	'submit form' ( event, template ) {
    	event.preventDefault();
    	var title = event.target.title.value;
		var author = event.target.author.value;
		console.log("title = " + title);
		console.log("author = " + author);
		var appUUID = Session.get('appUUID');
     Session.setAuth("title", title);
    Session.setAuth("author", author);

		 Meteor.call( 'itemSearch', appUUID, title, author, ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'itemSearch was called', 'success' );
            Session.set('SearchResult', response)
            Router.go('searchResult');
          }
        });  
	}	
})

 

