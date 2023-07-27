import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SliderComponent from '../Components/SliderComponent';
// import Slider from './Slider';

test('Slider component should updates value on change', () => {
    render(<SliderComponent onChange={() => { }} />);
    const sliderElement = screen.getByRole('slider');
    const valueElement = screen.getByText(/Slider Value:/);

    // Initial value should be 50
    expect(valueElement.textContent).toBe('Slider Value: 50');

    // Simulate slider value change to 75
    fireEvent.change(sliderElement, { target: { value: '75' } });
    expect(valueElement.textContent).toBe('Slider Value: 75');

    // Simulate slider value change to 25
    fireEvent.change(sliderElement, { target: { value: '25' } });
    expect(valueElement.textContent).toBe('Slider Value: 25');
});
