import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>MovieApp</title>
      </head>
      <body>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
