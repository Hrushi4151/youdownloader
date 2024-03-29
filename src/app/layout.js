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
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  let schemadata = {
    "@context": "https://schema.org/",
    "@type": "Website",
    "name": "YouTube Video Downloader",
    "alternateName":"YouTube Video Downloader Free,YouTube Video Downloader Online",
    "url": "https://youtube-video-downloader51.vercel.app/",
    "description":"Youtube Video Download | Download YouTube Video for Free, Download Youtube Shorts Online",
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

       <script type="text/javascript">
    var atOptions = {
	      'key' : '27391ad4134e1a4f1a58facb40c0624c',
	      'format' : 'iframe',
	      'height' : 250,
	      'width' : 300,
	      'params' : {}
      };
    document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/27391ad4134e1a4f1a58facb40c0624c/invoke.js"></scr' + 'ipt>');
</script>
 
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
                  
        <Footer />
      </body>
    </html>
  );
}
