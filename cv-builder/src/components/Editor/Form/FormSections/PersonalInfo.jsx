function Personal() {
  return (
    <div className="personal-container">
      <div className="personal-input-container">
        <div className="form-field">
          <label>
            <span>Full Name</span>
          </label>
          <input type="text" name="name" placeholder="John Doe" />
        </div>
        <div className="form-field">
          <label>
            <span>
              Job Title <span>optional</span>
            </span>
          </label>
          <input
            type="text"
            name="job-title"
            placeholder="Principal Software Engineer"
          />
        </div>
        <div className="form-field">
          <label>
            <span>Email</span>
          </label>
          <input type="email" name="email" placeholder="johndoe@xyz.com" />
        </div>
        <div className="form-field">
          <label>
            <span>
              Phone <span>optional</span>
            </span>
          </label>
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
            placeholder="0948-864-319"
          />
        </div>
        <div className="form-field">
          <label>
            <span>
              Address <span>optional</span>
            </span>
          </label>
          <input
            type="address"
            name="address"
            placeholder="Blue Island, Metaverse"
          />
        </div>
        <div className="form-field">
          <label>
            <span>
              Summary <span>optional</span>
            </span>
          </label>
          <textarea
            name="summary"
            placeholder="As a Principal Software Engineer, I excel in designing and developing robust and scalable software solutions ..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Personal;
