import { EmailOutlined, LockOutlined, PersonOutline } from "@mui/icons-material";
import Link from "next/link";

const Form = ({ type }) => {
  return (
    <div className="auth">
      <div className="content">
        <img src="/assets/logo.png" alt="logo" className="logo" />

        <form className="form">
          {type === "register" && (
            <div className="input">
              <input
                type="text"
                placeholder="Username"
                className="input-field"
              />
              <PersonOutline sx={{ color: "#737373" }} />
            </div>
          )}

          <div className="input">
            <input type="email" placeholder="Email" className="input-field" />
            <EmailOutlined sx={{ color: "#737373" }} />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" className="input-field" />
            <LockOutlined sx={{ color: "#737373" }} />
          </div>
          <button className="button" type='submit' >
            {type === 'register' ? "Join Free":"Let's Chat"}
          </button>
        </form>
        {type === 'register' ? (
          <Link href="/" className="link">
            <p> Already have an account? Sign in Here</p>
           </Link>
        ):(
          <Link href="/register" className="link">
            <p>Don't have an account? Registere Here </p> 
          </Link>
        )
        }
      </div>
    </div>
  );
};

export default Form;
