var mongoose = require('mongoose');

var TemplateSchema = new mongoose.Schema ({
	title: {
		type: String,
		required: true,
		minlength:1,
		maxlength:100
	},
	description: {
		type: String,
		minlength:1,
		maxlength:300
	},
	documents: [{
		documentUrl: {
			type: String,
			required: true
		}
	}],
	tags: [{
		type: String,
		required: true,
		minlength:1,
		maxlength:100
	}],
	date: {
		type: Date,
		default: Date.now
	},
	version: {
		type: Number,
		default: 1,
		min: 1
	},
	comments: [{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		text: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			default: Date.now
		}
	}],
	preferences: [{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		type: {
			type: Boolean,
			required: true
		},
		date: {
			type: Date,
			default: Date.now
		}
	}],
	author: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	valid: {
		type: Boolean,
		default: false
	},
	father: {
		type: mongoose.Schema.Types.ObjectId, 
    ref: 'Template'
	}
});

module.exports = mongoose.model('Template', TemplateSchema);
