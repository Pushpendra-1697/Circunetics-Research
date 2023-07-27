import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Visualization = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 300;

    // Clear existing content before updating
    svg.selectAll('*').remove();

    // Create the bars
    const bars = svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (width / data.length))
      .attr('y', (d) => height - d)
      .attr('width', width / data.length - 1)
      .attr('height', (d) => d)
      .attr('fill', 'blue');

    // Update the bars when data changes
    bars
      .attr('y', (d) => height - d)
      .attr('height', (d) => d);
  }, [data]);

  return (
    <svg ref={svgRef} width={500} height={300}>
      {/* Visualization will be drawn here */}
    </svg>
  );
};

export default D3Visualization;
