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
    TransactionList,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string,
}


export function Dashboard(){

    const Lista: DataListProps[] = [
        {
            id: '1',
            name: 'string',
            amount: 'string',
            category: 'leisure',
            date: 'string',
            type: 'positive'
        },
        {   
            id: '2',
            name: 'string',
            amount: 'string',
            category: 'leisure',
            date: 'string',
            type: 'positive'
        }
    ]


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
                <TransactionList
                    data={Lista}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                />
                
            </Transactions>
        </Container>
    );
}