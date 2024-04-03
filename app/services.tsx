import { Container, Title, Card, Text, Badge, List } from '@mantine/core';
import React from 'react';

export default function ServicesPage() {
  const currentServices = {
    specialties: ["Repairs", "Installation", "Maintenance", "Assembly", "Painting", "Cleaning"],
    workFocus: ["Doors", "Walls (inside)", "Cabinets", "Shelving", "Tiling", "Wall hangings", "Furniture"],
    additionalOffers: ["Interior painting", "Dry wall repair & texturing", "Furniture and equipment assembly", "Picture hanging and art installation", "TV mounting"]
  };

  const comingSoonServices = ["Windows", "Walls (outside)", "Gutters", "Molding or baseboards", "Flooring", "Appliances", "Plumbing", "Electrical", "Lighting"];

  return (
    <Container>
      <Title order={1} my="lg">Our Handyman Services</Title>
      
      <Card shadow="sm" p="lg" radius="md" mb="md">
        <Title order={2}>Specialties</Title>
        <List>
          {currentServices.specialties.map(service => <List.Item key={service}>{service}</List.Item>)}
        </List>
      </Card>

      <Card shadow="sm" p="lg" radius="md" mb="md">
        <Title order={2}>Work Focus</Title>
        <List>
          {currentServices.workFocus.map(focus => <List.Item key={focus}>{focus}</List.Item>)}
        </List>
      </Card>

      <Card shadow="sm" p="lg" radius="md" mb="md">
        <Title order={2}>Additional Offers</Title>
        <List>
          {currentServices.additionalOffers.map(offer => <List.Item key={offer}>{offer}</List.Item>)}
        </List>
      </Card>

      <Card shadow="sm" p="lg" radius="md" mb="md" style={{ textDecoration: "line-through" }}>
        <Title order={2} style={{ color: "#999" }}>Coming Soon</Title>
        <List>
          {comingSoonServices.map(service => (
            <List.Item key={service} style={{ color: "#999" }}>
              {service}
            </List.Item>
          ))}
        </List>
      </Card>
    </Container>
  );
}
