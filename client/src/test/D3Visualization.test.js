import React from 'react';
import { render } from '@testing-library/react';
import D3Visualization from '../Components/D3Visualization';

test('D3Visualization component should renders the bars with correct data', () => {
  // Dummy data for testing the visualization
  const dummyData = [30, 50, 20, 70, 40];
  const { container } = render(<D3Visualization data={dummyData} />);

  // Check if the correct number of bars are rendered
  const bars = container.querySelectorAll('rect');
  expect(bars.length).toBe(dummyData.length);

  // Check if the heights of the bars are correctly set
  dummyData.forEach((height, index) => {
    expect(bars[index].getAttribute('height')).toBe(height.toString());
  });
});
