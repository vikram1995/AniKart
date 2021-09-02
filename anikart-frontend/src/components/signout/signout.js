import { useAuth } from '../auth/auth'
import {useHistory} from "react-router-dom";

function SignOut() {
    let history = useHistory();
    let auth = useAuth();
  
    return auth.user ? (
      <p style={{color: "white"}}>
        Welcome!{"vikram"}
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }

  export default SignOut;