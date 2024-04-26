'use client'

import React, { useCallback, useState } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  BackgroundVariant
} from 'reactflow'
import { CirclePicker } from 'react-color'
import 'reactflow/dist/style.css'
import { nodeTypes } from './node-types'

const shapes = [
  {
    id: '1',
    shapeType: 'rectangle',
    label: 'Rectangle',
    shapeStyle: 'bg-blue-500 h-[40px] w-[120px]'
  },
  {
    id: '2',
    shapeType: 'circle',
    label: 'Circle',
    shapeStyle: 'bg-blue-500 rounded-full h-[50px] w-[50px]'
  }
]

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4'
]

export default function ReactFlowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [selectedShape, setSelectedShape] = useState<(typeof shapes)[1]>()

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  )

  const onPaneClick = (e: React.MouseEvent) => {
    console.log('onPaneClick', e)
    if (selectedShape) {
      setNodes([
        ...nodes,
        {
          id: (nodes.length + 1).toString(),
          position: { x: e.pageX, y: e.pageY },
          data: { label: '' },
          type: 'circle',
          selected: true,
          className: selectedShape.shapeStyle
        }
      ])
      setSelectedShape(undefined)
    }
  }

  return (
    <div className='h-full w-full'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={onPaneClick}
      >
        <Controls />
        <Background variant={'dots' as BackgroundVariant} gap={12} size={1} />

        <div className='absolute bottom-4 left-1/2 z-10 h-[90px] w-3/6 -translate-x-1/2 transform rounded-lg border bg-inherit p-4'>
          <div className='flex w-full items-center justify-start'>
            <CirclePicker width={'150px'} circleSpacing={8} colors={colors} />
            {shapes.map(shape => {
              return (
                <button
                  key={shape.id}
                  onClick={() => setSelectedShape(shape)}
                  className={`${shape.shapeStyle} ml-2`}
                />
              )
            })}
          </div>
        </div>
      </ReactFlow>
    </div>
  )
}
