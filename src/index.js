import React,{Fragment} from "react";
import {
  SafeAreaView,
  View
} from 'react-native';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={{ flex:0, backgroundColor: 'red' }} />
        <SafeAreaView style={{ flex:1, backgroundColor: 'gray' }}>
          <View style={{ flex: 1, backgroundColor: 'white' }} />
        </SafeAreaView>
      </Fragment>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

