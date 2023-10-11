'use client'
import * as Tabs from '@radix-ui/react-tabs'
import TabItem from './TabItem'
import { useState } from 'react'

interface SettingsTabsProps {}

const SettingsTabs: React.FC<SettingsTabsProps> = () => {
  const [currentTab, setCurrentTab] = useState('tab1')

  const tabs = [
    'My details',
    'Profile',
    'Password',
    'Team',
    'Plan',
    'Billing',
    'Email',
    'Notifications',
    'Intergatons',
    'API',
  ]

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabs.map((tabTitle, index) => (
          <TabItem
            key={`tab-${index}`}
            value={`tab-${index}`}
            title={tabTitle}
            isSelected={currentTab === `tab-${index}`}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}

export default SettingsTabs
