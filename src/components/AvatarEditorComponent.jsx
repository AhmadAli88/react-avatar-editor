import { useRef } from 'react';
import AvatarEditor from 'react-avatar-editor';

const AvatarEditorComponent = () => {
  const editorRef = useRef(null);

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      const imageData = canvas.toDataURL(); // Get the cropped image as a base64 string
      console.log(imageData); // You can use it or upload it to a server
    }
  };

  return (
    <div>
      <AvatarEditor
        ref={editorRef}
        image='https://via.placeholder.com/300'
        // crossOrigin="anonymous" 
        width={200}
        height={200}
        border={50}
        borderRadius={100} // Circular avatar
        scale={1.2} // Zoom level
        rotate={0} // Rotation in degrees
      />
      <button onClick={handleSave}>Save Avatar</button>
    </div>
  );
};

export default AvatarEditorComponent;
