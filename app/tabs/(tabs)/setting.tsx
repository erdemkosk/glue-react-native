import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import {
    Box,
    VStack,

} from "@gluestack-ui/themed";
import UserTopBar from '@/components/UserTopBar';
import { useDispatch, useSelector } from 'react-redux';
import { changeColorMode } from '@/app/store';
import AppThemeSelector from '@/components/settings/appThemeSelector';
import AppLanguageSelector from '@/components/settings/appLanguageSelector';


export default function Setting() {
    const dispatch = useDispatch();
    const colorMode = useSelector((state) => state.colorMode.colorMode);

    const handleThemeChange = () => {
        dispatch(changeColorMode());
    };
    return (
        <Box flex={1} my="$8" py="$8" px="$3">
            <ScrollView>
                <VStack space='lg'>
                    <AppThemeSelector></AppThemeSelector>
                    <AppLanguageSelector></AppLanguageSelector>
                </VStack>

            </ScrollView>
        </Box>
    );
}
