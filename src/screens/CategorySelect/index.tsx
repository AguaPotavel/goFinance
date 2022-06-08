import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import { Button } from '../../components/Forms/Button';


import {
    Container,
    Header, 
    Title,
    Category,
    Icon, 
    Label,
    Separator,
    Footer,
} from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}


export function CategorySelect({ 
    category, 
    setCategory, 
    closeSelectCategory 
}: Props) {

    function handleSelectCategory(item: Category) {
        setCategory(item);
        // console.log('selecionado:',  item);
        // closeSelectCategory();
    }


    return(
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{
                    flex: 1,
                    width: '100%'
                }}

                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category onPress={() => handleSelectCategory(item)} isActive={item.key === category.key}>
                        <Icon name={item.icon} size={20} />
                        <Label>{item.name}</Label>
                    </Category>
                )}
                ItemSeparatorComponent={() => (<Separator/>)}
            />

            <Footer>
                <Button title={'Selecionar'} onPress={closeSelectCategory}/>
            </Footer>
        </Container>
    )
}