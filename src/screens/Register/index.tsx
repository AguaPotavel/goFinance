import React, { useState } from 'react';

import {
    Modal
} from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Forms/InputForm';


import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from './styles'

interface FormData {
    name: string;
    amount: string;
}

export function Register() {
    const [ transactionType, setTransactionType] = useState('');
    const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
    const [ category, setCategory] = useState({
        key: '',
        name: '',
    });

    const { control, handleSubmit} = useForm()

    function handleTransactionType(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectCategory() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategory() {
        setCategoryModalOpen(true);
    }

    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType: transactionType,
            category: category.key,
        }

        console.log(data);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <InputForm placeholder='Nome' name="name" control={control}/>

                    <InputForm placeholder='Preço' name="amount" control={control}/>

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
                

                <Button title={'Enviar'} onPress={handleSubmit(handleRegister)}/>
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