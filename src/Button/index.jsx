import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useAnalytics } from '@segment/analytics-react-native';

const Button = () => {
  const { track } = useAnalytics();
  return (
    <TouchableOpacity
      style={{ backgroundColor: "#333" }}
      onPress={() => {
        track('Press-Button', { value: "Login" });
      }}
    >
      <Text style={{ color: "#fff" }}>Press me!</Text>
    </TouchableOpacity>
  );
};

export default Button;
