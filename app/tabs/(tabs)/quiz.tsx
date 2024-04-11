import React, { useState, useEffect } from 'react';
import { FlatList, Platform } from 'react-native';
import {
  Heading,
  Text,
  Box,
  Card,
  VStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import UserTopBar from '@/components/UserTopBar';


export default function Tab3() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box flex={1} my="$8" py="$8" px="$3">
      <UserTopBar userName='Erdem Köşk' userTitle='Backend Developer' />
      <VStack py="$1/6">

        <Card justifyContent="center" alignItems="center" size="md" variant="elevated" m="$3">
          <Box position="absolute" justifyContent="center" alignItems="center" borderRadius={100} top={-50} overflow="hidden" borderWidth={2} borderColor="white" width={100} height={100} backgroundColor="black">
            <Text color="white" fontSize="$xl">
              {time.toLocaleTimeString()}
            </Text>
          </Box>
          <Heading py="$10" mb="$1" size="md">
            “Rabbimiz! İmtihan için kâfirleri üzerimize salıp bizi musîbetlere maruz bırakma! Rabbimiz! Bizi bağışla! Şüphesiz sen, kudreti dâimâ üstün gelen, her hükmü ve işi hikmetli ve sağlam olansın!”
          </Heading>
          <Text size="sm">Start building your next project in minutes</Text>
        </Card>
        <VStack space='lg' m="$3"><Button >
          <ButtonText>Mümtehine / 5. Ayet</ButtonText>
        </Button>
          <Button >
            <ButtonText>Yusuf / 1. Ayet</ButtonText>
          </Button>
          <Button >
            <ButtonText>Bakara / 12. Ayet</ButtonText>
          </Button>
          <Button >
            <ButtonText>ANkebut / 7. Ayet</ButtonText>
          </Button></VStack>
      </VStack>

    </Box>
  );
}
