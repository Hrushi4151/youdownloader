"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [url, seturl] = useState("");
  const [durl, setdurl] = useState("");
  const [disabled, setdisabled] = useState("");
  let token = "";

  const handlechange = (e) => {
    e.preventDefault();
    seturl(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setdisabled("disabled");
    if (url) {
      if (url.startsWith("https://youtube.com")) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/gettoken`, {
          method: "POST",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: url }),
        });
        const response = await res.json();
        console.log(response.response.toString());
        if (response.response) {
          let str = response.response.toString();

          var tempDiv = document.createElement("div");

          //Set the innerHTML of the div with your HTML string
          tempDiv.innerHTML = str;

          // Get the anchor tag by its ID or any other selector
          let mylink=tempDiv.getElementsByClassName(
            "downloadSection"
          )[0].outerHTML;

          // Access the href property
          // var hrefValue = myLink.href;
          // setdurl(myLink.href)
          console.log(mylink)
          document.getElementById("mydownload").innerHTML=mylink.toString();
          setdisabled("");
          seturl("");
        } else {
          setdisabled("");
          seturl("");
          toast.error("Invalid URL. Try Again", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } else {
        setdisabled("");
        seturl("");
        toast.error("Invalid URL. Try Again", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setdisabled("");
      seturl("");
      toast.error("Enter URL", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="w-[95vw] md:w-[80vw] mx-auto flex min-h-screen  flex-col  px-6  lg:px-8 items-center">
        <div className="sm:mx-auto w-fit">
          <div className="flex justify-center items-center flex-col mt-10 mb-20">
            <h1 className="text-center text-3xl font-bold text-orange-400">
              Free   Youtube Video Downloader
            </h1>
            <h2 className="text-center font-bold text-lg">
              Download videos, Shorts, photos from Youtube
            </h2>
          </div>
          {!durl && (
            <form className="space-y-6 " action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  URL
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => handlechange(e)}
                    value={url}
                    id="url"
                    name="url"
                    type="text"
                    autoComplete="url"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 text-xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={(e) => handlesubmit(e)}
                  type="submit"
                  disabled={disabled}
                  className=" flex disabled:bg-gray-400 cursor-pointer w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {disabled == "" ? "Download" : "Loading"}
                </button>
              </div>
              <div
                className="text-center text-xl rounded-lg text-white underline border p-4"
                role="alert"
              >
                💡💡{" "}
                <Link href={"/how-to-download-Youtube-video"}>
                  How to download Youtube Video
                </Link>
              </div>
            </form>
          )}
          {/* {durl && (
            <div className="flex w-fit justify-center items-center mx-auto">
              <div className="h-auto w-auto">
                <video
                  onClick={() => alert("fgfgfg")}
                  className="w-[250px] h-[400px] object-cover"
                  src={durl && durl}
                />

                <button
                  onClick={dinwloadvideo}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 my-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-indigo-600"
                >
                  Download Video
                </button>
                <button
                  onClick={() => {
                    setdurl("");
                    setdisabled("");
                    seturl("");
                  }}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 my-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-indigo-600"
                >
                  Download Other Video
                </button>
              </div>
            </div>
          )} */}
        </div>
        <div id="mydownload" className="text-black flex justify-center items-center w-[95vw] md:w-[80vw]"></div>
        <div class="ig-section">
          <h2 class=" my-4 font-bold text-2xl">
            What is   Youtube Video Downloader?
          </h2>
          <p className="text-lg py-2">
      Youtube Video Downloader is a tool to download videos, photos, Shorts,
            stories  from Youtube online. Support download
            high-quality Youtube Video in a few simple steps.
          </p>
          <p className="text-lg py-2">
            <b>YouDownloader</b> is developed with the purpose of allow users to
            download Youtube content (Videos, Photos, Shorts, Stories)
            quickly. Just paste the Youtube link into the YouDownloader input box to
            download any Youtubecontent.
          </p>
          <p className="text-lg py-2">
            Allow download video Youtube high quality Full HD, 2K, 4K, 8K.
            Support Youtube Shortss, videos, Shorts, stories  from
            Youtube on phones, computers without install software.
          </p>
        </div>
        <div class="ig-section ig-gr-content">
          <h2 class=" my-4 font-bold text-2xl">
            YouDownloader - Best   Youtube Video Downloader 2024
          </h2>
          <p className="text-lg py-2">
            <b>What is YouDownloader?</b> YouDownloader is an   Youtube Video Downloader that allows
            to Youtube Shortss, videos, stories, Youtube Shorts  from
            Youtube in high quality. Just go to YouDownloader and follow the
            instructions to download anything on Youtube in a few easy steps.
          </p>
          <p className="text-lg py-2">
            YouDownloader is a tool to download Youtube content on a web browser,
            no software installation required. Although born later than other
      Youtube Video Downloaders, YouDownloader has many outstanding features, helping
            users to download all data on Youtube quickly.
          </p>
          <h3 class=" my-4 font-bold text-xl">Key features</h3>
          <ul class=" list-disc pl-8">
            <li>
              <a target="_blank" href="/en">
                <b>Youtube Video Downloader</b>
              </a>
              : Support download Youtube Videos in high quality: Full HD,
              1080p, 2K, 4K, 8K with sound.
            </li>
            <li>
              <a target="_blank" href="/en/Youtube-photo-downloader">
                <b>&lrm;Youtube Shorts Downloader</b>
              </a>
              : Support download Youtube Shorts from posts easily, this
              feature allows you to choose the quality and size of images before
              saving Youtube Shorts to the device.
            </li>
            <li>
              <a target="_blank" href="/en/Youtube-Shorts-downloader">
                <b>Shorts Downloader</b>
              </a>
              : This feature allows download Youtube Shorts videos in HD
              quality with sound. Support download Youtube Shorts on PC,
              iPhone, Android.
            </li>
            <li>
              <a target="_blank" href="/en/Youtube-igtv-downloader">
                <b>IGTV Downloader</b>
              </a>
              : IGTV is Youtube long time video, this feature allows you to
              download IGTV video from Youtube in high quality: 1080p, 2K, 4K,
              8K without install software.
            </li>
            <li>
              <a target="_blank" href="/en/Youtube-private-downloader">
                <b>Private Downloader</b>
              </a>
              : Allow to download Youtube post content from private account
              without any restrictions, download Videos, Photos, Shorts from private Youtube account for free.
            </li>
          </ul>
        </div>
        <div class="ig-section guide-area ig-gr-content">
          <h2 class=" my-4 font-bold text-xl">
            How to download Youtube Shorts and videos with YouDownloader
          </h2>
          <p className="text-lg py-2">
            <b>Step 1</b>: Open the Youtube app on your phone or go to the
            Youtube.com website and log in to your account.
          </p>
          <p className="text-lg py-2">
            <b>Step 2</b>: Find the content you want to download and click on
            the icon (...) above the post and then continue pressing the{" "}
            <strong>Copy Link</strong> option.
          </p>
          <p className="text-lg py-2">
            <b>Step 3</b>: Go to the website{" "}
            <a target="_blank" href="https://insta-saver.vercel.app/">
              <b>YouDownloader</b>
            </a>
            , paste the Youtube link you just copied into input box and press
            the <strong>Download</strong> button.
          </p>
          <p className="text-lg py-2">
            <b>Step 4</b>: Tap the <b>Download Video</b> or{" "}
            <b>Youtube Shorts</b> button, then the file will be saved to your
            device.
          </p>
          <p className="text-lg py-2">
            <i>
              With YouDownloader you can download any Youtube content (Videos,
              Photos, Shorts). We will continuously upgrade to bring
              you the best experience! Please share this tool with friends and
              family. Thank you!
            </i>
          </p>
          <div class="bg-gray-700 p-4 rounded-lg">
            <p className="text-lg py-2">
              Our download tool is designed to assist you in downloading videos
              and images posted by your own account. However, we reserve the
              right not to provide the service if you use this tool to violate
              the privacy and materials of others.
            </p>
            <p className="text-lg py-2">
              Read our Terms of Service{" "}
              <Link href={"/terms-and-services"}>👉here👈</Link>
            </p>
          </div>
        </div>
        <div class="ig-section section-left ig-gr-content">
          <section itemscope="" itemtype="https://schema.org/FAQPage">
            <div class="section_faq">
              <h3 class=" my-4 font-semibold text-xl">FAQ</h3>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name">What is   Youtube Video Downloader?</h4>
                <div
                  class="faq_item_content"
                  id="divId1"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text">
              Youtube Video Downloader is an Youtube post content
                    downloader, you can download Youtube Video, Photo,
                    Shorts in highest quality.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name">
                  How to download Youtube Shorts and videos online?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId2"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text">
                    <ul className="text-lg py-2">
                      <li>
                        Step 1: Paste the Youtube url into the input box and
                        press the <strong>Download</strong> button.
                      </li>
                      <li>
                        Step 2: Tap the <b>Download Video</b> or{" "}
                        <b>Youtube Shorts</b> button, then the file will be
                        saved to your device.
                      </li>
                      <li>
                        <i>
                          (YouDownloader works well on all devices (PC, Mac,
                          Android, iOS).)
                        </i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  How to download Youtube Shorts/videos on iPhone?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId3"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    For iPhone, you need to use <b>Safari</b> browser on iOS 13
                    or get <b>Documents by Readdle</b> app and go to YouDownloader
                    → Paste Youtube Video link → Download (
                    <a
                      target="_blank"
                      href="https://insta-saver.vercel.app/how-to-download-Youtube-videos-on-iphone"
                    >
                      see instructions here
                    </a>
                    ).
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  How to download Youtube Shorts/videos on Android?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId4"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Copy the Youtube link → Go to YouDownloader → Paste the
                    copied Youtube link into the input box → Download.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Can I download Youtube Shorts and videos from a private
                  account?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId5"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Absolutely, you can use{" "}
                    <a
                      target="_blank"
                      href="https://insta-saver.vercel.app/Youtube-private-downloader"
                    >
                      <b>Private Downloader</b>
                    </a>{" "}
                    feature to download Youtube Videos, photos, stories, Insta
                    Shorts  from private accounts without any problem.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Can I download videos and photos directly on Youtube?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId6"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Unfortunately, <b>Youtube</b> does not allow you to
                    download any content. You can go to the{" "}
                    <a target="_blank" href="https://insta-saver.vercel.app/">
                      YouDownloader
                    </a>{" "}
                    website and follow the instructions to download any content
                    on IG.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Do I have to pay to use YouDownloader to download Youtube Shorts
                  and videos?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId7"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Absolutely not, YouDownloader is a free   Youtube Video Downloader. You
                    can download any Youtube Video, photo, Shorts
                    and Playlist without paying any cost.
                  </div>
                </div>
              </div>
              <div
                class="faq_item"
                itemprop="mainEntity"
                itemscope=""
                itemtype="https://schema.org/Question"
              >
                <h4 itemprop="name" className="text-lg py-2 font-semibold">
                  Where are Youtube Videos and photos saved after downloading?
                </h4>
                <div
                  class="faq_item_content"
                  id="divId8"
                  itemprop="acceptedAnswer"
                  itemscope=""
                  itemtype="https://schema.org/Answer"
                >
                  <div itemprop="text" className="py-2">
                    Please check the "Downloads" folder in your phone or the
                    "download history" section of your browser.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
