import { Container, Title, List, Text, Accordion, Card, SimpleGrid } from '@mantine/core';
import React, { useState } from 'react';

export default function ServicesPage() {
  const [opened, setOpened] = useState<string[]>(['servicesOffered', 'comingSoon']);

  const servicesOffered = [
    {
      category: "Handyman Services",
      details: [
        "Repairs, Installation, Maintenance, Assembly",
        "Painting, Cleaning",
        "Interior painting, Dry wall repair & texturing",
        "Furniture and equipment assembly",
        "Picture hanging and art installation, TV mounting"
      ]
    },
    {
      category: "Focus Areas",
      details: [
        "Doors, Walls (inside), Cabinets",
        "Shelving, Tiling, Wall hangings, Furniture",
        "Custom builds, repairs, and restorations"
      ]
    }
  ];

  const comingSoonServices = [
    "Windows, Walls (outside), Gutters",
    "Molding or baseboards, Flooring",
    "Appliances, Plumbing, Electrical, Lighting"
  ];

  return (
<Container mb="xl" style={{ maxWidth: '100%' }}>
      <Text ta="center" size="xl" fw={500} my="md">
        Our Services
      </Text>
      
      <SimpleGrid cols={2} spacing="lg">
        {servicesOffered.map((service, index) => (
          <Card key={index} shadow="xl" padding="lg">
            <Text size="xl" fw={500} mb="md">{service.category}</Text>
            <List withPadding spacing="sm">
              {service.details.map((detail, detailIndex) => (
                <List.Item key={detailIndex}>{detail}</List.Item>
              ))}
            </List>
          </Card>
        ))}

        <Card shadow="sm" padding="lg" style={{ gridColumn: 'span 2' }}>
          <Text size="xl" fw={500} mb="md" style={{ color: "#999" }}>Coming Soon</Text>
          <List withPadding spacing="sm" style={{ color: "#999" }}>
            {comingSoonServices.map((service, index) => (
              <List.Item key={index} style={{ textDecoration: "line-through" }}>
                {service}
              </List.Item>
            ))}
          </List>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
