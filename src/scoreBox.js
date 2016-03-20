/*
 * Created by michael.anderson on 3/19/16.
 */

import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';

import IncrementControl from './incrementControl';
import DecrementControl from './decrementControl';

const styles = StyleSheet.create({
    box: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 10
    },
    text: {
        margin: 10
    }
});

const ScoreBox = React.createClass({
   render() {
       return (
           <View style={styles.box}>
               <IncrementControl />
               <Text style={styles.text}>
                   0
               </Text>
               <DecrementControl />
           </View>
       );
   }
});

export default ScoreBox;
