export const formatDateForInput = (dateString?: string): string => {
  if (!dateString) return '';
  
  try {
    // Check if it's already in YYYY-MM-DD format
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    
    // For ISO datetime strings, extract just the date part
    if (dateString.includes('T')) {
      return dateString.split('T')[0];
    }
    
    // For other formats, parse as local date
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    // Use local date methods to avoid timezone conversion
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  } catch {
    return '';
  }
};