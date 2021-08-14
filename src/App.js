import { Route } from "react-router";
import PostPage from "./Components/PostPage";
import PraktikPage from "./Components/PraktikPage";
import UserPage from "./Components/UserPage";

function App() {
  return (
    <>
      <h2>ds</h2>
      {/* <UserPage /> */}
      {/* <PraktikPage /> */}
      <Route path="/" exact component={UserPage} />
      <Route path="/posts" exact component={PraktikPage} />
      <Route path="/post" exact component={PostPage} />
    </>
  );
}

export default App;
