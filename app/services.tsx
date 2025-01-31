import { Container, Title, List, Text, Accordion, Card, SimpleGrid } from '@mantine/core';
import React, { useState } from 'react';
import { BadgeCard } from './BadgeCard';

export default function ServicesPage() {
  const [opened, setOpened] = useState<string[]>(['servicesOffered', 'comingSoon']);

  const servicesOffered = [
    {
      image:
        'https://dam.thdstatic.com/content/production/6tpLuz_7sCjGfwR0cQEtWQ/RCt1JhZTuvZ8lmSf0UocXg/Original%20file/types-of-drywall-section-1.jpg',
      title: 'Walls',
      country: 'Express',
      description:
        'Drywall, Cement, Brick walls. Drywall installation & repair. Anything related to walls, we can do.',
      badges: [
        { emoji: '🕳️', label: 'Hole in the wall' },
        { emoji: '💦', label: 'Ceiling water damage' },
        { emoji: '📺', label: 'TV mounting' },
        { emoji: '💡', label: 'Install lights' },
        { emoji: '🪞', label: 'Wall hanging mirror' },
      ],
    },
    {
      image:
        'https://pizzazzpainting.com/wp-content/uploads/2021/10/shutterstock_645166399-min-scaled.jpg',
      title: 'Painting',
      country: 'Express',
      description:
        'From painting one wall to the whole apartment, we can do.',
      badges: [
        { emoji: '📦', label: 'Moving out' },
        { emoji: '🧳', label: 'Moving in' },
        { emoji: '👨‍👩‍👦', label: 'New tenant in building' },
        { emoji: '🔄', label: 'Refresh wall' },
        { emoji: '🎨', label: 'Wall color change' },
        { emoji: '🐾', label: 'Scuff marks' },
      ],
    },
    {
      image:
        'https://media.istockphoto.com/id/1067496776/photo/top-view-of-drill-tool-and-another-equipment-on-wood-table-furniture-assembly-improvement-or.jpg?s=612x612&w=0&k=20&c=pW5vu2TK9yaOvqLG8jktB59DRIvVdr6eAVnI72RwPPI=',
      title: 'Repairs',
      country: 'Express',
      description:
        'Repair your furniture or appliances. If anything is out of order or broken, please call us. We can help.',
      badges: [
        { emoji: '🍿', label: 'Broken microwave' },
        { emoji: '🛋️', label: 'Loose sofa leg' },
        { emoji: '🪑', label: 'Broken office chair' },
        { emoji: '🔌', label: 'Broken outlet' },
        { emoji: '🚪', label: 'Door not closing properly' },
        { emoji: '🪟', label: 'Cracked window pane' },
      ],
    },
    {
      image:
        'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg',
      title: 'Windows',
      country: 'Consult',
      description:
        'Window services information will be updated soon',
      badges: [
      ],
    },
    {
      image:
        'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg',
      title: 'Appliances',
      country: 'Consult',
      description:
        'Appliances information coming soon',
      badges: [
      ],
    },
    {
      image:
        'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg',
      title: 'Furniture Assembly',
      country: 'Consult',
      description:
        'Furniture Assembly coming soon',
      badges: [
      ],
    },
    {
      image:
        'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg',
      title: 'Plumbing',
      country: 'Consult',
      description:
        'Plubming coming soon',
      badges: [
      ],
    },
    {
      image:
        'https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg',
      title: 'Electric',
      country: 'Consult',
      description:
        'Electric coming soon',
      badges: [
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
        🛠️ Top Services 🛠️
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
