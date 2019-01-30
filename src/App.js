import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import firebase from 'firebase';
import reducers from './reducers';
import { Header, LibraryList } from './Components';

const App = () => (
  // Provider is called and creates a new store with the reducers
  <Provider store={createStore(reducers)}>
    <View>
      <Header headerText="Tech Stack" />
      <Text>Hello</Text>
      <LibraryList />
    </View>
  </Provider>
);

export default App;
