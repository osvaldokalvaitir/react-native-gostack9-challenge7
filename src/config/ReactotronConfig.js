import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reatotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reatotronSaga())
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
