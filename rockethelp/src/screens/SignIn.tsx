﻿import {useState} from 'react';
import { Heading, VStack, Icon, useTheme } from "native-base";
import Logo from '../assets/logo_primary.svg';
import { Input } from "../components/input";
import {Envelope, Key } from 'phosphor-react-native';
import { Button } from "../components/button";

export function SignIn(){
    const { colors } = useTheme();
    const [name, setName]= useState('');
    const [password, setPassword]= useState('');

    return(

        <VStack  flex={1} alignItems='center' bg='gray.600' px={8} pt={24}> 
        <Logo />


        <Heading color='gray.100' fontSize='xl' mt={20} mb={6}>
            Acesse Sua Conta
        </Heading>

        <Input 
        placeholder='Email'
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4}/>}
        onChangeText={setName}
        />

        <Input placeholder='Senha'
        mb={8}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4}/>}
        secureTextEntry 
        onChangeText={setPassword}
        />

        <Button title='Entrar' w='full'/>
        

        </VStack>
    )
}