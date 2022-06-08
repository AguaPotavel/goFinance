import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Title, 
    Icon,
} from './styles'

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

interface Props extends TouchableOpacityProps {
    title: string;
    isActive: boolean;
    type: 'up' | 'down';
}

export function TransactionTypeButton({title, type, ...rest}: Props) {
    return (
        <Container type={type} {...rest}>
            <Icon name={icons[type]} type={type}/>
            <Title>
                {title}
            </Title>
        </Container>
    );
}