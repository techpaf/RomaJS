var Roma = function(routes){
	this.routes = routes || {};

	this.bindEvents();
}

Roma.prototype.init = function(){
	this.checkRouting();
}

Roma.prototype.addRoute = function(path, callback){
	this.routes[path] = callback;
}

Roma.prototype.goTo = function(route){
	this.pushState(route);
	this.checkRouting();
}

Roma.prototype.bindEvents = function(){
	var self = this;
	
	window.onpopstate = function(){
		self.checkRouting();
	}
}

Roma.prototype.pushState = function(url){
	window.history.pushState(
		{}, 
		url,
		window.location.origin + url
	);
}

Roma.prototype.checkRouting = function(){
	var lastMatchedRoute = null;

	for(var route in this.routes){
		var r = route;
		var routeMatcher = new RegExp(r.replace(/:[^\s/]+/g, '([\\w-]+)'));
		var matching = window.location.pathname.match(routeMatcher);

		if( matching != null){
			lastMatchedRoute = matching;
			lastMatchedRoute.path = route;
		}
	}
	console.log(lastMatchedRoute)

	if(lastMatchedRoute){
		this.routes[lastMatchedRoute.path]({
			id: lastMatchedRoute[1]
		});
	}
}