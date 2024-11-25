import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const AvatarEditorWithPreview = () => {
  const editorRef = useRef(null);
  const [previewSrc, setPreviewSrc] = useState(null);

  // Handle Save and Update Preview
  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas(); // Get the scaled image
      const dataURL = canvas.toDataURL(); // Convert to base64
      setPreviewSrc(dataURL); // Set preview source
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>Avatar Editor with Live Preview</h2>

      {/* Avatar Editor */}
      <div style={{ display: 'inline-block', margin: '20px 0' }}>
        <AvatarEditor
          ref={editorRef}
          image="../src/assets/image1.jpg" // Placeholder image
          width={150}
          height={150}
          border={10}
          borderRadius={75}
          style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}
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
          marginTop: '20px',
        }}
      >
        Generate Preview
      </button>

      {/* Preview Section */}
      {previewSrc && (
        <div style={{ marginTop: '20px' }}>
          <h3>Preview</h3>
          <img
            src={previewSrc}
            alt="Avatar Preview"
            style={{
              borderRadius: '50%',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
              width: '150px',
              height: '150px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AvatarEditorWithPreview;
