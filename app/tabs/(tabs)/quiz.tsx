import React, { useState, useEffect } from 'react';
import { FlatList, Platform, Vibration } from 'react-native';
import {
  Heading,
  Text,
  Box,
  Card,
  VStack,
  Button,
  ButtonText,
  ScrollView,
} from "@gluestack-ui/themed";
import UserTopBar from '@/components/UserTopBar';
import { getRandomVerse } from '@/logics/dataHandler';

export default function Quiz() {
  const [time, setTime] = useState(new Date());
  const [questionText, setQuestionText] = useState();
  const [answers, setAnswers] = useState();

  useEffect(() => {
    prepareQuestionAndAnswer()

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePressIn = (index) => {
    Vibration.vibrate(100);
    prepareQuestionAndAnswer()
  };

  function prepareQuestionAndAnswer() {
    const question = getRandomVerse();
    const questionText = `${question?.verses[0].translation.tr}\n${question?.verses[0].text}`;
    const verseIds = question?.verses.map(verse => verse.verseId) || [];
  
    // Ayetlerin id'lerini dolaşarak butonlar oluştur
    const answerButtons = verseIds.map((id, index) => (
      <Button key={index} onPressIn={() => handlePressIn(id)}>
        <ButtonText>{`${question?.meccanTranslation.tr} ${id}`}</ButtonText>
      </Button>
    ));
  
    // Hazırlanan soru metni ve cevap butonlarını setAnswers ile state'e ata
    setQuestionText(questionText);
    setAnswers(answerButtons);
  }

  return (

    <Box flex={1} my="$8" py="$8" px="$3">

      <UserTopBar userName='Erdem Köşk' userTitle='Backend Developer' />
      <VStack py="$1/6">

        <Card h="$3/5" justifyContent="center" alignItems="center" size="md" variant="elevated" m="$3">
          <Box position="absolute" justifyContent="center" alignItems="center" borderRadius={100} top={-50} overflow="hidden" borderWidth={2} borderColor="white" width={100} height={100} backgroundColor="black">
            <Text color="white" fontSize="$xl">
              {time.toLocaleTimeString()}
            </Text>
          </Box>
          <ScrollView>
            <Heading py="$10" mb="$1" size="md">

              {questionText}
            </Heading>
          </ScrollView>
          <Text size="sm">Start building your next project in minutes</Text>
        </Card>
        <VStack h="$1/5" space='lg' m="$3">
          {answers}
        </VStack>
      </VStack>

    </Box>
  );
}

