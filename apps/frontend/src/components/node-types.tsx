import React from 'react'
import { Handle, NodeProps, NodeResizer, Position } from 'reactflow'

const RectangleNode: React.FC<NodeProps> = ({ data, selected }) => {
  const styles =
    `h-[100%] w-[100%] ${data.bgColor} ${data.shapeRenderStyles}` as string

  return (
    <>
      <NodeResizer
        color={data.nodeResizerColor}
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <div className={`${styles}`}>
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
      </div>
    </>
  )
}

const RhombusNode: React.FC<NodeProps> = ({ data, selected }) => {
  const styles =
    `h-[100%] w-[100%] ${data.bgColor} ${data.shapeRenderStyles}` as string

  return (
    <>
      <NodeResizer
        color={data.nodeResizerColor}
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <div className={`${styles}`}>
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
      </div>
    </>
  )
}

const ChevronNode: React.FC<NodeProps> = ({ data, selected }) => {
  const styles =
    `h-[100%] w-[100%] ${data.bgColor} ${data.shapeRenderStyles}` as string

  return (
    <>
      <NodeResizer
        color={data.nodeResizerColor}
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <div className={`${styles}`}>
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
      </div>
    </>
  )
}

const CircleNode: React.FC<NodeProps> = ({ data, selected = true }) => {
  const styles =
    `h-[100%] w-[100%] ${data.bgColor} ${data.shapeRenderStyles}` as string
  return (
    <>
      <NodeResizer
        color={data.nodeResizerColor}
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <div className={`${styles}`}>
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
      </div>
    </>
  )
}

const TriangleNode: React.FC<NodeProps> = ({ data, selected }) => {
  const styles =
    `h-[100%] w-[100%] ${data.bgColor} ${data.shapeRenderStyles}` as string
  return (
    <>
      <NodeResizer
        color={data.nodeResizerColor}
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <div className={`${styles}`}>
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
      </div>
    </>
  )
}

const TextNode: React.FC<NodeProps> = ({ data, selected }) => {
  const styles =
    `h-[100%] w-[100%] ${data.bgColor} ${data.shapeRenderStyles}` as string
  return (
    <>
      <NodeResizer
        color={data.nodeResizerColor}
        isVisible={selected}
        handleStyle={{
          padding: '4px'
        }}
      />
      <div className={`${styles}`}>
        <div id={data.id}>{data.label}</div>
      </div>
    </>
  )
}

export const nodeTypes = {
  circle: CircleNode,
  rectangle: RectangleNode,
  triangle: TriangleNode,
  text: TextNode,
  rhombus: RhombusNode,
  chevron: ChevronNode
}
