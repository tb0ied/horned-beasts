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
        <h2>{props.name} is thge child</h2>
        <img src={props.src} onClick={handleLikes}></img>
        <span>❤️{likes}</span>
      </div>
    </>
  );
}
