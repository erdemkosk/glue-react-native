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
import Login from "./login";


export default function Home() {
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
        <Login routePath="/tabs"></Login>
      </ScrollView>
    </Box>
  );
}
