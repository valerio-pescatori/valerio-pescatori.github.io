import Card from "./Card";

const Body = () => {
  return (
    <div className="container flex-column">
      <img
        src="imgs/user.png"
        className="profile-pic"
        alt="My profile picture"
      />
      <div className="container">
        <Card
          imgSrc="imgs/person-re-id.png"
          title="Person Re-ID"
          text="Person Re-Id è un framework che realizza re-identificazione di persone attraverso features 
        estratte da uno skeleton 3D. Il framework è stato realizzato utilizzando Unity e PyTorch.
        "
          tags={["c#", "unity", "pytorch"]}
        />
        <Card />
      </div>
    </div>
  );
};

export default Body;
