import React from 'react';
import { View, Text } from 'react-native';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'styled-components';

import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserName,
    UserGreeting,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';


export function Dashboard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Ruan</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>   
            </Header>

            <HighlightCards>
                <HighlightCard type="up" title={'Entradas'} amount={'R$ 17.400,00'} lastTransaction={"Última entrada dia 13 de abril"}/>
                <HighlightCard type="down" title={'Saídas'} amount={'R$ 1.259,00'} lastTransaction={"Última entrada dia 03 de abril"}/>
                <HighlightCard type="total" title={'Entradas'} amount={'R$ 16.141,00'} lastTransaction={"01 á 16 de abril"}/>
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>
            </Transactions>
        </Container>
    );
}