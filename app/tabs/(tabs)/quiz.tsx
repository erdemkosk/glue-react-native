import React, { useState, useEffect, useRef } from 'react';
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
  const [answer1, setAnswer1] = useState({ text: '', action: 'primary' });
  const [answer2, setAnswer2] = useState({ text: '', action: 'primary' });
  const [answer3, setAnswer3] = useState({ text: '', action: 'primary' });
  const [answer4, setAnswer4] = useState({ text: '', action: 'primary' });
  const [disableButtons, setDisableButtons] = useState(false);

  let correctIndex=0;

  useEffect(() => {
    prepareQuestionAndAnswer()

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePressIn = (index) => {
    if (!disableButtons) {
      setDisableButtons(true)
  
      Vibration.vibrate(100);

      console.log(disableButtons)

      if (index === correctIndex) {
        // Doğru cevap
        if (index === 0) {
          setAnswer1({
            ...answer1,
            action: 'positive'
          });
        } else if (index === 1) {
          setAnswer2({
            ...answer2,
            action: 'positive'
          });
        } else if (index === 2) {
          setAnswer3({
            ...answer3,
            action: 'positive'
          });
        } else if (index === 3) {
          setAnswer4({
            ...answer4,
            action: 'positive'
          });
        }
      } else {
        // Yanlış cevap
        if (index === 0) {
          setAnswer1({
            ...answer1,
            action: 'negative'
          });
        } else if (index === 1) {
          setAnswer2({
            ...answer2,
            action: 'negative'
          });
        } else if (index === 2) {
          setAnswer3({
            ...answer3,
            action: 'negative'
          });
        } else if (index === 3) {
          setAnswer4({
            ...answer4,
            action: 'negative'
          });
        }
      }
      

      setTimeout(() => {
        setDisableButtons(false)
        
        prepareQuestionAndAnswer();
      }, 1000);
    }
  };

  function prepareQuestionAndAnswer() {
    const question = getRandomVerse();
    const questionText = `${question?.verses[0].translation.tr}\n${question?.verses[0].text}`;
    const verseIds = question?.verses.map(verse => verse.verseId) || [];

    setAnswer1({
      text: question?.meccanTranslation.tr + ' ' + verseIds[0],
      action: 'primary'
    })

    setAnswer2({
      text: question?.meccanTranslation.tr + ' ' + verseIds[1],
      action: 'primary'
    })

    setAnswer3({
      text: question?.meccanTranslation.tr + ' ' + verseIds[2],
      action: 'primary'
    })

    setAnswer4({
      text: question?.meccanTranslation.tr + ' ' + verseIds[3],
      action: 'primary'
    })
  
    // Hazırlanan soru metni ve cevap butonlarını setAnswers ile state'e ata
    setQuestionText(questionText);
  
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
        <Button action={answer1.action} disabled={disableButtons}  onPressIn={() => handlePressIn(0)}>
        <ButtonText>{answer1.text}</ButtonText>
      </Button>
      <Button action={answer2.action} disabled={disableButtons}  onPressIn={() => handlePressIn(1)}>
        <ButtonText>{answer2.text}</ButtonText>
      </Button>
      <Button action={answer3.action} disabled={disableButtons}  onPressIn={() => handlePressIn(2)}>
        <ButtonText>{answer3.text}</ButtonText>
      </Button>
      <Button action={answer4.action} disabled={disableButtons}  onPressIn={() => handlePressIn(3)}>
        <ButtonText>{answer4.text}</ButtonText>
      </Button>

        </VStack>
      </VStack>

    </Box>
  );
}

