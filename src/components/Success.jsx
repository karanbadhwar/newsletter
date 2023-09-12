import checkImg from "../public/images/icon-success.svg";
import { useFormContext } from "../Context/FormContext";
function Success() {
  const { setIsSuccess, email } = useFormContext();
  return (
    <div className="success-section bg-White max-w-3xl min-w-xl w-1/2 rounded-2xl flex flex-col gap-3 justiy-center m-auto p-10 box-border text-left">
      <img src={checkImg} alt="Check Icon SVG" className="w-10" />
      <h1 className="">Thanks for subscribing!</h1>
      <p className="">
        A confirmation email has been sent{" "}
        <span className="text-tomato font-bold">{email}</span>. Please open it
        and click the button inside to confirm for subscription
      </p>
      <button
        type="button"
        onClick={() => setIsSuccess(false)}
        className="bg-dark-navy hover:bg-tomato hover:border-0"
      >
        Dismiss message
      </button>
    </div>
  );
}

export default Success;
