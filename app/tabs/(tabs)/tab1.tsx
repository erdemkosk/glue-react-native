import React from 'react';
import { FlatList } from 'react-native';
import {
  Heading,
  Center,
  Divider,
  Text,
  Box,
  HStack,
  Card,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  VStack,
  Icon,
  MenuIcon,
  Button,
  MoonIcon,
  SunIcon,
  ButtonIcon,
  Alert,
  AlertIcon,
  InfoIcon,
  AlertText,
  Image,
  ButtonText,
} from "@gluestack-ui/themed";
import UserTopBar from '@/components/UserTopBar';

const DATA = [
  {
    id: '1',
    name: 'Fashion Clothing',
    description: 'Floral embroidered notch neck thread work cotton kurta in white and black.',
    image: 'https://images.unsplash.com/photo-1595231712325-9fedecef7575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
  },
  {
    id: '2',
    name: 'Fashion Accessories',
    description: 'Stylish sunglasses with UV protection for your summer look.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  },
];

export default function Tab2() {
  const renderItem = ({ item }) => (
    <Card p="$5" borderRadius="$lg" maxWidth={360} mx={2}>
      <Image
        mb="$6"
        h={120}
        width="$full"
        prop="koko"
        borderRadius="$md"
        source={{ uri: item.image }}
      />
      <Text
        fontSize="$sm"
        fontStyle="normal"
        fontFamily="$heading"
        fontWeight="$normal"
        lineHeight="$sm"
        mb="$2"
        sx={{
          color: "$textLight700",
          _dark: {
            color: "$textDark200",
          },
        }}
      >
        {item.name}
      </Text>
      <Text size="sm" fontFamily="$heading" mb="$4">
        {item.description}
      </Text>
      <Box flexDirection="row">
        <Button
          px="$4"
          py="$2"
          fontFamily="$heading"
          mr="$3"
          sx={{
            flex: 1,
          }}
        >
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          px="$4"
          py="$2"
          variant="outline"
          fontFamily="$heading"
          borderColor="$borderLight300"
          $dark-borderColor="$backgroundDark600"
          sx={{
            flex: 1,
          }}
        >
          <ButtonText size="sm" color="$textLight600" $dark-color="$textDark400">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );

  return (
    <Box flex={1} my="$8" py="$8" px="$3">
      <UserTopBar userName='Erdem Köşk' userTitle='Backend Developer'></UserTopBar>
      <Box py="$4">
        <Alert action="info" variant="solid">
          <AlertIcon as={InfoIcon} mr="$3" />
          <AlertText>
            We have updated our terms of service. Please review and accept to continue
            using our service.
          </AlertText>
        </Alert>
      </Box>
      <HStack space="md" reversed={false} justifyContent="space-around">
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ }}
        />
      </HStack>
    </Box>
  );
}
