import "./App.css";
import { Introducao } from "./pages/Introducao";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#986977",
          },
        }}
      >
        <Introducao />
      </ConfigProvider>
    </>
  );
}

export default App;
