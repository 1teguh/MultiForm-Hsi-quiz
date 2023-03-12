const { createRoot } = ReactDOM;
const { useState, useRef, useEffect } = React;

function App() {
  return (
    <div className="full-height">
      <Form />
    </div>
  );
}

const ParentProps = React.createContext();

function Form() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [ovalStep1, setOvalStep1] = useState("step active");
  const [progress1, setProgress1] = useState("w-50");
  const [ovalStep2, setOvalStep2] = useState("step");
  const [progress2, setProgress2] = useState("");
  const [ovalStep3, setOvalStep3] = useState("step");
  const [progress3, setProgress3] = useState("");
  const [ovalStep4, setOvalStep4] = useState("step");
  const [classBack, setClassBack] = useState("btn-secondary hide");
  const [nameNext, setNameNext] = useState("")
  useEffect(() => {
    switch (currentPage) {
      case 1:
        setClassBack("btn-secondary")
        setProgress1("w-100");
        setOvalStep2("step active");
        setProgress2("w-50");
        setProgress3("")
        break;
      case 2:
        setClassBack("btn-secondary")
        setProgress1("w-100");
        setOvalStep2("step active");
        setProgress2("w-100");
        setOvalStep3("step active");
        setProgress3("w-50");
        break;
      case 3:
        setClassBack("btn-secondary")
        setProgress1("w-100");
        setOvalStep2("step active");
        setProgress2("w-100");
        setOvalStep3("step active");
        setProgress3("w-100");
        setOvalStep4("step active");
        setNameNext("Submit")
        break;

      default:
        setClassBack("btn-secondary hide")
        setOvalStep1("step active");
        setOvalStep2("step");
        setOvalStep3("step");
        setOvalStep4("step");
        setProgress1("w-50");
        setProgress2("");
        setProgress3("");
        setNameNext("Next Step");
        break;
    }
  });

  const form = [<FirstForm />, <SecondForm />, <ThirdForm />, <FourForm />];

  const handleBack = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage === 3) {
      handleSubmit();
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = () => {
    alert('ini Tombol Submit');
  }
  const stepProps = {
    ovalStep1,
    setOvalStep1,
    progress1,
    setProgress1,
    ovalStep2,
    setOvalStep2,
    progress2,
    setProgress2,
    ovalStep3,
    setOvalStep3,
    progress3,
    setProgress3,
    ovalStep4,
    setOvalStep4,
  };

  return (
    <form className="container-width full-height">
      <div className="container">
        <Header />
        <div className="card">
          <Stepper {...stepProps} />
          <hr />
          {form[currentPage]}
        </div>
        <div className="position-right">
          <button className={classBack} onClick={handleBack}>
            Previous Step
          </button>
          <button className="btn-primary" onClick={handleNext}>
            {nameNext}
          </button>
        </div>
      </div>
    </form>
  );
}

function FirstForm() {
  return (
    <div id="step-1">
      <h3>Contact details</h3>
      <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisc.</p>
      <div className="grid">
        <div className="group-flex">
          <label className="label-flex">
            Nama
            <div className="group-input">
              <input type="text" name="name" id="name" placeholder="Name" />
              <img
                src="/public/images/svg/person.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          <p className="validation-show">Name is Required</p>
        </div>
        <div className="group-flex">
          <label className="label-flex">
            Email
            <div className="group-input">
              <input type="email" name="email" id="email" placeholder="Email" />
              <img
                src="/public/images/svg/email.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          <p className="validation-show">Email is Required</p>
        </div>
        <div className="group-flex">
          <label className="label-flex">
            Phone Number
            <div className="group-input">
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
              <img
                src="/public/images/svg/phone.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          <p className="validation-show">Phone Number is Required</p>
        </div>
        <div className="group-flex">
          <label className="label-flex">
            Company
            <div className="group-input">
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company"
              />
              <img
                src="/public/images/svg/company.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          <p className="validation-show">Company is Required</p>
        </div>
      </div>
    </div>
  );
}

function SecondForm() {
  return <div>SecondForm</div>;
}

function ThirdForm() {
  return <div>ThirdForm</div>;
}

function FourForm() {
  return <div>FourForm</div>;
}

function Header() {
  return (
    <div className="header-form">
      <h1 className="text-center mb-5">Get a project quote</h1>
      <p className="text-center">
        Please fill the form below to receive a quote for your project. Feel
        free to add as much detail as needed.
      </p>
    </div>
  );
}

function Stepper(props) {
  return (
    <div className="step-group">
      <div className={props.ovalStep1}>1</div>
      <div id="progress-bar" className={props.progress1}></div>
      <div className={props.ovalStep2}>2</div>
      <div id="progress-bar" className={props.progress2}></div>
      <div className={props.ovalStep3}>3</div>
      <div id="progress-bar" className={props.progress3}></div>
      <div className={props.ovalStep4}>4</div>
    </div>
  );
}
const root = document.querySelector("#root");
createRoot(root).render(<App />);
