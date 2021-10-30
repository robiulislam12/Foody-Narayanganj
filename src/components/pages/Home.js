import React from 'react';
import { Container } from 'react-bootstrap';
import Blog from '../Blog';
import FeaturesSection from '../FeaturesSection';
import Foods from '../Foods';
import HeroSection from '../HeroSection';

export default function Home() {
    return (
        <Container>
            <HeroSection/>
            <FeaturesSection/>
            <Foods/>
            <Blog/>
        </Container>
    )
}
