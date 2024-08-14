export default (text: string | null): string => {
  if (text === null) {
    return "0 minutes";
  }

  // Remove HTML tags using a regular expression
  const plainText = text.replace(/<[^>]*>/g, "");

  // Split the text into words and count them
  const words = plainText.trim().split(/\s+/).length;

  // Average reading speed (words per minute)
  const wordsPerMinute = 200;

  // Calculate and return reading time in minutes
  const minutesToRead = Math.ceil(words / wordsPerMinute);
  return minutesToRead === 1
    ? minutesToRead + " minute"
    : minutesToRead + " minutes";
};
