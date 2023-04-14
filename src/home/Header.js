import React from 'react';
import { View, Image } from 'react-native';
import { BORDER_WIDTH, HEADER_HEIGHT, LAYOUT_HORIZONTAL_PADDING } from '../utils';
import { theme } from '../theme';
import Space from '../shared/Space';


const Header = ({
    params,
}) => (
    <View style={{
        height: HEADER_HEIGHT,
        paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
    }}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View
                style={{
                    height: 50,
                    width: 48,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    overflow: 'hidden',
                    borderWidth: BORDER_WIDTH,
                    borderColor: theme.border
                }}
            >
                <Image
                    source={require('../../assets/images/img7.png')}
                    style={{
                        position: 'absolute',
                        right: -2,
                        top: 1,
                        height: 50,
                        width: 45.5,
                        resizeMode: 'cover',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                    }}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    height: 40,
                    width: 40,
                    borderRadius: 99,
                    borderWidth: BORDER_WIDTH,
                    borderColor: theme.border,
                    overflow: 'hidden',
                }} >
                    <View
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            backgroundColor: '#FFDFAF',
                            right: -2,
                            top: 1,
                            borderRadius: 99,
                        }}
                    />
                    <Image
                        source={require('../../assets/icons/search.png')}
                        style={{
                            position: 'absolute',

                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover',
                            borderRadius: 99,
                        }}
                    />

                </View>
                <Space horizontal size={8} />
                <View style={{
                    height: 40,
                    width: 40,
                    borderRadius: 99,
                    borderWidth: BORDER_WIDTH,
                    borderColor: theme.border,
                    overflow: 'hidden',
                }} >
                    <View
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            backgroundColor: '#FFDFAF',
                            right: -2,
                            top: 1,
                            borderRadius: 99,
                        }}
                    />
                    <Image
                        source={require('../../assets/icons/settings.png')}
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover',
                            borderRadius: 99,
                        }}
                    />

                </View>

            </View>
        </View>
    </View>
);

export default Header;
