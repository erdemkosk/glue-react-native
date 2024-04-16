import React, { useState, useEffect } from 'react';
import { ScrollView, Vibration } from 'react-native';
import {
  Box,
  Card,
  Heading,
  Text,
  VStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import UserTopBar from '@/components/UserTopBar';
import { getRandomVerse } from '@/logics/dataHandler';

export default function Quiz() {
  const [time, setTime] = useState(new Date());
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [disableButtons, setDisableButtons] = useState(false);

  useEffect(() => {
    prepareQuestionAndAnswers();
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePressIn = (index) => {
    if (!disableButtons) {
      setDisableButtons(true);
      Vibration.vibrate(100);
      const isCorrect = index === question.correctIndex;
      const updatedAnswers = answers.map((answer, i) => ({
        ...answer,
        action: i === index ? (isCorrect ? 'positive' : 'negative') : 'primary',
      }));
      setAnswers(updatedAnswers);
      setTimeout(() => {
        setDisableButtons(false);
        prepareQuestionAndAnswers();
      }, 1000);
    }
  };

  const prepareQuestionAndAnswers = () => {
    const newQuestion = getRandomVerse();
    const verseText = newQuestion ? `${newQuestion?.verses[0].translation.tr}` : '';
    const verseIds = newQuestion ? newQuestion?.verses.map(verse => verse.verseId) : [];
    const newAnswers = verseIds.map((verseId, index) => ({
      text: `${newQuestion?.meccanTranslation.tr} ${verseId}`,
      action: 'primary',
    }));

    setQuestion({ text: verseText , arabicText: newQuestion?.verses[0].text, correctIndex: 0 });
    setAnswers(newAnswers);
  };

  return (
    <Box flex={1} my="$8" py="$8" px="$3">
      <UserTopBar userName='Hafız' userTitle='Sorular' />
      <VStack py="$1/6">
        <Card h="$3/5" justifyContent="center" alignItems="center" size="md" variant="elevated" m="$3">
          <Box position="absolute" justifyContent="center" alignItems="center" borderRadius={100} top={-50} overflow="hidden" borderWidth={2} borderColor="white" width={100} height={100} backgroundColor="black">
            <Text color="white" fontSize="$xl">
              {time.toLocaleTimeString()}
            </Text>
          </Box>
          <ScrollView>
            <Heading py="$10" mb="$1" size="md">
              {question ? question.text : ''}
            </Heading>
            <Heading textAlign='right' mb="$1" size="md">
            {question ? question.arabicText : ''}
            </Heading>
          </ScrollView>
          <Text size="sm">Start building your next project in minutes</Text>
        </Card>
        <VStack h="$1/5" space='lg' m="$3">
          {answers.map((answer, index) => (
            <Button key={index} action={answer.action} disabled={disableButtons} onPressIn={() => handlePressIn(index)}>
              <ButtonText>{answer.text}</ButtonText>
            </Button>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}
