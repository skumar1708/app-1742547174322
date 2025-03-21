export const fetchImage = async () => {
  try {
    const response = await fetch('/api/image');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};