import { observable} from 'mobx';
class appStore {

 @observable token = "123";
 @observable route = {};
}

export default new appStore();
