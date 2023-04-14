import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../shared/Text';
import { mostPopular } from '../repo/data';
import Space from '../shared/Space';
import { LAYOUT_HORIZONTAL_PADDING, BORDER_RADIUS, BORDER_WIDTH } from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../theme';

export const gradientColors = [
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0.47)',
    'rgba(0,0,0,0.76)'
];

const renderIconAndText = (imgPath, text) => (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
    }}>
        <Image
            source={imgPath}
            style={{
                height: 20,
                width: 20,
                resizeMode: 'cover',
            }}
        />
        <Text style={{
            color: theme.tertiary,
            fontSize: 15,
            fontWeight: '600',
            color: '#fff'
        }}>
            {text}
        </Text>
    </View>
);

const MostPopular = () => {
    return (
        <View style={{
            paddingHorizontal: LAYOUT_HORIZONTAL_PADDING,
        }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: theme.primary
                }}
            >Most Popular</Text>

            <Space size={18} />

            {mostPopular.map((post, index) => (
                <View key={index} style={{
                    height: 222,
                    marginBottom: 20,
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        borderWidth: BORDER_WIDTH,
                        borderColor: theme.border,
                        borderRadius: BORDER_RADIUS + 4,
                        overflow: 'hidden',
                        padding: 3,
                    }}>
                        <Image
                            source={post.bgImg}
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'cover',
                                borderRadius: BORDER_RADIUS,
                            }}
                        />
                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 22,
                        left: 22,
                        borderWidth: BORDER_WIDTH,
                        borderColor: theme.border,
                        borderRadius: BORDER_RADIUS,
                        justifyContent: 'center',
                        paddingHorizontal: 14,
                        paddingVertical: 6,
                        backgroundColor: '#ffe252',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                        <Text style={{
                            fontSize: 13,
                            fontWeight: '500',
                        }}>Breakfast</Text>

                    </View>

                    <View style={{
                        position: 'absolute',
                        top: 22,
                        right: 22,
                        justifyContent: 'center',
                        paddingVertical: 6,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        {renderIconAndText(require('../../assets/icons/star.png'), '4.6')}
                    </View>

                    <LinearGradient colors={gradientColors} style={styles.gradientLayer} />

                    <View style={{
                        position: 'absolute',
                        bottom: 22,
                        left: 22,
                        right: 22,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#fff'
                        }}>
                            Cheese burger made
                        </Text>
                        <Space size={6} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: '#fff',
                            lineHeight: 18,
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    gradientLayer: {
        ...StyleSheet.absoluteFillObject,
        bottom: 4,
        left: 4,
        right: 4,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
    },
});

export default MostPopular;
