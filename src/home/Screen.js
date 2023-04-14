import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import Header from './Header';
import TopTabs from './TopTabs';
import QuestionSection from './QuestionSection';
import MostPopular from './MostPopular';
import Space from '../shared/Space';
import { SCR_HEIGHT } from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import CardList from './CardList';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { groupSavings } from '../repo/data';
import Text from '../shared/Text';
import ScaleAnimation from '../shared/ScaleAnimation';

const gradientColors = [
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0.0)',
    'rgba(0,0,0,0.57)',
    'rgba(0,0,0,0.78)'
];

const Home = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const opacity = useSharedValue(0);

    onCardAnimationStart = () => {
        setShowOverlay(true);
        opacity.value = withTiming(1, { easing: Easing.inOut(Easing.ease) });
    };

    onCardAnimationEnd = () => {
        opacity.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
        setTimeout(() => {
            setShowOverlay(false);
        }, 300);
    };

    const bottomOverlayStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    const bottomOverlayDefaultStyle = {
        ...StyleSheet.absoluteFillObject,
        top: SCR_HEIGHT * (2 / 3),
        zIndex: 1
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>

            <ScaleAnimation>
                <Header />
            </ScaleAnimation>

            <ScrollView>
                <ScaleAnimation>
                    <QuestionSection />
                </ScaleAnimation>

                <ScaleAnimation>
                    <TopTabs />
                </ScaleAnimation>

                <Space size={14} />

                <View style={{
                    zIndex: 3
                }}>
                    <CardList
                        {...{ groupSavings }}
                        onAnimationStart={onCardAnimationStart}
                        onAnimationEnd={onCardAnimationEnd}
                    />
                </View>

                <Space size={35} />

                <ScaleAnimation>
                    <MostPopular />
                </ScaleAnimation>
            </ScrollView>


            {showOverlay && (
                <Animated.View style={[bottomOverlayDefaultStyle, bottomOverlayStyle]}>

                    <LinearGradient
                        colors={gradientColors}
                        style={{
                            height: '100%',
                            justifyContent: 'flex-end',
                            paddingHorizontal: 20,
                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Arrow
                                title='Skip'
                                icon={require('../../assets/icons/arrow-left.png')}
                            />
                            <Arrow
                                title='Add'
                                icon={require('../../assets/icons/arrow-right.png')}
                            />
                        </View>
                    </LinearGradient>
                </Animated.View>
            )}

        </View>
    );
};

const Arrow = ({
    title,
    icon,
}) => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Image
                source={icon}
                style={{
                    width: 60,
                    height: 60,
                    marginBottom: -12
                }}
            />
            <Text style={{
                fontSize: 16,
                color: '#fff',
                paddingBottom: 10,
                fontWeight: '600'
            }}>{title}</Text>
        </View>
    );
};

export default Home;
