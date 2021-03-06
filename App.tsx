import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function Main() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}