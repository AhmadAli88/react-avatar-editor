import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const UploadAvatarEditor = () => {
  const editorRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();
      console.log(canvas);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <AvatarEditor
          ref={editorRef}
          image={image}
          width={200}
          height={200}
          border={50}
          borderRadius={100}
          scale={1.2}
          rotate={0}
        />
      )}
      <button onClick={handleSave}>Save Avatar</button>
    </div>
  );
};

export default UploadAvatarEditor;
