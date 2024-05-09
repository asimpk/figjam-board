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
  BackgroundVariant,
  useReactFlow
} from 'reactflow'
import { CirclePicker } from 'react-color'
import 'reactflow/dist/style.css'
import { nodeTypes } from './node-types'

const shapes = [
  {
    id: '1',
    shapeType: 'rectangle',
    label: 'Rectangle',
    shapeRenderStyles: '',
    nodeResizerStyles: 'h-[50px] w-[50px] bg-transparent'
  },
  {
    id: '2',
    shapeType: 'circle',
    label: 'Circle',
    shapeRenderStyles: '[clip-path:circle(50%_at_50%_50%)]',
    nodeResizerStyles: 'h-[50px] w-[50px] bg-transparent'
  },
  {
    id: '3',
    shapeType: 'triangle',
    label: 'Triangle',
    shapeRenderStyles: '[clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]',
    nodeResizerStyles: 'h-[50px] w-[50px] bg-transparent'
  },
  {
    id: '4',
    shapeType: 'rhombus',
    label: 'Rhombus',
    shapeRenderStyles:
      '[clip-path:polygon(50%_0%,_100%_50%,_50%_100%,_0%_50%)]',
    nodeResizerStyles: 'h-[50px] w-[50px] bg-transparent'
  },

  {
    id: '5',
    shapeType: 'chevron',
    label: 'Chevron',
    shapeRenderStyles:
      '[clip-path:polygon(75%_0%,_100%_50%,_75%_100%,_0%_100%,_25%_50%,_0%_0%)]',
    nodeResizerStyles: 'h-[50px] w-[50px] bg-transparent'
  },
  {
    id: '6',
    shapeType: 'text',
    label: 'Text',
    shapeRenderStyles:
      '[clip-path:polygon(0_34%,_61%_33%,_80%_7%,_83%_33%,_100%_33%,_100%_100%,_0_100%)]',
    nodeResizerStyles: 'h-[50px] w-[50px] bg-transparent'
  }
]

const colorsValues: { [key: string]: string } = {
  '#f44336': 'bg-red-500',
  '#e91e63': 'bg-rose-600',
  '#9c27b0': 'bg-fuchsia-700',
  '#673ab7': 'bg-indigo-700',
  '#3f51b5': 'bg-blue-700',
  '#2196f3': 'bg-blue-400',
  '#03a9f4': 'bg-blue-300',
  '#00bcd4': 'bg-cyan-500'
}

export default function ReactFlowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [selectedShape, setSelectedShape] = useState<(typeof shapes)[1]>()
  const [shapeColor, setShapeColor] = useState(Object.keys(colorsValues)[0])
  const { screenToFlowPosition } = useReactFlow()

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  )

  const onPaneClick = (e: React.MouseEvent) => {
    if (selectedShape) {
      setNodes([
        ...nodes,
        {
          id: (nodes.length + 1).toString(),
          position: screenToFlowPosition({ x: e.clientX, y: e.clientY }),
          data: {
            label: '',
            bgColor: colorsValues[shapeColor],
            shapeRenderStyles: selectedShape.shapeRenderStyles,
            nodeResizerColor: '#ff0071'
          },
          type: selectedShape.shapeType,
          selected: true,
          className: selectedShape.nodeResizerStyles
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

        <div className='w-min-[150px] absolute bottom-4 left-1/2 z-10 h-[90px] -translate-x-1/2 transform  rounded-lg border p-4'>
          <div className='flex w-full items-center justify-start overflow-x-auto overflow-y-hidden'>
            <CirclePicker
              width={'150px'}
              circleSpacing={8}
              colors={Object.keys(colorsValues)}
              onChangeComplete={color => setShapeColor(color.hex)}
            />
            {shapes.map(shape => {
              return (
                <button
                  key={shape.id}
                  onClick={() => setSelectedShape(shape)}
                  className={`${shape.shapeRenderStyles} ${colorsValues[shapeColor]} ml-2 h-[50px] w-[50px]`}
                />
              )
            })}
          </div>
        </div>
      </ReactFlow>
    </div>
  )
}
