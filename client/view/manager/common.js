Template.registerHelper('getSearchResult', function() {
	var appUUID = Session.get('appUUID');
	var title = Session.get('title');
	var author = Session.get('author');
	var result = SearchResult.findOne({$and : [{appUUID: appUUID}, {title:title}, {author: author}]});
	Session.set('SearchResult', result);
	return result;
})