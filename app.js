import React from 'react';
import SearchFilterPanel from './SearchFilterPanel';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
        PinpointPro Dashboard
      </h1>
      
      {/* This renders your search and filter tool */}
      <SearchFilterPanel />
    </div>
  );
}
