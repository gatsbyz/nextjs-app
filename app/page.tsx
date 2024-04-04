'use client';

import { Container, Text, Group, Button, Image, Stack, useMantineTheme, Box, Card, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ServicesPage from './services';
import { IconBrandTelegram, IconBrandWhatsapp, IconPhone, IconExternalLink } from '@tabler/icons-react';

const TypingEffect = ({
  words = [""],
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    let timer: any;

    if (isDeleting) {
      if (currentCharIndex === 0) {
        setIsDeleting(false);
        setIsEnd(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        timer = setTimeout(() => {}, delayBetweenWords);
      } else {
        timer = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex - 1);
        }, deletingSpeed);
      }
    } else {
      if (currentCharIndex === words[currentWordIndex].length) {
        setIsEnd(true);
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        timer = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords, isEnd]);

  return (
    <span>
      {words[currentWordIndex].substring(0, currentCharIndex)}
      {isEnd ? '' : '|'}
    </span>
  );
};

export default function HomePage() { 
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); 
  const theme = useMantineTheme();
  const handleShowPhoneNumber = () => setShowPhoneNumber(true);
  const phoneNumber = "+1 (404) 840-4655";
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your handyman services.");
  
  return (
    <Container size="lg" px="md">
      <Stack gap="lg" align="center">
        <Box w="100%" p='20px 0' ta='center'>
          <Image src="/logo.png" alt="Handy & Dandy Logo" w={150} h={150} mx="auto" />

          <Button 
            my="xl"
            variant="light" 
            color="blue" 
            component="a" 
            href="https://www.thumbtack.com/ny/brooklyn/furniture-assembly/handy-dandy/service/511660534258343947" 
            target="_blank" 
            leftSection={<IconExternalLink size={18} />}
          >
            Check out our portfolio on Thumbtack
          </Button>

          <Text size="xl" fw={500} mb="xl">
            We Serve Homes and Businesses in <TypingEffect words={['NYC', 'Brooklyn', 'Queens']} typingSpeed={120} deletingSpeed={120} delayBetweenWords={1000} />
          </Text>

          <Text size="xl" fw={500} my="xl">
            Our Mission
          </Text>
          <Text size="lg" ta="center">
            4 years ago (in 2020), we started helping out local homes and businesses with the goal to provide high quality services with more transparency and less BS, making the costs make sense to everyone. We are still serving NYC with that exact mentality. All services are delivered by individuals with engineering degrees and years of experience in construction, repair, assembly, and related engineering fields.
          </Text>
        </Box>
        
        <ServicesPage/>
        
        <Box w="100%" p='20px 0' ta='center'>
          <Text size="xl" fw={500} my="md">
            Contact us
          </Text>
          <Group grow wrap="nowrap">
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
        </Box>
      </Stack>
    </Container>
  );
}
