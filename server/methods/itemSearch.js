var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "ilendbooks-20",
  awsSecret: "Nfvvh+IlaUjiiTCjyZRClemVn+8X1tjagXXR/Hk7",
  awsTag: "AKIAJM537YQDVUA3ENVQ"
});

Meteor.methods({
  	itemSearch(title, author) {
  		console.log("title:" + title);
  		console.log("author:" + author);
		client.itemSearch({
		  	title: title,
		  	author: author,
		  	searchIndex: 'Books',		 	
		  	responseGroup: 'ItemAttributes,Offers,Images,Small'
		}).then(function(results){
		  console.log(results);
		}).catch(function(err){
		  console.log(err);
	   	});
  	}
});