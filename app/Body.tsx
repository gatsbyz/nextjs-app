import { Container, Text, Group, Button, Image, Stack, useMantineTheme, Box, Card, Title, SimpleGrid } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ServicesPage from './services';
import { IconBrandTelegram, IconBrandWhatsapp, IconPhone, IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import { GetInTouch } from './GetInTouch';

import classes from './Body.module.css';
import { Main } from './Main';

  
function decode(encodedString: string) {
// Decode the Base64 string to normal text
const decodedBytes = atob(encodedString);
// Convert the numbers back to the original phone number
const originalNumber = decodedBytes.split('').map(function(char) {
    return String.fromCharCode(char.charCodeAt(0) - 1);
}).join('');
return originalNumber;
}
  

export function Body() {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false); 
    const theme = useMantineTheme();
    const handleShowPhoneNumber = () => setShowPhoneNumber(true);
    const encodedPhoneNumber = "LDIhKToyOCohODEyLjQ1ODI=";
    const phoneNumber = decode(encodedPhoneNumber);
    const whatsappMessage = encodeURIComponent("Hello, I'm interested in your handyman services.");
  
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

                <Box w="100%" p='20px 0' ta='center'>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 3 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                >
                    <Button variant="outline" component="a" href="https://t.me/handymankurt" target="_blank" leftSection={<IconBrandTelegram size={18} />}>
                    Telegram
                    </Button>
                    <Button variant="outline" component="a" href={`https://wa.me/9177013471?text=${whatsappMessage}`} target="_blank" leftSection={<IconBrandWhatsapp size={18} />}>
                    WhatsApp
                    </Button>
                    {showPhoneNumber ? (
                    <Text>
                        <a href={`tel:${phoneNumber}`} style={{ textDecoration: "none", color: theme.colors.blue[6] }}>
                        {phoneNumber}
                        </a>
                    </Text>
                    ) : (
                    <Button variant="outline" onClick={handleShowPhoneNumber} leftSection={<IconPhone size={18} />}>
                        Show Phone Number
                    </Button>
                    )}
                </SimpleGrid>
                </Box>
                <Text size="xl" fw={500}>
                    ✅ Fully insured. Request for a COI.
                </Text>
        </Stack>
    )
}  