import Logo from "../assets/Icons/Logo";
import { router, useNavigation, useRouter } from 'expo-router';
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  Heading,
  HStack,
  Input,
  InputField,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import { Link } from "expo-router";
import { AppleIcon, FacebookIcon } from "lucide-react-native";
import { Platform } from "react-native";


export default function Login({ routePath }: { routePath: string}){
    const router = useRouter();
    const navigation = useNavigation();

  const handleLogin = () => {
    router.push(routePath)
  };

  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  enabled={false}
>
<ScrollView>
        <Box
          $base-my="$16"
          $base-mx="$5"
          $lg-my="$24"
          $lg-mx="$5"
          justifyContent="space-between"
        >
          <Box my="$1/3" justifyContent="center" alignItems="center">
            <Logo />
          </Box>
          <Box $base-flexDirection="column" $md-flexDirection="row">
            <Heading color="$white" ml="$2">Hoşgeldin... Dünyanı değiştirmeye hazır mısın?</Heading>
            <VStack my="$8" space="xl" reversed={false}>
              <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField color="$white" placeholder="e-mail" />
              </Input>
              <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField color="$white" type="password" placeholder="password" />
              </Input>
              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={handleLogin}
              >
                <ButtonText>Giriş Yap </ButtonText>
                <ButtonIcon as={EyeIcon} />
              </Button>
              <Button
                size="md"
                variant="solid"
                action="secondary"
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonText>Şifremi Unuttum </ButtonText>
                <ButtonIcon as={EyeOffIcon} />
              </Button>
              <HStack py="$2" justifyContent="space-around" reversed={false}>
                <Button
                  borderRadius="$full"
                  size="lg"
                  p="$3.5"
                >
                  {/* EditIcon is imported from 'lucide-react-native' */}
                  <ButtonIcon as={AppleIcon} />
                </Button>
                <Button
                  borderRadius="$full"
                  size="lg"
                  p="$3.5"
                >
                  {/* EditIcon is imported from 'lucide-react-native' */}
                  <ButtonIcon as={EditIcon} />
                </Button>
                <Button
                  borderRadius="$full"
                  size="lg"
                  p="$3.5"
                >
                  {/* EditIcon is imported from 'lucide-react-native' */}
                  <ButtonIcon as={FacebookIcon} />
                </Button>
              </HStack>

            </VStack>
          </Box>
        </Box>
        </ScrollView>
        </KeyboardAvoidingView>
  );
}
