const { createRoot } = ReactDOM;
const { useState, useRef, useEffect } = React;

function App() {
  return (
    <div className="full-height">
      <Form />
    </div>
  );
}

function Form() {
  const [currentPage, setCurrentPage] = useState(0);

  const form = [<FirstForm />, <SecondForm />, <ThirdForm />];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [nameError, setNameError] = useState(".");
  const [emailError, setEmailError] = useState(".");
  const [phoneError, setPhoneError] = useState(".");
  const [companyError, setCompanyError] = useState(".");
  const [nameClass, setNameClass] = useState("validation-hidden");
  const [emailClass, setEmailClass] = useState("validation-hidden");
  const [phoneClass, setPhoneClass] = useState("validation-hidden");
  const [companyClass, setCompanyClass] = useState("validation-hidden");
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const companyInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current && !nameInputRef.current.value) {
      nameInputRef.current.focus();
    } else if (emailInputRef.current && !emailInputRef.current.value) {
      emailInputRef.current.focus();
    } else if (emailInputRef.current && !emailInputRef.current.value) {
      emailInputRef.current.focus();
    }
  }, []);

  const isValidEmail = (email) => {
    return email.endsWith("@gmail.com");
  };

  const isValidPhone = (phone) => {
    // validasi nomor diawali angka 08
    if (!phone.startsWith("08")) {
      return false;
    }

    // validasi nomor minimal 10 dan max 12 digit
    const digitOnly = phone.replace(/\D/g, "");
    if (digitOnly.length < 10 || digitOnly.length > 12) {
      return false;
    } else {
      setPhoneError("");
    }

    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
      if (!value) {
        setNameError("Name is Required");
        setNameClass("validation-show");
      } else {
        setNameClass("validation-hidden");
      }
    }

    if (name === "email") {
      setEmail(value);
      if (!value) {
        setEmailError("Email is Required");
        setEmailClass("validation-show");
      } else if (isValidEmail(value) === false) {
        setEmailError("Email is invalid");
        setEmailClass("validation-show");
      } else {
        setEmailClass("validation-hidden");
      }
    }

    if (name === "phone") {
      setPhone(value);
      if (!value) {
        setPhoneError("Phone Number is Required");
        setPhoneClass("validation-show");
      } else if (isValidPhone(value) === false) {
        setPhoneError("Phone Number is Invalid");
        setPhoneClass("validation-show");
      } else {
        setPhoneClass("validation-hidden");
      }
    }

    if (name === "company") {
      setCompany(value);
      if (!value) {
        setCompanyError("Company is Required");
        setCompanyClass("validation-show");
      } else {
        setCompanyClass("validation-hidden");
      }
    }
  };

  const handleSubmit = (event) => {
    const value = event.target;
    event.preventDefault();
    if (!name) {
      setNameError("Name is Required");
      setNameClass("validation-show");
      nameInputRef.current.focus();
      return;
    }

    if (!email) {
      setEmailError("Email is Required");
      setEmailClass("validation-show");
      emailInputRef.current.focus();
      return;
    } else if (isValidEmail(email) === false) {
      setEmailError("Email is invalid");
      setEmailClass("validation-show");
    }

    if (!phone) {
      setPhoneError("Phone Number is Required");
      setPhoneClass("validation-show");
      phoneInputRef.current.focus();
      return;
    } else if (isValidPhone(phone) === false) {
      setPhoneError("Phone Number is Invalid");
      setPhoneClass("validation-show");
      return;
    }

    if (!company) {
      setCompanyError("Company is Required");
      setCompanyClass("validation-show");
      companyInputRef.current.focus();
      return;
    }
  };

  return (
    <form className="container-width full-height" onSubmit={handleSubmit}>
      <div className="container">
        <div className="header-form">
          <h1 className="text-center mb-5">Get a project quote</h1>
          <p className="text-center">
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </div>
        <div className="card">
          <Stepper />
          <hr />
          {form[currentPage]}
        </div>
        <div className="position-right">
          <button className="btn-primary">Next step</button>
        </div>
      </div>
    </form>
  );
}

function FirstForm({
  handleChange,
  nameInputRef,
  nameError,
  email,
  emailInputRef,
  emailError,
  phone,
  phoneInputRef,
  phoneError,
  company,
  companyInputRef,
  companyError,
  name,
  emailClass,
  nameClass,
  companyClass,
  phoneClass,
}) {
  return (
    <div id="step-1">
      <h3>Contact details</h3>
      <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisc.</p>
      <div className="grid">
        <div className="group-flex">
          <label className="label-flex">
            Nama
            <div className="group-input">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                ref={nameInputRef}
              />
              <img
                src="/public/images/svg/person.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          {nameError && <p className={nameClass}>{nameError}</p>}
        </div>
        <div className="group-flex">
          <label className="label-flex">
            Email
            <div className="group-input">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                ref={emailInputRef}
              />
              <img
                src="/public/images/svg/email.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          {emailError && <p className={emailClass}>{emailError}</p>}
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
                value={phone}
                onChange={handleChange}
                ref={phoneInputRef}
              />
              <img
                src="/public/images/svg/phone.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          {phoneError && <p className={phoneClass}>{phoneError}</p>}
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
                value={company}
                onChange={handleChange}
                ref={companyInputRef}
              />
              <img
                src="/public/images/svg/company.svg"
                className="ico-input"
                alt=""
              />
            </div>
          </label>
          {companyError && <p className={companyClass}>{companyError}</p>}
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

function Stepper() {
  return (
    <div className="step-group">
      <div className="step active">1</div>
      <div className="line"></div>
      <div className="step">2</div>
      <div className="line"></div>
      <div className="step">3</div>
      <div className="line"></div>
      <div className="step">4</div>
    </div>
  );
}
const root = document.querySelector("#root");
createRoot(root).render(<App />);
