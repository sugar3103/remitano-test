import { Link } from "react-router-dom";
import { IVideo } from "./MainPage.type";

function MainPage() {
  const dummyVideoList = [
    {
      docId: "-NYB9YtiAiofW7wvM2VO",
      author_name: "Kurbeli",
      author_url: "https://www.youtube.com/@kurbeli",
      docKey: "-NYB9YtiAiofW7wvM2VO",
      html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/eGpdyP9r9sU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Anime [amv]- Toca Toca | Official Music Video (full version)"></iframe>',
      thumbnail_url: "https://i.ytimg.com/vi/eGpdyP9r9sU/hqdefault.jpg",
      title: "Anime [amv]- Toca Toca | Official Music Video (full version)",
      type: "video",
      url: "https://www.youtube.com/watch?v=eGpdyP9r9sU",
      videoId: "eGpdyP9r9sU",
    },
    {
      docId: "-NYB9d0Y5Sj6mKLkt6No",
      author_name: "Arshia.f7",
      author_url: "https://www.youtube.com/@arshia.f7489",
      docKey: "-NYB9d0Y5Sj6mKLkt6No",
      html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/-Wde3mYaa_I?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Enemy - Imagine Dragons // jinx // Arcane [AMV]"></iframe>',
      thumbnail_url: "https://i.ytimg.com/vi/-Wde3mYaa_I/hqdefault.jpg",
      title: "Enemy - Imagine Dragons // jinx // Arcane [AMV]",
      type: "video",
      url: "https://www.youtube.com/watch?v=-Wde3mYaa_I",
      videoId: "-Wde3mYaa_I",
    },
    {
      docId: "-NYB9l6dqQsZS_IJTe2u",
      author_name: "Vie Channel - HTV2",
      author_url: "https://www.youtube.com/@VieChannelHTV2",
      docKey: "-NYB9l6dqQsZS_IJTe2u",
      height: 113,
      html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/7JTihdQyplY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Rap Việt Mùa 3 - Tập 4: Đại chiến nón vàng trở lại, Liu Grace - Tez xuất trận | Rap Việt 2023"></iframe>',
      thumbnail_url: "https://i.ytimg.com/vi/7JTihdQyplY/hqdefault.jpg",
      title:
        "Rap Việt Mùa 3 - Tập 4: Đại chiến nón vàng trở lại, Liu Grace - Tez xuất trận | Rap Việt 2023",
      type: "video",
      url: "https://www.youtube.com/watch?v=7JTihdQyplY",
      videoId: "7JTihdQyplY",
    },
  ];

  return (
    <div>
      <div className="">
        {dummyVideoList.map((e: IVideo) => (
          <div key={e?.videoId} className="flex my-3">
            <iframe
              className="w-2/4 h-48"
              title="youtube video"
              src={`https://www.youtube.com/embed/${e.videoId}?feature=oembed`}
              allow="fullscreen;"
            ></iframe>
            <div className="pl-4 w-2/4">
              <p className="font-bold">{e.title}</p>
              <p className="mt-2">
                Author name :{" "}
                <span className="font-bold">{e.author_name} </span>
              </p>
              <p>Video Url : {e.url}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {(dummyVideoList || []).length === 0 ? (
          <h1 className="text-3xl font-bold">
            No video to show please go to{" "}
            <Link to="/share" className="text-sky-400">
              Share
            </Link>{" "}
            your video
          </h1>
        ) : null}
      </div>
    </div>
  );
}

export default MainPage;
