

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

		var txtMsg =  { title: title, desc: desc, author: authorName, time: time };
		 Meteor.call('newText', txtMsg);
		 // notify.play();
         $('#saveText')[0].reset();
		}

		 else { 
				console.log("Saving Text Failed...");
		}
	},

	'click #delete' : function  () {
		if ( Meteor.user().username == this.author ){
		var delMsg = this._id
		Meteor.call('deleteText', delMsg);
		// notify.play();
	} else {
		alert('You cannot delete other users post');
	}
	},

	'click #Edit' : function(e, t) {
		e.preventDefault();

		var editText = $(e.currentTarget),
		title = editText.find('#editInputTitle').val(),
		desc = editText.find('#editInputDesc').val(),
		updatedAt = new Date()

		if ( isNotEmpty(title) && isNotEmpty(desc)) {

			var editTxtMsg = { title: title, desc: desc, LastUpdateAt: updatedAt};

			Meteor.call('EditText', EditTxtMsg);

			
		}  

	}
});

