'use client';

import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';

export default function GraphView() {

  const graph = { 
    nodes: [
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 1, target: 3 },
      { source: 2, target: 4 },
      { source: 2, target: 5 },
  ]};

  return (
    <div style={{ height: '500px' }}>
      <ForceGraph2D
        graphData={graph}
        nodeLabel="label"
      />
    </div>
  );
}
