import { Route } from "react-router";
import NewPostPage from "./Components/NewPostPage";
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
      <Route path="/posts/:postId" exact component={PraktikPage} />
      <Route path="/post/:postId" exact component={PostPage} />
      <Route path="/newPost" exact component={NewPostPage} />
      {/* <NewPostPage /> */}
    </>
  );
}

export default App;
