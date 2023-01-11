import * as React from 'react';
import Accordion from './components/accordion';
import LongContent from './components/longContent';
import Spacing from './components/spacing';
import './style.css';

const componentMap = {
  LongContent: {
    component: LongContent,
  },
  Spacing,
};

export default function App() {
  return (
    <div>
      <Accordion title="Long content">long content</Accordion>
    </div>
  );
}
