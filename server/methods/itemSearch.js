var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "AKIAJM537YQDVUA3ENVQ", 
  awsSecret: "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",
  awsTag: "ilendbooks-20"
});

Meteor.methods({
  	itemSearch(title, author) {
  		console.log("title:" + title);
  		console.log("author:" + author);
		client.itemSearch({
		  	title: title,
		  	author: author,
		  	searchIndex: 'Books',		 	
		  	responseGroup: 'ItemAttributes'
		}).then(function(results){
		   //console.log("results = " + results);
		   console.log('Stringified response object' + JSON.stringify(results, null, 4));
		   var jsonObj = JSON.stringify(results, null, 4);
		}).catch(function(err){
		  console.log(err);
		  console.log('Stringified error object' + JSON.stringify(err, null, 4));
	   	});
	   	
	   
	   	
  	}
});