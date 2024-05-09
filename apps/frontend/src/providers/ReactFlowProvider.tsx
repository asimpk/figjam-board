'use client'
import { ReactFlowProvider } from 'reactflow'

export const ProviderFlow = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='h-full w-full'>
      <ReactFlowProvider>{children}</ReactFlowProvider>
    </div>
  )
}
