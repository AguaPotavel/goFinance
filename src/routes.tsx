import React from 'react';
import { View, Text } from 'react-native';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'styled-components';

import { Dashboard } from './screens/Dashboard';
import { Register } from './screens/Register';
import { CategorySelect } from './screens/CategorySelect';


export default function Routes() {
    const theme = useTheme();

    return (
        <Register/>
    );
}