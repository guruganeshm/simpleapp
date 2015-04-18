Template.texts.helpers({
 texts: function(){
	return Texts.find();
},

});

Template.texts.events({
	'submit #saveText': function (e, t) {
		e.preventDefault();
		var saveText = $(e.currentTarget),
			title = saveText.find('#inputTitle').val(),
			desc = saveText.find('#inputDesc').val(),
			authorName = Meteor.user().username;
		
		if ( isNotEmpty(title) && isNotEmpty(desc)) {

		Texts.insert({ title: title, desc: desc, author: authorName });

         $('#saveText')[0].reset();
		} else { 
				console.log("Saving Text Failed...");
		}
	},

	'click #delete' : function  () {
		if ( Meteor.user().username == this.author ){
		Texts.remove(this._id);
	} else {
		alert('You cannot delete other users post');
	}
}
});

