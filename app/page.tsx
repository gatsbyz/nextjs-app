'use client';

import { Container, Text, Group, Button, Image, Stack, useMantineTheme, Box, Card, Title, SimpleGrid } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ServicesPage from './services';
import { IconBrandTelegram, IconBrandWhatsapp, IconPhone, IconExternalLink } from '@tabler/icons-react';
import { Footer } from './footer';
import { Header } from './header';

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


function decode(encodedString: string) {
  // Decode the Base64 string to normal text
  const decodedBytes = atob(encodedString);
  // Convert the numbers back to the original phone number
  const originalNumber = decodedBytes.split('').map(function(char) {
    return String.fromCharCode(char.charCodeAt(0) - 1);
  }).join('');
  return originalNumber;
}

export default function HomePage() { 
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); 
  const theme = useMantineTheme();
  const handleShowPhoneNumber = () => setShowPhoneNumber(true);
  const encodedPhoneNumber = "LDIhKTUxNSohOTUxLjU3NjY=";
  const phoneNumber = decode(encodedPhoneNumber);
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your handyman services.");
  
  return (
    <Container size="lg" px="md">
      <Header></Header>
      <Stack gap="lg" align="center">
        <Box w="100%" p='20px 0' ta='center'>
          {/* <Image src="/logo.png" alt="Handy & Dandy Logo" w={150} h={150} mx="auto" mb="xl"/> */}

          <Text size="xl" fw={500} >
            We Serve Homes and Businesses in <TypingEffect words={['NYC', 'Brooklyn', 'Queens']} typingSpeed={120} deletingSpeed={120} delayBetweenWords={1000} />
          </Text>

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

          <Text size="xl" fw={500} my="xl">
            ⭐ Our Mission ⭐
          </Text>
          <Text size="lg" ta="center">
            4 years ago (in 2020), we started helping out local homes and businesses with the goal to provide high quality services with more transparency and less BS, making the costs make sense to everyone. We are still serving NYC with that exact mentality. All services are delivered by individuals with engineering degrees and years of experience in construction, repair, assembly, and related engineering fields.
          </Text>
        </Box>
        
        <ServicesPage/>
        
        <Box w="100%" p='20px 0' ta='center'>
          <Text size="xl" fw={500} my="md">
          ☎️ Contact us ☎️
          </Text>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
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
          </SimpleGrid>
        </Box>
        <Text size="xl" fw={500}>
            ✅ Fully insured. Request for a COI.
        </Text>
      </Stack>
      
      <Footer></Footer>
    </Container>
  );
}
