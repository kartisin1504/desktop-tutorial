import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import {createBrowserHistory} from 'history';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {createRootReducer} from '../src/store/index';

Enzyme.configure({adapter: new Adapter()});

const sagaMiddleWare = createSagaMiddleware();
global.helperStoreHistory = createBrowserHistory();
export const mockStore = configureMockStore([thunk, sagaMiddleWare]);
global.testStore = mockStore({});
global.helperStore = createStore(
  createRootReducer(global.helperStoreHistory),
  {},
  compose(applyMiddleware(...[thunk, sagaMiddleWare]))
);
