// utils/highlight.js
export const highlightText = (text, searchTerm) => {
  if (!searchTerm || !text) return text;

  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, '<span class="highlighted">$1</span>');
};


/*

// utils/highlight.js
export const highlightText = (text, searchTerm) => {
  if (!searchTerm || !text || typeof text !== 'string') return text;
  
  try {
    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    return text.replace(regex, '<span class="highlighted">$1</span>');
  } catch (e) {
    console.error('Highlight error:', e);
    return text;
  }
};

export const highlightObject = (obj, searchTerm, fields = []) => {
  if (!searchTerm) return obj;
  
  return {
    ...obj,
    ...fields.reduce((acc, field) => {
      if (obj[field]) {
        acc[field] = highlightText(obj[field], searchTerm);
      }
      return acc;
    }, {})
  };
};

*/