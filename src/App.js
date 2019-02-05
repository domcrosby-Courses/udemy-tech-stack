import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import firebase from 'firebase';
import reducers from './reducers';
import { Header, LibraryList } from './Components';

const App = () => (
  // Provider is called and creates a new store with the reducers - each container now has access to 1 store
  // If mltiple stores are needed you need to state in the container component
  <Provider store={createStore(reducers)}>
    <View style={{ flex: 1 }}>
      <Header headerText="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
);

export default App;
