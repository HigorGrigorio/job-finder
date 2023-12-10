/**
 * @file index.tsx
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-30
 *
 * @changelog
 *  - 2023-11-30 - Higor Grigorio
 *    - Create index.tsx.
 */
import { Button, H3, Image, Input, Paragraph, XStack, YStack } from "tamagui";
import React from "react";
import auth from "../../services/auth";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const onSignUpButtonPress = async () => {
    // check password match
    if (password != confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    const me = await auth.signUp(name, email, password, confirmPassword, phone);
    
    console.log(me)
  };

  return (
    <YStack
      position={"relative"}
      flex={1}
      backgroundColor={"#111"}
      paddingHorizontal={"$2"}
      paddingTop={"$4"}
    >
      <YStack flex={1} width={"100%"} ai={"center"} jc={"center"}>
        <YStack space ai={"center"} jc={"center"}>
          <XStack jc={"center"} ai={"center"}>
            <H3 backgroundColor={"transparent"}>Cadastre-se</H3>
          </XStack>
          <Image
            source={require("../../../assets/job-finder-icon.png")}
            height={120}
            width={120}
            resizeMode={"contain"}
          />
          <YStack space={"$2"} ai={"center"} jc={"center"}>
            <XStack maxWidth={"70%"} width={"100%"} position={"relative"}>
              <Paragraph
                size={"$7"}
                color={"$red10"}
                position={"absolute"}
                zi={10}
                top={0}
                right={5}
              >
                *
              </Paragraph>
              <Input flex={1} placeholder={"Nome"} onChangeText={setName} />
            </XStack>
            <XStack maxWidth={"70%"} width={"100%"} position={"relative"}>
              <Paragraph
                size={"$7"}
                color={"$red10"}
                position={"absolute"}
                zi={10}
                top={0}
                right={5}
              >
                *
              </Paragraph>
              <Input flex={1} placeholder={"Email"} onChangeText={setEmail} />
            </XStack>
            <XStack maxWidth={"70%"} width={"100%"} position={"relative"}>
              <Paragraph
                size={"$7"}
                color={"$red10"}
                position={"absolute"}
                zi={10}
                top={0}
                right={5}
              >
                *
              </Paragraph>
              <Input
                flex={1}
                placeholder={"Senha"}
                onChangeText={setPassword}
              />
            </XStack>
            <XStack maxWidth={"70%"} width={"100%"} position={"relative"}>
              <Paragraph
                size={"$7"}
                color={"$red10"}
                position={"absolute"}
                zi={10}
                top={0}
                right={5}
              >
                *
              </Paragraph>
              <Input
                flex={1}
                placeholder={"Confirmar senha"}
                onChangeText={setConfirmPassword}
              />
            </XStack>
            <XStack maxWidth={"70%"} width={"100%"}>
              <Input flex={1} placeholder={"Telefone"} />
            </XStack>
          </YStack>
          <XStack space={3}>
            <Paragraph size={"$5"}>Já tem uma conta?</Paragraph>
            <Button
              p={0}
              m={0}
              h={"auto"}
              backgroundColor={"transparent"}
              onPress={() => navigation.navigate("Login")}
            >
              <Paragraph
                size={"$5"}
                borderBottomWidth={1}
                borderBottomColor={"white"}
              >
                Faça Login
              </Paragraph>
            </Button>
          </XStack>
          <Button onPress={onSignUpButtonPress}>Cadastrar-se</Button>
        </YStack>
      </YStack>
    </YStack>
  );
};
