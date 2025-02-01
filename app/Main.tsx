import { Container, Text, Group, Button, Image, Stack, useMantineTheme, Box, Card, Title, SimpleGrid } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import ServicesPage from './services';
import { IconBrandTelegram, IconBrandWhatsapp, IconPhone, IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import { GetInTouch } from './GetInTouch';

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

export function Main() {
    return (
        <Box w="100%" p='20px 0' ta='center'>

                    <Text size="xl" fw={500} >
                        We Serve Homes and Businesses in <TypingEffect words={['NYC', 'Brooklyn', 'Queens']} typingSpeed={120} deletingSpeed={200} delayBetweenWords={1000} />
                    </Text>

                    <Text size="xl" fw={500} >
                        Licensed by NY & Provide Insurance
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
                    
                    <Link className="widget" href="https://www.thumbtack.com/ny/brooklyn/furniture-assembly/handy-dandy/service/511660534258343947" target="_blank">
                        <Image src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/pro-svg/orange/2024.svg" alt="Handy & Dandy Logo" w={192} h={192} mx="auto" mb="xl"/> 
                        <script src="https://www.thumbtack.com/profile/widgets/scripts/?service_pk=511660534258343947&widget_id=profile"></script>
                    </Link>

                    <Box id="home" w="100%" p="20px 0" ta="center">
                        <Text size="xl" fw={500} my="md">
                        ⭐ Our Mission ⭐
                        </Text>
                        <Text size="lg" ta="center">
                        🛠️ Started by helping out local homes and businesses with the goal to provide high quality services with more transparency and less BS. 
                        <br/>
                        🚀 Our goal is to perform with costs that make sense to everyone. Still serving NYC with that exact mentality.
                        <br/>
                        👷🏻 All services are delivered by individuals with years of experience in engineering, construction, repair, and installation.
                        <br/>
                        🗽 We service Manhattan, Brooklyn and Queens. We are proudly insured and able to provide COI.
                        </Text>
                    </Box>
                </Box>
    )
}