import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './components/Tabs/Types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tab, setTab] = useState<Tab>(tabs[0]);
  const onTabSelected = (ta: Tab) => {
    const foundTab = tabs.find(t => t.id === ta.id);

    if (foundTab) {
      setTab(foundTab);
    } else {
      setTab(tabs[0]);
    }
  };

  return (
    <>
      <div className="section">
        <h1 className="title">Selected tab is {tab.title}</h1>

        <Tabs
          tabs={tabs}
          onTabSelected={onTabSelected}
          selectedTabId={tab.id}
        />
      </div>
    </>
  );
};
