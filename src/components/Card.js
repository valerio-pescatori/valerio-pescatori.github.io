import React from "react";

function formatTags(tags) {
  return tags.map((t, i) => (
    <img className="tag" src={t + ".png"} key={i}></img>
  ));
}

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgSrc} className="card-img"></img>
      <h3 className="card-title">{props.title}</h3>
      <hr />
      <p className="card-text">{props.text}</p>
      <div className="tags-wrapper">{formatTags(props.tags)}</div>
    </div>
  );
};

export default Card;
