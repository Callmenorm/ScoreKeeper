/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import IncrementControl from './src/incrementControl';
import DecrementControl from './src/decrementControl';
import ScoreBoxContainer from './src/scoreBoxContainer';

class ScoreKeeper extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.incrementControl}>
                    <DecrementControl />
                    <Text style={styles.welcome}>
                        10
                    </Text>
                    <IncrementControl />
                </View>
                <ScoreBoxContainer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    incrementControl: {
        borderWidth: 1,
        backgroundColor: '#1E90FF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('ScoreKeeper', () => ScoreKeeper);
