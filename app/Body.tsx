import { Container, Text, Group, Button, Image, Stack, useMantineTheme, Box, Card, Title, SimpleGrid } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ServicesPage from './services';
import { IconBrandTelegram, IconBrandWhatsapp, IconPhone, IconExternalLink } from '@tabler/icons-react';
import { GetInTouch } from './GetInTouch';

import classes from './Body.module.css';
import { Main } from './Main';


  

export function Body() {
  
    return (
            <Stack gap="lg" align="center" id="body">

                <Box className={classes.section} id="home">
                    <Main/>
                </Box>

                <Box className={classes.section} id="services">
                    <ServicesPage/>
                </Box>

                <Box className={classes.section} id="contact">
                    <GetInTouch />
                </Box>

                <Text size="xl" fw={500}>
                    ✅ Insured & Licensed. Request for a COI.
                </Text>
        </Stack>
    )
}  