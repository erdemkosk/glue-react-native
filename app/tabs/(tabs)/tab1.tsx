import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Heading,
  Text,
  Box,
  Card,
  ScrollView,
  ButtonText,
  AddIcon,
  ButtonIcon,
  Button,
  ArrowLeftIcon,
} from "@gluestack-ui/themed";
import UserTopBar from '@/components/UserTopBar';
import { useSelector } from 'react-redux';
import { getAllMeccan } from '@/logics/dataHandler';

export default function Tab1() {
  const colorMode = useSelector((state) => state.colorMode.colorMode);
  const meccans = getAllMeccan();
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); // Default -1, no card selected

  const handleCardPress = (index) => {
    setSelectedCardIndex(index);
  };

  const handleBackPress = () => {
    setSelectedCardIndex(-1); // Reset the selected card index
  };

  return (
    <Box flex={1} my="$8" py="$8" px="$3">
      <UserTopBar userName='Erdem Köşk' userTitle='Backend Developer'></UserTopBar>
      <Box py="$4">
        {selectedCardIndex === -1 ? (
          // Show all cards if no card is selected
          <ScrollView>
            {meccans.map((meccan, index) => (
              <TouchableOpacity key={index} onPress={() => handleCardPress(index)}>
                <Card
                  size="md"
                  variant={colorMode === 'dark' ? 'elevated' : 'outline'}
                  m="$3"
                >
                  <Heading textAlign='right' mb="$1" size="md">
                    {meccan.name}
                  </Heading>
                  <Text size="sm">{meccan.transliteration}</Text>
                  <Text size="sm">{meccan.total_verses}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          // Show detailed card view if a card is selected


          <Card h="$10/12" justifyContent="center" alignItems="center" size="md" variant="elevated" m="$3">


            <Button variant="link" onPress={handleBackPress}>
              <ButtonText
                fontWeight="$medium"
                fontSize="$sm"
                color="$textLight900"
                $dark-color="$textDark300"
              >
                Geri Dön
              </ButtonText>
              <ButtonIcon
                as={ArrowLeftIcon}
                h="$3"
                w="$3"
                color="$backgroundLight900"
                ml="$1"
                $dark-color="$backgroundDark300"
              />
            </Button>
            <ScrollView>
              {meccans[selectedCardIndex].verses.map((verse, index) => (
                <Heading py="$10" mb="$1" size="md">
                  {index + 1 + ')'} {verse.translation.tr} 
                  
                  <Text textAlign='right'> {verse.text}</Text>
                </Heading>
                
              ))}




            </ScrollView>
            <Text size="sm">  {meccans[selectedCardIndex].name}</Text>
          </Card>
        )}
      </Box>
    </Box>
  );
}
