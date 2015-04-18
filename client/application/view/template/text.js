var notify = new buzz.sound('/sound/ting.ogg');

Template.texts.helpers({
 texts: function(){
	return Texts.find({},{sort: {time: -1}, reactive:true});
},

});

Template.texts.events({
	'submit #saveText': function (e, t) {
		e.preventDefault();
		var saveText = $(e.currentTarget),
			title = saveText.find('#inputTitle').val(),
			desc = saveText.find('#inputDesc').val(),
			authorName = Meteor.user().username;
			time = new Date()
		
		if ( isNotEmpty(title) && isNotEmpty(desc)) {

		Texts.insert({ title: title, desc: desc, author: authorName, time: time });
		notify.play();
         $('#saveText')[0].reset();
		} else { 
				console.log("Saving Text Failed...");
		}
	},

	'click #delete' : function  () {
		if ( Meteor.user().username == this.author ){
		Texts.remove(this._id);
		notify.play();
	} else {
		alert('You cannot delete other users post');
	}
}
});

