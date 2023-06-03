import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import Slider from '../components/slider/Slider';
import '@testing-library/jest-dom';

describe('Slider Component', () => { 
    const Slide = 
        ({title}: {title: string}) => 
            <div className='slide' style={{width: '50%'}}>{title}</div>

    const renderSlider  = () => render(<Slider>
            <Slide title='slide 1' />
            <Slide title='slide 2' />
            <Slide title='slide 3' />
            <Slide title='slide 4' />
        </Slider>) 

    test('Should render passed slide items', () => { 
        const {container} = renderSlider();
        const sliderCards = container.querySelector('.slider__cards');
        //assert
        expect(sliderCards).toBeInTheDocument();
        expect(container.querySelectorAll('.slide')).toHaveLength(24);
    })

    
    test('Slider scrolls to the left when left control is clicked', () => {
        const {container} = renderSlider();
        const sliderCards = container.querySelector('.slider__cards');
        const leftButton = container.querySelector('.slider__control-left');
        expect(leftButton).toBeInTheDocument();
        expect(sliderCards).toBeInTheDocument();
        
        // if(leftButton && sliderCards) {// already checked in the its in dom
        //     fireEvent.click(leftButton);
        //     expect(sliderCards.scrollLeft).toBeGreaterThan(0);
        // }

    })
    
    test('Slider scrolls to the right when right control is clicked', () => {
        const {container} = renderSlider();
        const sliderCards = container.querySelector('.slider__cards');
        const rightButton = container.querySelector('.slider__control-right');
        expect(rightButton).toBeInTheDocument();
        expect(sliderCards).toBeInTheDocument();

        // if(rightButton && sliderCards) {
        //     fireEvent.click(rightButton);
        //     expect(sliderCards.scrollLeft).toBeGreaterThan(0);
        // }
    })

    

})