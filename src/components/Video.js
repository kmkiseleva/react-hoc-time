import DateTime from "./DateTime";
import withDateTimePretty from "./DateTimePretty";

const DateTimePretty = withDateTimePretty(DateTime);

const Video = ({ url, date }) => {
  return (
    <div className="video">
      <iframe
        title={Math.random()}
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};

export default Video;
