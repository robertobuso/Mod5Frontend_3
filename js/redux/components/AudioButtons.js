import { connect } from 'react-redux'

import React, { Component } from 'react';

import { chooseAudio } from '../actions'

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';

class AudioButtons extends Component {

  render() {
    return (
      <View style={localStyles.buttonInner}>
        <View style={localStyles.container}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => this.props.chooseAudio('audio')
            }
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>audio</Text>
          </TouchableHighlight>
          {' '}
          <TouchableHighlight style={localStyles.buttons}
            onPress={() => this.props.chooseAudio('titles')}
            underlayColor={'#68a0ff'} >
            <Text style={localStyles.buttonText}>titles</Text>
          </TouchableHighlight>
          {' '}
          <TouchableHighlight style={localStyles.buttons}
            onPress={(event) => this.props.chooseAudio('both')}
            underlayColor={'#68a0ff'}>
            <Text style={localStyles.buttonText}>both</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    backgroundColor: "black"
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
    marginTop: 300
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 35
  },
  flowerText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#FF0000',
    textAlign:'center',
    fontSize : 35
  },
  buttonInner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
    marginTop: 50
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});
const mapStateToProps = (state) => {
  return state
}

module.exports =  connect(mapStateToProps, { chooseAudio } )(AudioButtons)