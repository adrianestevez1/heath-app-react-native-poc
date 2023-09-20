import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Circle, CircleProps, Svg } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

interface RingProgressProps {
    radius?: number;
    stroke?: number;
    progress: number;
}

const color = '#EE0F55';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({radius = 100, stroke=35, progress}: RingProgressProps) => {
    const styles = StyleSheet.create({
        valueContainer: {
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
        },
      });

    const innerRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0.4);

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference],
    }));

    useEffect(() => {
        fill.value = withTiming(progress, {duration: 1500});
    }, [progress]);

    const defaultCircleProps: CircleProps = {
        cx: radius,
        cy: radius,
        r: innerRadius,
        stroke: color,
        strokeWidth: stroke,
    };

    return (
        <View style={styles.valueContainer}>
            <Svg style={{position: 'absolute', zIndex: 6}}>
                <Circle
                    {...defaultCircleProps}
                    opacity={0.2}
                />
            </Svg>
            <Svg>
                <AnimatedCircle
                    {...defaultCircleProps}
                    animatedProps={animatedProps}
                    strokeLinecap='round'
                    rotation='-90'
                    originX={radius}
                    originY={radius}
                />
            </Svg>
            
        </View>
    );
};



export default RingProgress;