import * as React from 'react';

export default function Spacing({ title, children }) {
  return (
    <details>
      <summary>{title}</summary>
      <main>{children}</main>
    </details>
  );
}
