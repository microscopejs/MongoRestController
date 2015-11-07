import MongoRestController from '../../src/mongoRestController';
import {Model} from '../../src/decorators';
import {decorators} from 'microscope-web';
import Article from '../models/Article';
var {url} = decorators;

@url('/api/articles')
@Model(Article)
export default class ArticleController extends MongoRestController {

}