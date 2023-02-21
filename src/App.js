import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/LoginPage";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";

//*Flow
//전체상품 페이지, 로그인 페이지, 상품 상세페이지
//전체상품 페이지는 전체 상품을 볼 수 있다.
//로그인 버튼을 누르면 로그인 페이지로 이동
//상품페이지를 눌렀으나 로그인이 안 되어 있을 경우 로그인 페이지가 먼저 나온다
//로그인이 되어있을 경우 상품 디테일 페이지를 볼 수 있다
//로그아웃버튼을 클릭하면 로그아웃 된다
//로그아웃이 되면 상품 디테일 페이지를 볼 수 없다
//로그인을 하면 로그 아웃이 보인다, 로그아웃을 하면 로그인이 보인다
//상품을 검색 할 수 있다

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductAll />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
