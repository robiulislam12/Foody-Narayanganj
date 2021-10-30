import React from 'react';
import { Container } from 'react-bootstrap';
import Foods from '../Foods';
import HeroSection from '../HeroSection';

export default function Home() {
    return (
        <Container>
            <HeroSection/>
            <Foods/>
        </Container>
    )
}
