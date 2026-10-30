import React, { useState } from 'react';

// Example data structure representing items in your repo (e.g., products, tools, files)
const SAMPLE_DATA = [
  { id: 1, name: 'Git Cheat Sheet', category: 'Documentation', tags: ['git', 'vcs'] },
  { id: 2, name: 'React Search Component', category: 'Code', tags: ['frontend', 'react'] },
  { id: 3, name: 'Python Data Script', category: 'Code', tags: ['backend', 'python'] },
  { id: 4, name: 'Open Source Contribution Guide', category: 'Documentation', tags: ['git', 'help'] },
  { id: 5, name: 'Figma UI Kit', category: 'Design', tags: ['ux', 'ui'] },
];

export default function SearchFilterPanel() {
  // 1. State management for inputs
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 2. Combined Search and Filter Logic
  const filteredItems = SAMPLE_DATA.filter((item) => {
    // Match search query against name or tags
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    // Match selected dropdown category
    const matchesCategory = 
      selectedCategory === 'All' || item.category === selectedCategory;

    // Item must pass both tests to show up
    return matchesSearch && matchesCategory;
  });

  // Extract unique categories dynamically for the dropdown dropdown
  const categories = ['All', ...new Set(SAMPLE_DATA.map(item => item.category))];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Controls Section */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        
        {/* Text Search Input */}
        <input
          type="text"
          placeholder="Search by name or tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />

        {/* Category Filter Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', background: '#fff' }}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Results Display Section */}
      <div>
        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
          Results ({filteredItems.length})
        </h3>
        
        {filteredItems.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>No items match your criteria.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredItems.map(item => (
              <li key={item.id} style={{ padding: '12px', borderBottom: '1px solid #f0f0f0' }}>
                <strong style={{ fontSize: '1.1em' }}>{item.name}</strong>
                <div style={{ marginTop: '5px' }}>
                  <span style={{ fontSize: '0.8em', background: '#e0e0e0', padding: '3px 8px', borderRadius: '12px', marginRight: '5px' }}>
                    {item.category}
                  </span>
                  {item.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.8em', color: '#0066cc', marginRight: '5px' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
