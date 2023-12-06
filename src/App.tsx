import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import SociolinkChatPageBlack from "./pages/SociolinkChatPageBlack";
import SociolinkChatPage from "./pages/SociolinkChatPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2":
        title = "";
        metaDescription = "";
        break;
      case "/sociolink-chat-page-black":
        title = "";
        metaDescription = "";
        break;
      case "/sociolink-chat-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame />} />
      <Route path="/frame-2" element={<Frame1 />} />
      <Route
        path="/sociolink-chat-page-black"
        element={<SociolinkChatPageBlack />}
      />
      <Route path="/sociolink-chat-page" element={<SociolinkChatPage />} />
    </Routes>
  );
}
export default App;
