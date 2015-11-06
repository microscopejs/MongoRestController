import MongoRestController from '../../src/mongoRestController';
import Article from '../models/Article';

export default class ArticleController extends MongoRestController {
	get baseUrl(){
		return '/api/articles'
	}
	
	get model(){
		return Article;
	}
}