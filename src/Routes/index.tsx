import { Route, Routes } from "react-router-dom";
import { ILoginInfo } from "../Header/Header.type";
import MainPage from "../Pages/MainPage";
import SharePage from "../Pages/SharePage";

interface IMainRouteProps {
  loginInfo: ILoginInfo | null;
}

function MainRoute(props: IMainRouteProps) {
  const { loginInfo } = props;

  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/share" element={<SharePage loginInfo={loginInfo} />} />
    </Routes>
  );
}

export default MainRoute;
