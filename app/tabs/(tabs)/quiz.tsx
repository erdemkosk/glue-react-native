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


export default function Quiz() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePressIn = (index) => {
    Vibration.vibrate(100);
  };

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
            
          Ey iman edenler! Belli bir vâde ile birbirinizden borç alıp verdiğiniz zaman onu hemen yazın. İçinizden biri onu doğru bir şekilde yazsın. Yazmayı bilenler, kendisine Allah’ın öğrettiği şekilde yazmaktan çekinmesin de yazsın. Borçlanan kimse de, borcunu söyleyip yazdırsın. Rabbi olan Allah’tan korksun da ondan en küçük bir şey eksiltmesin. Eğer borçlu yarım akıllı veya küçükse yahut bizzat yazdırmaya güç yetiremiyorsa, o takdirde velîsi doğru bir şekilde yazdırsın. İçinizden iki erkeği de bu anlaşmaya şâhit tutun. İki erkek bulunmazsa o takdirde şâhitliğini kabul edeceğiniz kimselerden bir erkekle, biri yanılırsa diğerinin ona hatırlatabilmesi için iki kadın şâhit olsun. Şâhitler, çağrıldıkları zaman şâhitlik yapmaktan kaçınmasınlar. Az olsun, çok olsun borçları vâdesiyle birlikte yazmaktan üşenmeyin. Böyle yapmanız, Allah katında adâlete daha uygun, borcu ispat etmeniz için daha sağlam ve şüpheye düşmemeniz için daha elverişli bir yoldur. Ancak aranızda hemen o anda hazır mallar üzerinde yapacağınız peşin alışveriş olursa, bu takdirde yazmamanızda size bir günah yoktur. Fakat yine de alışverişlerinizi şâhit huzurunda yapmanız daha iyidir. Ancak ne yazana ne de şâhitlik yapana bir zarar verilmemelidir. Şâyet onlara bir zarar verirseniz, şüphesiz bu sizin için günah olur. Allah’a karşı gelmekten sakının! Allah size ihtiyaç duyduğunuz bütün hükümleri ve her işte uymanız gereken yolu öğretmektedir. Allah, her şeyi hakkiyle bilendir.
          </Heading>
          </ScrollView>
          <Text size="sm">Start building your next project in minutes</Text>
        </Card>
        <VStack h="$1/5" space='lg' m="$3">
          <Button   onPressIn={() => handlePressIn(0)} >
          <ButtonText>Mümtehine / 5. Ayet</ButtonText>
        </Button>
          <Button  onPressIn={() => handlePressIn(1)} >
            <ButtonText>Yusuf / 1. Ayet</ButtonText>
          </Button>
          <Button   onPressIn={() => handlePressIn(2)} >
            <ButtonText>Bakara / 12. Ayet</ButtonText>
          </Button>
          <Button   onPressIn={() => handlePressIn(3)} >
            <ButtonText>ANkebut / 7. Ayet</ButtonText>
          </Button></VStack>
      </VStack>
  
    </Box>
  );
}
