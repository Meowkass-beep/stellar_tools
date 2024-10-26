import Layout from './components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-between min-h-[70vh]">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-4xl font-bold">Welcome to Stellar Tools</h1>
          <p className="mt-4 text-lg">Select a tool from the navigation bar above.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
