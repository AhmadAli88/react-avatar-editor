import { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

const CustomStyles = () => {
  const editorRef = useRef(null);

  // Save the cropped image
  const handleSave = () => {
    if (editorRef.current) {
      try {
        const canvas = editorRef.current.getImageScaledToCanvas(); // Get scaled image canvas
        const dataURL = canvas.toDataURL('image/png'); // Export to base64
        console.log('Cropped Image Data URL:', dataURL);
        alert('Image successfully saved. Check the console for base64 data.');
      } catch (error) {
        console.error('Error saving the image:', error);
        alert('Failed to save the image.');
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>Avatar Editor with Placeholder</h2>

      {/* Avatar Editor with Placeholder Image */}
      <div style={{ display: 'inline-block', margin: '20px 0' }}>
        <AvatarEditor
          ref={editorRef}
          image='https://via.placeholder.com/300' // Placeholder image URL
          width={150}
          height={150}
          border={10}
          borderRadius={75} // Makes the image circular
          style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }} // Adds shadow effect
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Save Image
      </button>
    </div>
  );
};

export default CustomStyles;
