/**
 * Created by michael.anderson on 3/18/16.
 */
import React, {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import style from './controlStyle';

const IncrementControl = () => <Icon name='plus' color={style.color} size={style.size} />;

export default IncrementControl;
