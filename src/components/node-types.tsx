import React from 'react'
import { Handle, NodeProps, NodeResizer, Position } from 'reactflow'

const RectangleNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <>
      <NodeResizer
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <Handle
        type='target'
        position={Position.Left}
        id={`${data.id}.left`}
        style={{ borderRadius: 0 }}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type='source'
        position={Position.Right}
        id={`${data.id}.right1`}
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type='source'
        position={Position.Right}
        id={`${data.id}.right2`}
        style={{ top: '70%', borderRadius: 0 }}
      />
    </>
  )
}

const CircleNode: React.FC<NodeProps> = ({ data, selected = true }) => {
  return (
    <>
      <NodeResizer
        color='#ff0071'
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <Handle
        type='target'
        position={Position.Left}
        id={`${data.id}.left`}
        style={{ borderRadius: '0' }}
      />
      <div id={data.id}>{data.label}</div>
      <Handle
        type='source'
        position={Position.Right}
        id={`${data.id}.right1`}
        style={{ top: '30%', borderRadius: 0 }}
      />
      <Handle
        type='source'
        position={Position.Right}
        id={`${data.id}.right2`}
        style={{ top: '70%', borderRadius: 0 }}
      />
    </>
  )
}

const TriangleNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <>
      <NodeResizer
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <Handle
        type='target'
        position={Position.Top}
        id={`${data.id}.top`}
        style={{ borderRadius: 0 }}
      />
      <div id={data.id} className='triangle-node-text'>
        {data.label}
      </div>
      <Handle
        type='source'
        position={Position.Bottom}
        id={`${data.id}.bottom1`}
        style={{ left: '30%', borderRadius: 0 }}
      />
      <Handle
        type='source'
        position={Position.Bottom}
        id={`${data.id}.bottom2`}
        style={{ left: '70%', borderRadius: 0 }}
      />
    </>
  )
}

const TextNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div style={{ background: 'transparent', padding: '14px' }}>
      <div id={data.id}>{data.label}</div>
    </div>
  )
}

export const nodeTypes = {
  circle: CircleNode,
  rectangle: RectangleNode,
  triangle: TriangleNode,
  text: TextNode
}
