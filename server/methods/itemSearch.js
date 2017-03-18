var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "AKIAJM537YQDVUA3ENVQ", 
  awsSecret: "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",
  awsTag: "ilendbooks-20"
});

Meteor.methods({
  	itemSearch(appUUID,title, author) {
  		console.log("appUUID: " + appUUID);
  		console.log("title:" + title);
  		console.log("author:" + author);
  		var result = {};
  		result.search = {
  			appUUID: appUUID,
  			title: title,
  			author: author
  		}
		client.itemSearch({
		  	title: title,
		  	author: author,
		  	searchIndex: 'Books',		 	
		  	responseGroup: 'ItemAttributes, Images'
		}).then(function(results){
		   console.log('Stringified response object' + JSON.stringify(results, null, 4));
		   result.results = results;
		   for(key in result.results) {
		   		delete result.results[key].ItemLinks;
		   		for(smallImageKey in result.results[key].SmallImage) {
		   			delete result.results[key].SmallImage[smallImageKey].Height;
		   			delete result.results[key].SmallImage[smallImageKey].Width;
		   		}
		   
		     	for(mediumImageKey in result.results[key].MediumImage) {
		     		delete result.results[key].MediumImage[mediumImageKey].Height;
		     		delete result.results[key].MediumImage[mediumImageKey].Width;
		     	}
		    	for(largeImageKey in result.results[key].LargeImage) {
		     		delete result.results[key].LargeImage[largeImageKey].Height;
		     		delete result.results[key].LargeImage[largeImageKey].Width;
		     	}
		     	delete result.results[key].ImageSets;
		     	for(itemAttributesKey in result.results[key].ItemAttributes) {
		     		delete result.results[key].ItemAttributes[itemAttributesKey].ItemDimensions;
		     		delete result.results[key].ItemAttributes[itemAttributesKey].PackageDimensions;
		     	}
		   }

		   var stringifiedResults = JSON.stringify(result, null, 4);
		   // var emailResult = Email.send({
		   // 		to: "yokesh98@gmail.com",
		   // 		from: "admin@ilendbooks.com",
		   // 		subject: "itemSearch - result",
		   // 		text: stringifiedResults
		   // });
		   // Meteor.call('sendEmail',
     //        'yokesh98@gmail.com',
     //        'admin@ilendbooks.com',
     //        'itemSearch-results',
     //        stringifiedResults);
		   // console.log(appUUID + ": email sent");
		   var upsertResult = SearchResult.upsert( {
		   		appUUID: appUUID,
		   		title: title,
		   		author: author,
		   	},
		   	{
		   		$set: {result: result}
		   	}
		   );
		   for(upsertResultKey in upsertResult) {
    			console.log(appUUID + ':upsertResult='+ upsertResult[upsertResultKey]);
    		}
		}).catch(function(err){
		  console.log(err);
		  console.log('Stringified error object' + JSON.stringify(err, null, 4));
		  		    SearchResult.upsert({
			    	appUUID: appUUID,
			    	title: title,
			  	    author: author,
			    },    
			    { 
			    	$set: {result: result }
	    		}
    		);
	   	});
 	
  	}
});