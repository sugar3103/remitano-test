import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginInfo } from "../../Header/Header.type";
import { IVideo } from "../MainPage/MainPage.type";

interface ISharePage {
  loginInfo: ILoginInfo | null;
}

function SharePage(props: ISharePage) {
  const { loginInfo } = props;
  const navigate = useNavigate();

  const [linkToShare, setLinkToShare] = useState<string | null>(null);

  function shareTheLink(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // log out the value for you to see the inputed link
    console.log("the link to share ", linkToShare);

    if (!linkToShare?.includes("youtube.com")) {
      alert("Must be a Youtube link");
    } else {
      // const getVideoList = localStorage.getItem("videoList");
      // const videoList = getVideoList ? JSON.parse(getVideoList) : [];

      // const getVideoList = localStorage.getItem("videoList");
      const videoList: IVideo[] = [];

      const youtubeLink = `https://noembed.com/embed?url=${linkToShare}`;

      fetch(youtubeLink)
        .then((response) => response.json())
        .then((result) => {
          const videoId = linkToShare.split("v=")[1];
          const existedVideo = videoList.find(
            (e: IVideo) => e.videoId === videoId
          );
          if (result?.error) {
            alert("Video is not existed in Youtube / video ID not correct");
          } else if (!existedVideo) {
            const newVideoList = [...videoList, { videoId, ...result }];
            const stringNewVideoList = JSON.stringify(newVideoList);
            localStorage.setItem("videoList", stringNewVideoList);
            navigate("/");
          } else alert("Video existed in the list");
        })
        .catch((error) => alert(`can't get video information ${error}`));
    }
  }

  return (
    <div className="md:px-24 md:py-12">
      {loginInfo?.email ? (
        <div className="rounded-md border-2 border-black p-4">
          <div className="-mt-8 mb-6 px-2 bg-white w-6/12">
            Share a Youtube movie
          </div>
          <form onSubmit={shareTheLink}>
            <div className="">
              <label>Youtube URL : </label>
              <input
                type={"url"}
                onChange={(e) => setLinkToShare(e.target.value)}
                required
                className="border-2 w-9/12 px-1"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-indigo-500/50 mt-4 pb-1"
            >
              Share
            </button>
          </form>
        </div>
      ) : (
        <div className="font-bold text-lg w-full flex justify-center">
          Please Login to share a Youtube link
        </div>
      )}
    </div>
  );
}

export default SharePage;
