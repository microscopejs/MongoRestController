import MongoRestController from '../../src/mongoRestController';
import {Model} from '../../src/decorators';
import Article from '../models/Article';

@Model(Article)
export default class ArticleController extends MongoRestController {
	get baseUrl(){
		return '/api/articles'
	}
}