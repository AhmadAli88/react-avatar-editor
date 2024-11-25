import  { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const AvatarEditorComponent = () => {
  const editorRef = useRef(null);
  const [image, setImage] = useState(null); // State to store uploaded image
  const [scale, setScale] = useState(1.2); // State for image zoom level

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a local URL for the file
    }
  };

  // Function to save the cropped image
  const handleSave = () => {
    if (editorRef.current) {
      try {
        const canvas = editorRef.current.getImageScaledToCanvas(); // Scaled image canvas
        const dataURL = canvas.toDataURL('image/png'); // Export to base64
        console.log('Cropped Image Data URL:', dataURL);
        alert('Image successfully saved. Check the console for base64 data.');
      } catch (error) {
        console.error('Error saving the image:', error);
        alert('Failed to save the image. Ensure the image source supports cross-origin access.');
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>React Avatar Editor</h2>
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Avatar Editor */}
      {image && (
        <div style={{ margin: '20px 0' }}>
          <AvatarEditor
            ref={editorRef}
            image={image}
            crossOrigin="anonymous" // Important for handling CORS
            width={250}
            height={250}
            border={50}
            borderRadius={125} // Circular cropping
            scale={scale} // Zoom level
            rotate={0} // No rotation
          />
          <div style={{ marginTop: '10px' }}>
            <label>
              Zoom:
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
        </div>
      )}

      <button onClick={handleSave} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Save Image
      </button>
    </div>
  );
};

export default AvatarEditorComponent;
