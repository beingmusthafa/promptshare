import Navbar from "@components/Navbar.jsx";
import "@styles/globals.css";
import Provider from "@components/Provider";
export const metadata = {
  title: "Promptshare",
  description: "Get superb AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app pt-20">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
