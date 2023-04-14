import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { tabData } from '../repo/data';
import { LAYOUT_HORIZONTAL_PADDING } from '../utils';
import Text from '../shared/Text';

const TopTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <View style={{
            height: 50,
            width: '100%',
        }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: LAYOUT_HORIZONTAL_PADDING - 20,
                }}
            >
                {tabData.map(({ title }, index) => {

                    return (
                        <Tab
                            key={index}
                            {...{ index }}
                            {...{ title }}
                            {...{ selectedIndex }}
                            {...{ setSelectedIndex }}
                        />
                    );
                })}
            </ScrollView>


        </View>
    );
};


const Tab = ({
    index,
    title,
    selectedIndex,
    setSelectedIndex
}) => {
    const [layoutW, setLayoutW] = useState(0);

    const isSelected = selectedIndex === index;

    const style = {
        fontWeight: isSelected ? 'bold' : 'normal',
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => setSelectedIndex(index)}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                // marginRight: 1,
            }}
            // onLayout={(e) => {
            //     setLayoutW(e.nativeEvent.layout.width);
            // }}
            >
                <View>
                    <Text
                        onLayout={(e) => {
                            setLayoutW(e.nativeEvent.layout.width);
                        }}
                        style={[
                            {
                                color: 'black',
                                fontSize: 16,
                            },
                            style
                        ]}> {title}</Text >
                    {
                        isSelected && (
                            <View
                                style={{
                                    position: 'absolute',
                                    height: 13,
                                    width: layoutW,
                                    bottom: -5,
                                    left: 0,
                                    right: 0,
                                    marginLeft: 2,
                                    backgroundColor: 'rgba(255, 162, 39, .6)',
                                }}
                            />
                        )
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default TopTabs;
