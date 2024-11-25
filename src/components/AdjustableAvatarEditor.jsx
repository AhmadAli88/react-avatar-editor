import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

const AdjustableAvatarEditor = () => {
  const editorRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas().toDataURL();
      console.log(canvas);
    }
  };

  return (
    <div>
      <AvatarEditor
        ref={editorRef}
        image="https://via.placeholder.com/300"
        width={200}
        height={200}
        border={50}
        borderRadius={100}
        scale={scale}
        rotate={rotate}
      />
      <div>
        <label>
          Zoom:
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Rotate:
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={rotate}
            onChange={(e) => setRotate(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleSave}>Save Avatar</button>
    </div>
  );
};

export default AdjustableAvatarEditor;
