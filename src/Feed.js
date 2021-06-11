import React, {useState, useEffect} from "react";
import { Create } from "@material-ui/icons";
import "./feed.css";
import InputOption from "./InputOption";
import {
  Image,
  Subscriptions,
  Event,
  CalendarViewDay,
} from "@material-ui/icons";
import Post from "./Post";
import {db} from './firebase.js'
import firebase from 'firebase'

function Feed() {
const [input, setInput] = useState('');
const [posts, setPosts] = useState([])

useEffect(() => {
	db.collection("posts")
	.orderBy("timestamp", "desc")
	.onSnapshot(snapshot => (
		setPosts(snapshot.docs.map((doc) => (
			{
				id: doc.id,
				data: doc.data(),
			}
		)))
	))
}, []);

const sendPost = e => {
	e.preventDefault(); //prevents default behavior when enter clicked so the browser will not refresh
	db.collection("posts").add({
		name: 'justin',
		description: 'test',
		message: input,
		photourl: '',
		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
	});
	setInput("");
};

  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        <div className="feed_input">
          <Create />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputoptions">
          {/* input options */}
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="orange" />
          <InputOption Icon={Event} title="Event" color="gray" />
          <InputOption Icon={CalendarViewDay} title="Article" color="green" />
        </div>
      </div>
	  {posts.map(({id, data: {name, description, message, photourl}})=> (
		  <Post
			key={id}
			name={name}
			description={description}
			message={message}
			photourl={photourl}
			/>

	  ))}
    </div>
  );
}

export default Feed;
