import Gradient from "../assets/Icons/Gradient";
import DocumentData from "../assets/Icons/DocumentData";
import LightBulbPerson from "../assets/Icons/LightbulbPerson";
import Rocket from "../assets/Icons/Rocket";
import Logo from "../assets/Icons/Logo";
import { router } from 'expo-router';
import {
  AddIcon,
  AlertCircleIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  CheckIcon,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import { KeyboardAvoidingView } from 'react-native';

import { Link } from "expo-router";
import { AppleIcon, FacebookIcon } from "lucide-react-native";


export default function Home() {
  const handleLogin = () => {

    router.replace('/tabs');
  };

  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView>
        <Box
          position="absolute"
          $base-h={500}
          $base-w={500}
          $lg-h={500}
          $lg-w={500}
        >
          <Gradient />
        </Box>
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
            <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
              Hoşgeldin... Dünyanı değiştirmeye hazır mısın?
            </Text>
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
    </Box>
  );
}
