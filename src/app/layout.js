import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube Video Downloader | Download Youtube Shorts, Videos, Post - YouTube Video Downloader",
  description:
    "YouTube Video Downloader | Download Youtube Shorts, Videos, Post - YouTube Video Downloader",
  icon: "/logo.jpg",
};

export default function RootLayout({ children }) {
  let schemadata = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: "YouTube Video Downloader",
    url: "https://youtube-video-downloader51.vercel.app/",
  };
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/<generated>"
        sizes="<generated>"
      />
      <meta name="google-adsense-account" content="ca-pub-8683978034260199"></meta>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemadata) }}
      />
     
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VZQRFRCY3D"></script>


      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8683978034260199"
     crossorigin="anonymous"></script>
      
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SWE4XHH1YZ"></script>
       
      <body className={inter.className}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Navbar />
        {children}
                  <GoogleAnalytics gaId="G-VZQRFRCY3D" />
        <Footer />
      </body>
    </html>
  );
}
