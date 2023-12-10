/**
 * @file index.tsx
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-30
 *
 * @changelog
 *  - 2023-11-30 - Higor Grigorio
 *    - Create index.tsx.
 */
import {Button, Image, Input, Paragraph, XStack, YStack} from "tamagui";
import React, {useContext} from "react";
import {AuthContext} from "../../contexts/auth";

type LoginScreenProps = {
    navigation: any
}

export const LoginScreen = ({navigation}: LoginScreenProps) => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = async () => {
        await signIn();
    }

    return <YStack position={'relative'}
                   flex={1}
                   backgroundColor={'#111'}
                   paddingHorizontal={'$2'}
                   paddingTop={'$4'}>
        <YStack flex={1} width={'100%'} ai={'center'} jc={'center'}>
            <Image
                source={require('../../../assets/job-finder-logo.png')}
                height={250}
                width={250}
                resizeMode={'contain'}
            />
            <YStack space ai={'center'} jc={'center'}>
                <YStack width={'100%'} ai={'center'} jc={'center'} space={3}>
                    <Paragraph size={'$5'}>Ainda não tem uma conta?</Paragraph>
                    <Button
                        p={0}
                        m={0}
                        h={'auto'}
                        onPress={() => navigation.navigate('Register')}
                        backgroundColor={'transparent'}>
                        <Paragraph size={'$5'}
                                   borderBottomWidth={1}
                                   borderBottomColor={'white'}>Cadastre-se</Paragraph>
                    </Button>
                </YStack>
                <YStack space={'$2'} ai={'center'} jc={'center'}>
                    <XStack maxWidth={'70%'} width={'100%'}>
                        <Input flex={1} placeholder={'Email'}/>
                    </XStack>
                    <XStack maxWidth={'70%'} width={'100%'}>
                        <Input flex={1} placeholder={'Senha'}/>
                    </XStack>
                </YStack>

                <Button
                    onPress={handleLogin}
                >Entrar</Button>

                <Button p={0} m={0} h={'auto'} backgroundColor={'transparent'}>
                    <Paragraph size={'$5'}
                               borderBottomWidth={1}
                               borderBottomColor={'white'}>Esqueceu sua senha?</Paragraph>
                </Button>
            </YStack>
        </YStack>
    </YStack>
}
