'use client';

import { Container } from '@mantine/core';
import React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { Body } from './Body';

export default function HomePage() { 
  return (
      <Container size="lg" px="md">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </Container>
  );
}
