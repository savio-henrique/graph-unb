'use client';

import { info } from 'console';
import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';

export default function GraphView() {

  const graph = { 
    nodes: [
      { id: 0, label: 'Start', color: 'green', info: {
        description: 'This is the start node', 
        details: 'Additional details about start node',
        hours: '0',
      }},
      { id: 1, label: 'APC', color: 'red', info: {
        description: 'This is the APC node',
        details: 'Additional details about APC node',
        hours: '60',
      }},
      { id: 2, label: 'FDC', color: 'red', info: {
        description: 'This is the FDC node',
        details: 'Additional details about FDC node',
        hours: '60',
      }},
      { id: 3, label: 'OEB', color: 'yellow', info: {
        description: 'This is the OEB node',
        details: 'Additional details about OEB node',
        hours: '60',
      }},
      { id: 4, label: 'CB', color: 'purple', info: {
        description: 'This is the CB node',
        details: 'Additional details about CB node',
        hours: '60',
      }},
      { id: 5, label: 'ED', color: 'red', info: {
        description: 'This is the ED node',
        details: 'Additional details about ED node',
        hours: '60',
      }},
    ],
    links: [
      { source: 0, target: 1, color: 'green' },
      { source: 0, target: 2, color: 'green' },
      { source: 0, target: 3, color: 'green' },
      { source: 1, target: 4, color: 'purple' },
      { source: 1, target: 5, color: 'red' }

  ]};

  const nodeObject = (node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const label = node.label;
    const boxSize = { width: 30, height: 35 };
    const fontSize = 4;
    ctx.font = `${fontSize}px Sans-Serif`;
    ctx.strokeStyle = node.color || 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.clearRect(node.x! - boxSize.width/2, node.y! - boxSize.height/2, boxSize.width, boxSize.height);
    roundedRect(ctx, node.x! - boxSize.width/2, node.y! - boxSize.height/2, boxSize.width, boxSize.height, 2);
    ctx.fillText(label, node.x!, node.y!);
  }

  function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
  }

  return (
    <div className='w-full h-full bg-white'>
      <ForceGraph2D
        graphData={graph}
        nodeVal={15}
        nodeLabel="label"
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        nodeAutoColorBy="color"
        nodeCanvasObject={nodeObject}
        nodeCanvasObjectMode={() => 'after'}
        width={600}
        height={400}
      />
    </div>
  );
}
