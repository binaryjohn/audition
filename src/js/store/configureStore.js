import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { persistState } from 'redux-devtools';

export default function configureStore(initialState) {

  let middleware = applyMiddleware();
  let enhancer;

  if (process.env.NODE_ENV !== 'production') {

    let middlewares = [require('redux-immutable-state-invariant')()];
    middleware = applyMiddleware(...middlewares);

    let getDebugSessionKey = function () {
      const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
      return (matches && matches.length) ? matches[1] : null;
    };

    enhancer = compose(
      middleware,
      window.devToolsExtension ?
        window.devToolsExtension() :
        require('../containers/DevTools').default.instrument(),
      persistState(getDebugSessionKey())
    );
  } else {
    enhancer = compose(middleware);
  }

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
