import React from 'react'
import AddEntry from './components/AddEntry'
import { View, Text, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { connect } from 'react-redux'
import { addEntry } from './actions'

export default class App extends React.Component {
  state = {
    value: 0
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <AddEntry/>
      </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
})


/*
<Text>
          value: {this.state.value}
        </Text>  

 <Slider
          minimumValue={0}
          maximumValue={50}
          step={1}
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />

*/