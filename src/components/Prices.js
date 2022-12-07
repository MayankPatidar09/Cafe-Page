import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="data:image/jpeg;base64,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" alt="pizza" />
              </div>
              <h1 className="price__heading">Adrak Tea</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">Starting @ ₹10.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="data:image/jpeg;base64,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" alt="pizza" />
              </div>
              <h1 className="price__heading">Elaichi Tea</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">Starting @ ₹10.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="data:image/jpeg;base64,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" alt="pizza" />
              </div>
              <h1 className="price__heading">Paan Tea</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">Starting @ ₹15.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="data:image/jpeg;base64,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" alt="pizza" />
              </div>
              <h1 className="price__heading">Sandwich</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">Starting @ ₹30.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="data:image/jpeg;base64,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" alt="pizza" />
              </div>
              <h1 className="price__heading">Burger</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">Starting @ ₹35.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="data:image/jpeg;base64,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" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">Starting @ ₹80.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
