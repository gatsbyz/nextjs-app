'use client';

import { Container, Title, Text, Group, Button, Image } from '@mantine/core';
import React, { useState } from 'react';

export default function HomePage() { 
  const [showPhoneNumber, setShowPhoneNumber] = useState(false); 
  const handleShowPhoneNumber = () => {
    setShowPhoneNumber(true);
  };

  const phoneNumber = "+1(404)840-4655";
  
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your handyman services.");
  return (
    <Container>
      <Title order={1} ta="center" my="lg">
        Handy & Dandy
      </Title>
      <Image src="/logo.png" alt="Handy & Dandy Logo" width={50} height={50} />
      
      <Text size="lg" ta="center" my="md">
      A year ago, we started helping out local homes and businesses with the goal to provide high quality services with more transparency and less BS, making the costs make sense to everyone. We are still serving NYC with that exact mentality. All services are delivered by individuals with engineering degrees and years of experience in construction, repair, assembly, and related engineering fields.
      </Text>
      
      <Title order={2} my="md">
        Services Offered:
      </Title>
      <ul>
        <li>Plumbing Repairs</li>
        <li>Electrical Fixes</li>
        <li>Home Renovations</li>
        // Add more services as needed
      </ul>
      
      <Group align="center" my="lg">
        <Text>Contact us:</Text>
        <Button component="a" href="https://t.me/gatsbeta" target="_blank">
          Telegram: @gatsbeta
        </Button>
        <Button component="a" href={`https://wa.me/4048404655?text=${whatsappMessage}`} target="_blank">
          WhatsApp: @JesseLee
        </Button>
        {showPhoneNumber ? (
          <Text>
            <a href={`tel:${phoneNumber}`} style={{ textDecoration: "none", color: "inherit" }}>
              {phoneNumber}
            </a>
          </Text>
        ) : (
          <Button onClick={handleShowPhoneNumber}>Click to reveal phone number</Button>
        )}
      </Group>
    </Container>
  );
}