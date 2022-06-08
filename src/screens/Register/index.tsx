import React, { useState } from 'react';

import {
    Modal
} from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';


import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles'

export function Register() {
    const [ transactionType, setTransactionType] = useState('');
    const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
    const [ category, setCategory] = useState({
        key: '',
        name: '',
    });

    function handleTransactionType(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectCategory() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategory() {
        setCategoryModalOpen(true);
    }

    React.useEffect(() => {
        // console.log('category:', category);
    }, [category])

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input placeholder='Nome'/>

                    <Input placeholder='Preço'/>

                    <TransactionTypes>
                        <TransactionTypeButton 
                            title='Income' 
                            type='up'
                            onPress={()=> handleTransactionType('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton 
                            title='Outcome' 
                            type='down' 
                            onPress={()=> handleTransactionType('down')}
                            isActive={transactionType === 'down'}
                            />
                    </TransactionTypes>

                    <CategorySelectButton title={category.name.length > 1 ? category.name : "Categoria"} onPress={handleOpenSelectCategory}/>
                    
                </Fields>
                

                <Button title={'Enviar'}/>
            </Form>
            
            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    closeSelectCategory={handleCloseSelectCategory}
                    category={category}
                    setCategory={setCategory}
                />
            </Modal>
            
        </Container>
    );
}