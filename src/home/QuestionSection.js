import React from 'react';
import { View } from 'react-native';
import Text from '../shared/Text';
import { theme } from '../theme';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';

const CONTAINER_HEIGHT = 140;

const QuestionSection = ({
    params,
}) => (
    <View style={{
        height: CONTAINER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
        paddingVertical: 20,
    }}>
        <Text style={{
            fontSize: 35,
            fontWeight: '400',
            color: theme.primary
        }}>
            What would you like today?
        </Text>
    </View>
);

export default QuestionSection;
