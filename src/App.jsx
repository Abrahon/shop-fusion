
import { router } from "./Routes/Routes/Routes";

import { RouterProvider } from "react-router";



// import Button from '@mui/material/Button';
const App = () => {

  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;