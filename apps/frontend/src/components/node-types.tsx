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
        <Handle type='source' position={Position.Left} id={`${data.id}.left`} />
        <Handle
          type='source'
          position={Position.Right}
          id={`${data.id}.right`}
        />
        <Handle type='source' position={Position.Top} id={`${data.id}.top`} />
        <Handle
          type='source'
          position={Position.Bottom}
          id={`${data.id}.bottom`}
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
        <Handle type='target' position={Position.Left} id={`${data.id}.left`} />
        <div id={data.id}>{data.label}</div>
        <Handle
          type='source'
          position={Position.Right}
          id={`${data.id}.right`}
        />
        <Handle type='source' position={Position.Top} id={`${data.id}.top`} />
        <Handle
          type='source'
          position={Position.Bottom}
          id={`${data.id}.bottom`}
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
        <Handle type='target' position={Position.Left} id={`${data.id}.left`} />
        <div id={data.id}>{data.label}</div>
        <Handle
          type='source'
          position={Position.Right}
          id={`${data.id}.right`}
        />
        <Handle type='source' position={Position.Top} id={`${data.id}.top`} />
        <Handle
          type='source'
          position={Position.Bottom}
          id={`${data.id}.bottom`}
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
        <Handle type='target' position={Position.Left} id={`${data.id}.left`} />
        <div id={data.id}>{data.label}</div>
        <Handle
          type='source'
          position={Position.Right}
          id={`${data.id}.right`}
        />
        <Handle type='source' position={Position.Top} id={`${data.id}.top`} />
        <Handle
          type='source'
          position={Position.Bottom}
          id={`${data.id}.bottom`}
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
        <Handle type='target' position={Position.Top} id={`${data.id}.top`} />
        <div id={data.id} className='triangle-node-text'>
          {data.label}
        </div>
        <Handle
          type='source'
          position={Position.Bottom}
          id={`${data.id}.bottom`}
        />
        <Handle
          type='source'
          position={Position.Left}
          id={`${data.id}.bottom`}
        />
        <Handle
          type='source'
          position={Position.Right}
          id={`${data.id}.right`}
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
