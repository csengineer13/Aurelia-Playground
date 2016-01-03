export class App {

	configureRouter(config, router){
		config.title = 'Aurelia';
		config.map([
			// route: 		match patterns ('welcome' or 'welcome/:id')
			// name:  		used in code when generating routes
			// moduleId: 	path to component to render
			// title:		used to generate document title
			// nav:			"in navigation model", true or a number (for order)
			{ route: ['', 'welcome'], 	name: 'welcome', 	moduleId: './welcome', 	nav: true, title: 'Welcome' },
			{ route: 'users', 			name: 'users', 		moduleId: './users', 	nav: true, title: 'Github Users' }	
		]);
	
		this.router = router;
	}
}