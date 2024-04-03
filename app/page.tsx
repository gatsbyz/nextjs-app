'use client';

import { Container, Text, Group, Button, Image, Stack, useMantineTheme, Box } from '@mantine/core';
import React, { useState } from 'react';
import ServicesPage from './services';
import { IconBrandTelegram, IconBrandWhatsapp, IconPhone, IconExternalLink } from '@tabler/icons-react';

export default function HomePage() { 
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); 
  const theme = useMantineTheme();
  const handleShowPhoneNumber = () => setShowPhoneNumber(true);
  const phoneNumber = "+1(404)840-4655";
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your handyman services.");
  
  return (
    <Container size="lg" px="md">
      <Box w="100%" p='20px 0' ta='center'>
        <Image src="/logo.png" alt="Handy & Dandy Logo" w={100} h={100} mx="auto" />
        <Text size="xl" fw={500} mt="md">
          Our Mission
        </Text>
      </Box>
      
      <Stack gap="lg" align="center">
        <Text size="lg" ta="center">
          A year ago, we started helping out local homes and businesses with the goal to provide high quality services with more transparency and less BS, making the costs make sense to everyone. We are still serving NYC with that exact mentality. All services are delivered by individuals with engineering degrees and years of experience in construction, repair, assembly, and related engineering fields.
        </Text>

        <Button 
          variant="light" 
          color="blue" 
          component="a" 
          href="https://www.thumbtack.com/ny/brooklyn/furniture-assembly/handy-dandy/service/511660534258343947" 
          target="_blank" 
          leftSection={<IconExternalLink size={18} />}
        >
          Check out our portfolio on Thumbtack
        </Button>
        
        <ServicesPage/>
        
        <Group>
          <Text>Contact us:</Text>
          <Button variant="outline" component="a" href="https://t.me/gatsbeta" target="_blank" leftSection={<IconBrandTelegram size={18} />}>
            Telegram
          </Button>
          <Button variant="outline" component="a" href={`https://wa.me/4048404655?text=${whatsappMessage}`} target="_blank" leftSection={<IconBrandWhatsapp size={18} />}>
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
        </Group>
      </Stack>
    </Container>
  );
}
