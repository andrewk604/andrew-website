import "./styles.css";
import UserApi from "./api/user-api";

let App = () => {
  return (
    // <div>
    <button onClick={UserApi.getCurrentUser}>Get Current User Test</button>
    // </div>
  );
};

export default App;
