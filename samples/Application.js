import {HttpApplication} from 'microscope-web';
import ArticleController from './controllers/ArticleController';

export default class Application extends HttpApplication {
    get controllers(){
        return [ArticleController];
    }
}