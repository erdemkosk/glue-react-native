import React, { useEffect, useState } from 'react';
import {
    Heading,
    Box,
    HStack,
    VStack,
    Icon,
    ChevronDownIcon,
    Select,
    SelectBackdrop,
    SelectContent,
    SelectDragIndicator,
    SelectDragIndicatorWrapper,
    SelectIcon,
    SelectInput,
    SelectItem,
    SelectPortal,
    SelectTrigger,
    Text
} from "@gluestack-ui/themed";
import { useSelector } from 'react-redux';

export default function AppLanguageSelector() {
    const colorMode = useSelector(state => state.colorMode.colorMode);

    const [questionLanguage, setQuestionLanguage] = useState('Türkçe');
    const [answerLanguage, setAnswerLanguage] = useState('Türkçe');

    const handleQuestionLanguageChange = (event) => {
        setQuestionLanguage(event.target.value);
    };

    const handleAnswerLanguageChange = (event) => {
        setAnswerLanguage(event.target.value);
    };

    return (
        <VStack space='lg'>
            <HStack space="md" justifyContent="space-between">
                <Box flexDirection="row" >
                    <VStack justifyContent="center" alignContent='center'>
                        <Heading color={colorMode === 'dark' ? '$white' : '$black'} size="sm" fontFamily="$heading" mb="$1">
                            Uygulama Dili
                        </Heading>
                        <Text>Sorulacak soruların dili</Text>
                    </VStack>
                </Box>

                <Select width="$1/2" defaultValue={questionLanguage} onChange={handleQuestionLanguageChange}>
                    <SelectTrigger variant="rounded" size="md">
                        <SelectInput color={colorMode === 'dark' ? '$white' : '$black'} placeholder="Dil Seçiniz" />
                        <SelectIcon mr="$3">
                            <Icon color={colorMode === 'dark' ? '$white' : '$black'} as={ChevronDownIcon} />
                        </SelectIcon>
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="Türkçe" value="Türkçe" />
                            <SelectItem label="İngilizce" value="İngilizce" />
                            <SelectItem label="Arapça" value="Arapça" />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </HStack>
            
            <HStack space="md" justifyContent="space-between">
                <Box flexDirection="row" >
                    <VStack justifyContent="center" alignContent='center'>
                        <Heading color={colorMode === 'dark' ? '$white' : '$black'} size="sm" fontFamily="$heading" mb="$1">
                            Uygulama Dili
                        </Heading>
                        <Text>Cevapların dili</Text>
                    </VStack>
                </Box>

                <Select width="$1/2" defaultValue={answerLanguage} onChange={handleAnswerLanguageChange}>
                    <SelectTrigger variant="rounded" size="md">
                        <SelectInput color={colorMode === 'dark' ? '$white' : '$black'} placeholder="Dil Seçiniz" />
                        <SelectIcon mr="$3">
                            <Icon color={colorMode === 'dark' ? '$white' : '$black'} as={ChevronDownIcon} />
                        </SelectIcon>
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop />
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="Türkçe" value="Türkçe" />
                            <SelectItem label="İngilizce" value="İngilizce" />
                            <SelectItem label="Arapça" value="Arapça" />
                        </SelectContent>
                    </SelectPortal>
                </Select>
            </HStack>
        </VStack>
    );
}
