import "../Styles/all.css"
import "../Styles/new.css"
function Newsletter() {
  return (
    <div className="new m-2 rounded">
      <div className="newsletter-subscribe mt-5 container">
        <div className="intro text-center">
          <h2 className="newsletter">Subscribe to our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>

        <form className="form-inline" method="post">
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary mt-2" type="button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
