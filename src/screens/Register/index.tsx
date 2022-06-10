import React, { useState } from 'react';

import {
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('O nome é obrigatório'),
    amount: Yup
        .number()
        .typeError('Informe um valor numérico!')
        .positive('O valor deve ser positivo')
})

export function Register() {
    const [ transactionType, setTransactionType] = useState('');
    const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);
    const [ category, setCategory] = useState({
        key: '',
        name: '',
    });

    const { control, handleSubmit, formState : { errors} } = useForm({
        resolver: yupResolver(schema),
    })

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
        if(!transactionType){
            return Alert.alert('Erro', 'Selecione o tipo de transação');
        }

        if(category.key === ''){
            return Alert.alert('Erro', 'Selecione uma categoria');
        }


        const data = {
            name: form.name,
            amount: form.amount,
            transactionType: transactionType,
            category: category.key,
        }

        console.log(data);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <InputForm 
                        placeholder='Nome' 
                        name="name" 
                        control={control}
                        autoCapitalize="sentences"
                        autoCorrect={false}
                        error={errors.name?.message}
                    />

                    <InputForm 
                        placeholder='Preço' 
                        name="amount" 
                        control={control}
                        keyboardType="numeric"
                        error={errors.amount?.message}
                    />

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
        </TouchableWithoutFeedback>
    );
}