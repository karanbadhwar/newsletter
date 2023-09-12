import check from "../public/images/icon-list.svg";
import { useFormContext } from "../Context/FormContext";
import { useState } from "react";
function Form() {
  const [validEmail, setValidEmail] = useState("");
  const [error, setError] = useState(null);
  const { emailSubmit } = useFormContext();
  const submitForm = (e) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

    if (regex.test(validEmail)) {
      emailSubmit(validEmail);
    } else {
      setError("Please enter a valid email");
    }
  };

  return (
    <section className="text-left flex flex-col gap-5">
      <header className="mb-3">
        <h1 className="mb-3 text-3xl md:text-5xl">Stay Updated!</h1>
        <p>Join 60,000+ product managers recieving monthly updates on:</p>
      </header>
      <article className="flex flex-col gap-2 mb-5">
        <div className="list flex gap-2">
          <img src={check} alt="List Check SVG" className="self-start" />
          <p>Products discovery and building what matters</p>
        </div>
        <div className="list flex gap-2">
          <img src={check} alt="List Check SVG" className="self-start" />
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="list flex gap-2">
          <img src={check} alt="List Check SVG" className="self-start" />
          <p>And much more!</p>
        </div>
      </article>

      <div className="form">
        <form
          className="flex flex-col text-left gap-3"
          onSubmit={(e) => submitForm(e)}
        >
          <label
            htmlFor="email"
            className="text-xs font-bold text-dark-navy flex justify-between"
          >
            Email address
            <span
              className={`${error ? "inline-block text-red-500" : "hidden"}`}
            >
              {error}
            </span>
          </label>
          <input
            type="text"
            placeholder="email@company.com"
            id="email"
            required
            value={validEmail}
            onChange={(e) => setValidEmail(e.target.value)}
            // {email ? bg-tomato border-tomato}
            className={`${
              error
                ? " bg-red-200 border-red-400 p-3 rounded-lg text-dark-navy border-2"
                : "p-3 rounded-lg bg-White text-dark-navy border-greyish border-2"
            }`}
          />
          <button type="submit" className="bg-dark-navy btn">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
