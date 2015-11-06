# MongoRestController
mongoDB (mongoose) REST Controller for microscope-web

Dependencies
============

* microscope-web
* mongoose

How to use ?
------------

		npm i mongo-rest-controller --save

** Create some model **

``` js
import mongoose from 'mongoose';

var Article = mongoose.Schema({
    title: String,
	description: String
});

export default mongoose.model('Article', Article);
```

** Register your models in dbContext & connect to mongoDB as usual : **

``` js
import mongoose from 'mongoose';
import Article from './Article';

mongoose.connect('mongodb://mcsp:microscope@ds048878.mongolab.com:48878/microscope');
mongoose.connection.on('error', () => console.log('mongoDB connection error'));
mongoose.connection.once('open', () => console.log('mongoDB connection open'));
```

** Create controller extends MongoRestController **

``` js
import MongoRestController from 'mongo-rest-controller';
import Article from '../models/Article';

export default class ArticleController extends MongoRestController {
	get baseUrl(){
		return '/api/articles'
	}
	
	get model(){
		return Article;
	}
}
```

You're done !!