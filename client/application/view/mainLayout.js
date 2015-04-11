Template.mainLayout.events({
	'click #signOut' : function(e, t){

  	Meteor.logout(function() {
  		console.log('Come again!');
	});
  		// Session.set("collapse" , "collapse");
	}
});	