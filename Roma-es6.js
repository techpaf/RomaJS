class Roma{
	constructor(routes = {}){
		this.routes = routes;

		this.bindEvents();
	}

	init(){
		this.checkRouting();
	}

	addRoute(path, callback){
		this.routes[path] = callback;
	}

	goTo(route){
		this.pushState(route);
		this.checkRouting();
	}

	bindEvents(){
		let self = this;

		window.onpopstate = () => {
			self.checkRouting();
		}
	}

	pushState(url){
		window.history.pushState(
			{}, 
			url,
			window.location.origin + url
		);
	}

	checkRouting(){
		let lastMatchedRoute = null;

		for(let route in this.routes){
			let r = route;
			let routeMatcher = new RegExp(r.replace(/:[^\s/]+/g, '([\\w-]+)'));
			let matching = window.location.pathname.match(routeMatcher);

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
}