import Layout from "../components/Layout";
import Clock from "./Clock";

const ClockPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-between min-h-[70vh]">
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-3xl font-bold text-center">Clock</h1>
          <Clock />
        </div>
      </div>
    </Layout>
  );
};

export default ClockPage;
