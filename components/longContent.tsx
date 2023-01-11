import * as React from 'react';

export default function LongContent({ title, children }) {
  return (
    <details>
      <summary>{title}</summary>
      <main>{children}</main>
    </details>
  );
}
