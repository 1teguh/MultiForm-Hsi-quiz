<div className="container">
        <div className="header-form">
          <h1 className="text-center mb-5">Get a project quote</h1>
          <p className="text-center">
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed.
          </p>
        </div>
      </div>
      <div className="container card">
        <div className="step-group">
          <div className="step active">1</div>
          <div className="line"></div>
          <div className="step">2</div>
          <div className="line"></div>
          <div className="step">3</div>
          <div className="line"></div>
          <div className="step">4</div>
        </div>
        <hr />
        <div id="1">
          <h3>Contact details</h3>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisc.
          </p>
          <div className="grid">
            <div className="mb-10 group-flex">
              <label for="name" className="label-flex">
                Name
                <div className="group-input">
                  <input type="text" placeholder="Name" id="name" name="name"/>
                  <img
                    src="/public/images/svg/person.svg"
                    className="ico-input"
                    alt=""
                  />
                </div>
              </label>
              <p className="hidden" id="errorName">Silakan input nama</p>
            </div>
            <div className="mb-10 group-flex">
              <label for="name" className="label-flex">
                Email
                <div className="group-input">
                  <input type="email" placeholder="Email" id="email" name="email"/>
                  <img
                    src="/public/images/svg/email.svg"
                    className="ico-input"
                    alt=""
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="position-right">
        <button className="btn-primary">Next step</button>
      </div>