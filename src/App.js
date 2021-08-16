import { Route } from "react-router";

import NewPostPage from "./Components/NewPostPage";
import PostPage from "./Components/PostPage";
import PraktikPage from "./Components/PraktikPage";
import UserPage from "./Components/UserPage";

function App() {
  return (
    <>
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
