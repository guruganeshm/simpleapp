 Meteor.publish('texts', function () {
	return Texts.find({}, {sort: {time: -1}, reactive:true});

});
