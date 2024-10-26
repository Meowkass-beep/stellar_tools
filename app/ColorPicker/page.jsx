import Layout from '../components/Layout';
import ColorPicker from './ColorPicker';

const ColorPickerPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Color Picker</h1>
      <ColorPicker />
    </Layout>
  );
};

export default ColorPickerPage;
