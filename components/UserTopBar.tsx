import React from 'react';

import { ExternalLink } from './ExternalLink';
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

export default function UserTopBar({ userName, userTitle }: { userName: string, userTitle: string }) {
    return (
        <HStack space="md" reversed={false} justifyContent="space-between">
            <Box flexDirection="row">
                <Avatar mr="$3">
                    <AvatarFallbackText fontFamily="$heading">RR</AvatarFallbackText>
                    <AvatarImage
                        source={{
                            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                        }}
                    />
                </Avatar>
                <VStack>
                    <Heading color="$white" size="sm" fontFamily="$heading" mb="$1">
                        {userName}
                    </Heading>
                    <Text size="sm" fontFamily="$heading">
                        {userTitle}
                    </Text>
                </VStack>
            </Box>
            <Box flexDirection="row" justifyContent="center">
                <HStack space="sm" reversed={false}>
                    <Icon py="$6" h="$6" w="$6" color="$white" as={SunIcon} />
                    <Switch my="$2"  size='sm' defaultValue={true} />
                    <Icon py="$6" h="$6" w="$6" color="$white" as={MoonIcon} />
                </HStack>
            </Box>
        </HStack>
    );
}
