Router.configure({
layoutTemplate: 'mainLayout'
// loadingTemplate: 'loading',
// waitOn: function() { return  }
});

Router.map(function() {
	

	this.route('home', {
		path:'/',
		fastRender: true
	});

	this.route('login', {
		
		onBeforeAction: function() {
        var routeName = this.route.name;

        if (_.include(['/login'], routeName))
        return;

        if (! Meteor.userId()) {

            this.render('/login');
        }   
        else {
        		this.render('home');
             }
        }
	});

	this.route('register', {

		onBeforeAction: function() {
        var routeName = this.route.name;

        if (_.include(['/register'], routeName))
        return;

        if (! Meteor.userId()) {

            this.render('/register');
        }   
        else {
        		this.render('home');
             }
        }
	});

	this.route('Welcome', {

		onBeforeAction: function() {

			if (Meteor.userId()) {
				this.render('/welcome');
			} else {
				this.render('home');
			} 
		}			
	});

});

 // Router.route('/', function(){
	// 	this.render('home');	
	// });
 //  Router.route('/login', function(){
	// 	this.render('login');	
	// });