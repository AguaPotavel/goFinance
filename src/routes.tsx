import React from 'react';
import { View, Text } from 'react-native';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'styled-components';
import { Dashboard } from './screens/Dashboard';


export default function Routes() {
    const theme = useTheme();

    return (
        <Dashboard/>
    );
}