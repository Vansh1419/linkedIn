import React, { useState, useEffect } from "react";
import { colRef } from "../../utils/firebase";
import "./feed.style.scss";
import {
  getDocs,
  serverTimestamp,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
import PostComponent from "./post/post.component";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import InputOptionComponent from "./inputOption/inputOption.component";
const FeedComponent = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(colRef, orderBy("timestamp", "desc"));
    getDocs(q)
      .then((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      })
      .catch((err) => console.log(err));
  }, [input]);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      name: "",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptionComponent Icon={Image} title="Photo" color="#70B5F9" />
          <InputOptionComponent
            Icon={Subscriptions}
            title="Video"
            color="#E7A33E"
          />
          <InputOptionComponent
            Icon={EventNote}
            title="Event"
            color="#C0CBCD"
          />
          <InputOptionComponent
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* post */}
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <PostComponent
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
    </div>
  );
};

export default FeedComponent;
