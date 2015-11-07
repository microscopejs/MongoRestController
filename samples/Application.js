import {HttpApplication, decorators} from 'microscope-web';
import ArticleController from './controllers/ArticleController';
var {controllers} = decorators;

@controllers([ArticleController])
export default class Application extends HttpApplication {

}