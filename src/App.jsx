import "./App.css";
import Form from "./components/Form";
import Banner from "./components/Banner";
import { useFormContext } from "./Context/FormContext";
import Success from "./components/Success";

function App() {
  const { isSuccess } = useFormContext();

  if (isSuccess) {
    return <Success />;
  }

  return (
    <main className="md:gap-5 md:py-4 w-full bg-white rounded-2xl box-border h-full flex flex-col-reverse md:flex-row">
      <div className="left-section box-border my-5 m-auto w-5/6 md:py-5 md:px-4 md:mt-10 md:max-w-md md:ml-10 md:mr-10">
        <Form />
      </div>
      <div className="right-section md:mr-5">
        <Banner />
      </div>
    </main>
  );
}

export default App;
