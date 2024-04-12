import React from 'react';
import {
    Heading,
    Box,
    HStack,
    VStack,
    Icon,
    MoonIcon,
    SunIcon,
    Switch,
    Text

} from "@gluestack-ui/themed";
import UserTopBar from '@/components/UserTopBar';
import { useDispatch, useSelector } from 'react-redux';
import { changeColorMode } from '@/app/store';


export default function AppThemeSelector() {
    const dispatch = useDispatch();
    const colorMode = useSelector((state) => state.colorMode.colorMode);

    const handleThemeChange = () => {
        dispatch(changeColorMode());
    };
    return (
        <HStack space="md" reversed={false} justifyContent="space-between">
            <Box flexDirection="row" >
                <VStack justifyContent="center" alignContent='center'>
                    <Heading color={colorMode === 'dark' ? '$white' : '$black'} size="sm" fontFamily="$heading" mb="$1">
                        Uygulama Teması
                    </Heading>
                   

                </VStack>
            </Box>
            <Box flexDirection="row" justifyContent="center">
                <HStack space="sm" reversed={false}>
                    <Icon py="$6" h="$6" w="$6" color={colorMode === 'dark' ? '$white' : '$black'} as={SunIcon} />
                    <Switch value={colorMode === 'dark' ? true : false} onToggle={handleThemeChange} my="$2" size='sm' defaultValue={true} />
                    <Icon py="$6" h="$6" w="$6" color={colorMode === 'dark' ? '$white' : '$black'} as={MoonIcon} />
                </HStack>
            </Box>
        </HStack>
    );
}
