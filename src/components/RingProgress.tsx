import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

interface RingProgressProps {
    radius?: number;
    stroke?: number;
    progress: number;
}

const color = '#EE0F55';

const RingProgress = ({radius = 100, stroke=20, progress}: RingProgressProps) => {
    const styles = StyleSheet.create({
        valueContainer: {
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
        },
      });

      const innerRadius = radius - stroke / 2;
      const circumference = 2 * Math.PI * innerRadius;

    return (
        <View style={styles.valueContainer}>
            <Svg>
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    stroke={color}
                    strokeWidth={stroke}
                    opacity={0.2}
                />
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    stroke={color}
                    strokeWidth={stroke}
                    strokeDasharray={[circumference * progress, circumference]}
                    strokeLinecap='round'
                    rotation='-90'
                    origin={`${radius}, ${radius}`}
                />
            </Svg>
        </View>
    );
};



export default RingProgress;