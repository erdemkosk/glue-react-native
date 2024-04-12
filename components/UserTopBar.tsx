import React from 'react';

import { ExternalLink } from './ExternalLink';
import { useColorScheme } from "@/components/useColorScheme";
import {
    Text,
    Box,
    HStack,
    Avatar,
    AvatarFallbackText,
    AvatarImage,
    VStack,
    Heading,
    Button,
    ButtonIcon,
    SunIcon,
    MoonIcon,
    Switch,
    Icon
} from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { changeColorMode } from '@/app/store';


export default function UserTopBar({ userName, userTitle }: { userName: string, userTitle: string }) {
    const dispatch = useDispatch();
    const colorMode = useSelector((state) => state.colorMode.colorMode);
    
    const handleThemeChange = () => {
        dispatch(changeColorMode());
      };

    return (
        <HStack space="md" reversed={false} justifyContent="space-between">
            <Box flexDirection="row">
                <Avatar mr="$3">
                    <AvatarFallbackText fontFamily="$heading">RR</AvatarFallbackText>
                    <AvatarImage
                    alt='ERdem'
                        source={{
                            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                        }}
                    />
                </Avatar>
                <VStack>
                    <Heading color={colorMode === 'dark' ? '$white' : '$black'} size="sm" fontFamily="$heading" mb="$1">
                        {userName}
                    </Heading>
                    <Text size="sm" fontFamily="$heading">
                        {userTitle}
                    </Text>
                </VStack>
            </Box>
            <Box flexDirection="row" justifyContent="center">
                <HStack space="sm" reversed={false}>
                    <Icon py="$6" h="$6" w="$6" color={colorMode === 'dark' ? '$white' : '$black'} as={SunIcon} />
                    <Switch value= {colorMode === 'dark' ? true :false } onToggle={handleThemeChange} my="$2"  size='sm' defaultValue={true} />
                    <Icon py="$6" h="$6" w="$6" color={colorMode === 'dark' ? '$white' : '$black'} as={MoonIcon} />
                </HStack>
            </Box>
        </HStack>
    );
}
