import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const history = useHistory();
  const initVal = {
    userName: "",
    email: "",
    comments: "",
  };
  const [Val, setVal] = useState(initVal);
  const [Err, setErr] = useState({});
  const [Success, setSuccess] = useState(false);
  const [Submit, setSubmit] = useState(false);

  const check = (Val) => {
    const errs = {};

    //userName인증처리
    if (Val.userName.length < 5) {
      errs.userName = "Please enter 5 or more characters.";
    }
    if (Val.comments.length < 20) {
      errs.comments = "Please enter at least 20 characters.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...Val, [name]: value });
  };

  const handleReset = () => {
    setSubmit(false);
    setErr({});
    setVal(initVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(check(Val));
  };

  useEffect(() => {
    const len = Object.keys(Err).length;
    if (len === 0 && Submit) {
      setSuccess(true);
      history.push("/");
    } else {
      setSuccess(false);
    }
  }, [Err]);

  return (
    <article className="contactForm">
      <div className="inner">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="h">Send Message Form</legend>
            <table>
              <caption className="h">Send Message Form</caption>
              <tbody>
                {/* userName */}
                <tr>
                  <th scope="row">
                    <label htmlFor="userName">User Name</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Enter your name."
                      value={Val.userName}
                      onChange={handleChange}
                    />
                    <span className="err">{Err.userName}</span>
                  </td>
                </tr>
                {/* email */}
                <tr>
                  <th scope="row">
                    <label htmlFor="email">E-mail</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      id="emial"
                      name="email"
                      placeholder="Enter your Email."
                      value={Val.email}
                      onChange={handleChange}
                    />
                    <span className="err">{Err.email}</span>
                  </td>
                </tr>

                {/* comments */}
                <tr>
                  <th scope="row">
                    <label htmlFor="comments">Message</label>
                  </th>
                  <td>
                    <textarea
                      name="comments"
                      id="comments"
                      cols="30"
                      rows="10"
                      value={Val.comments}
                      onChange={handleChange}
                    ></textarea>
                    <span className="err">{Err.comments}</span>
                  </td>
                </tr>

                {/* btnSet */}
                <tr>
                  <th colSpan="2">
                    <input type="reset" value="Cancel" onClick={handleReset} />
                    <input
                      type="submit"
                      value="Submit"
                      onClick={() => setSubmit(true)}
                    />
                  </th>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </div>
    </article>
  );
};

export default ContactForm;
