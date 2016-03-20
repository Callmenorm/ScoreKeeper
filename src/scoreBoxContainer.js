/*
 * Created by michael.anderson on 3/20/16.
 */
import React, {
    StyleSheet,
    View
} from 'react-native';

import ScoreBox from './scoreBox';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

const ScoreBoxContainer = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <ScoreBox />
                <ScoreBox />
                <ScoreBox />
            </View>
        );
    }
});

export default ScoreBoxContainer;
