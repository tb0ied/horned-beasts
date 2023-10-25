import { useState } from "react";

export default function HornedBeast(props) {
  console.log(useState(0));

  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <>
      <div>
        <h2>{props.title} is thge child</h2>
        <img src={props.imageUrl} onClick={handleLikes}></img>
        <span>❤️{likes}</span>
      </div>
    </>
  );
}
