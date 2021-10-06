import Video from "./Video";
import shortid from "shortid";

const VideoList = ({ list }) => {
  return list.map((item) => (
    <Video key={shortid.generate()} url={item.url} date={item.date} />
  ));
};

export default VideoList;
