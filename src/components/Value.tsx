import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ValueProps {
    label: string;
    value: string;
}

const Value = ({ label, value }: ValueProps) => {
    return (
        <View style={styles.valueContainer}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    valueContainer: {
      marginRight: 50,
      marginVertical: 20,
      marginTop: 50,
    },
    label: {
      fontSize: 20,
      color: 'white',
    },
    value: {
      fontSize: 35,
      color: '#AFB3BE',
      fontWeight: '500',
    },
  });


export default Value;