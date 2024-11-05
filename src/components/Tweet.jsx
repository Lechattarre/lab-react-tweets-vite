import ProfileImage from "./ProfileImage";
import User from "./User";
import Message from "./Message.jsx"
import Actions from "./Actions.jsx";
import Timestamp from "./Timestamp.jsx";


function Tweet({ tweet }) {

  const { user, timestamp, message } = tweet
  const { name, image, handle } = user

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp timestamp={timestamp} />

        </div>

        <Message message={message} />


        <div className="actions">
          <Actions />
        </div>

        <i className="fas fa-ellipsis-h"></i>
      </div >
    </div>

  );
}

export default Tweet;
