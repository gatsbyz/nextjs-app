import { Container, Title, List, Text, Accordion, Card, SimpleGrid } from '@mantine/core';
import React, { useState } from 'react';
import { BadgeCard } from './BadgeCard';

export default function ServicesPage() {
  const [opened, setOpened] = useState<string[]>(['servicesOffered', 'comingSoon']);

  const servicesOffered = [
    {
      image:
        'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      title: 'Verudela Beach',
      country: 'Croatia',
      description:
        'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
      badges: [
        { emoji: '☀️', label: 'Sunny weather' },
        { emoji: '🦓', label: 'Onsite zoo' },
        { emoji: '🌊', label: 'Sea' },
        { emoji: '🌲', label: 'Nature' },
        { emoji: '🤽', label: 'Water sports' },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      title: 'Verudela Beach',
      country: 'Croatia',
      description:
        'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
      badges: [
        { emoji: '☀️', label: 'Sunny weather' },
        { emoji: '🦓', label: 'Onsite zoo' },
        { emoji: '🌊', label: 'Sea' },
        { emoji: '🌲', label: 'Nature' },
        { emoji: '🤽', label: 'Water sports' },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
      title: 'Verudela Beach',
      country: 'Croatia',
      description:
        'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
      badges: [
        { emoji: '☀️', label: 'Sunny weather' },
        { emoji: '🦓', label: 'Onsite zoo' },
        { emoji: '🌊', label: 'Sea' },
        { emoji: '🌲', label: 'Nature' },
        { emoji: '🤽', label: 'Water sports' },
      ],
    },
    // {
    //   category: "Handyman Services",
    //   details: [
    //     "Repairs, Installation, Maintenance, Assembly",
    //     "Painting, Cleaning",
    //     "Interior painting, Dry wall repair & texturing",
    //     "Furniture and equipment assembly",
    //     "Picture hanging and art installation, TV mounting"
    //   ]
    // },
    // {
    //   category: "Focus Areas",
    //   details: [
    //     "Doors, Walls (inside), Cabinets",
    //     "Shelving, Tiling, Wall hangings, Furniture",
    //     "Installations, repairs, and restorations"
    //   ]
    // }
  ];

  const comingSoonServices = [
    "Windows, Walls (outside), Gutters",
    "Molding or baseboards, Flooring",
    "Appliances, Plumbing, Electrical, Lighting"
  ];


  return (
<Container mb="xl" style={{ maxWidth: '100%' }}>
      <Text ta="center" size="xl" fw={500} my="md">
        🛠️ Our Services 🛠️
      </Text>
      
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}  
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {servicesOffered && servicesOffered.map((data, index) => (
          <BadgeCard
          image={data.image}
          key={index}
          title={data.title}
          description={data.description}
          country={data.country}
          badges={data.badges}
        />
        ))}
        {/* <BadgeCard></BadgeCard> */}
{/* 
        <Card shadow="sm" padding="lg">
          <Text size="xl" fw={500} mb="md" style={{ color: "#999" }}>Coming Soon</Text>
          <List withPadding spacing="sm" style={{ color: "#999" }}>
            {comingSoonServices.map((service, index) => (
              <List.Item key={index} style={{ textDecoration: "line-through" }}>
                {service}
              </List.Item>
            ))}
          </List>
        </Card> */}
      </SimpleGrid>
    </Container>
  );
}
