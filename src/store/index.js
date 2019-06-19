import { createStore } from 'redux';
import courses from './reducer/reducer';


const store = createStore(courses);

export default store;