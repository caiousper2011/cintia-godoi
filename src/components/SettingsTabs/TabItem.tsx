'use client'
import { motion } from 'framer-motion'

import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

const TabItem: React.FC<TabItemProps> = ({
  value,
  title,
  isSelected = false,
}) => {
  return (
    <Tabs.Trigger
      value={value}
      className="text-small relative px-1 pb-4 font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="whitespace-nowrap">{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}

export default TabItem
