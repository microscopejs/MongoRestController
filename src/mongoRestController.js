var Controller = require('microscope-web').Controller;

var MongoRestController = Controller.extend({

	model: null,

    routes: {
        'get /': 'getAll',
        'get /:id': 'getById',
		'post /': 'create',
		'put /:id': 'update',
		'delete /:id': 'remove'
    },

    // getAll
    // GET /
    getAll: function (request, response) {
		var offset = request.query.offset || null;
		var limit = request.query.limit || null;
		this.model.find().skip(offset).limit(limit).exec(function (err, items) {
			if (err) {
				response.send(err);
			}
            response.json(items);
		});
    },

    // getById
    // GET /:id
    getById: function (request, response) {
		this.model.findById(request.params.id, function (err, item) {
            if (err) {
                response.send(err.message);
			}
            response.json(item);
        });
    },

    // Create model
    // POST /
	create: function (request, response) {
		var entity = new this.model(request.body);

		entity.save(function(err){
            if (err) {
				response.send(err);
			};
            response.json({ message: 'model created!' });
        });
	},

    // Update model
    // PUT /:id
	update: function (request, response) {
		this.model.findOneAndUpdate({ _id: request.params.id }, request.body, function(err, article) {
            if (err) {
				response.send(err);
			};
            response.json({ message: 'model updated !' });
		});
	},

    // Delete model
    // DELETE /:id
	remove: function (request, response) {
		this.model.remove({ _id: request.params.id  }, function (err) {
            if (err) {
				response.send(err);
			};
			response.json({ message: 'model removed!' });
		});
	}
});

module.exports = MongoRestController;