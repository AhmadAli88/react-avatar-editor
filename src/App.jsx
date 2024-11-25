import './App.css';
import AdjustableAvatarEditor from './components/AdjustableAvatarEditor';
import AvatarEditorComponent from './components/AvatarEditorComponent';
import AvatarEditorWithPreview from './components/AvatarEditorWithPreview';
import CustomStyles from './components/CustomStyles';
import UploadAvatarEditor from './components/UploadAvatarEditor';

function App() {
  return <div>
    <AvatarEditorComponent/>
    <UploadAvatarEditor/>
    <AdjustableAvatarEditor/>
    <CustomStyles/>
    <AvatarEditorWithPreview />
  </div>;
}

export default App;
