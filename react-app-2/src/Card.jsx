import arhamPic from "./assets/image.jpeg";

 function Card() {
  return (
    <div className="card">
      <img src={arhamPic} alt="Profile-Pic" className="card-image" />
      <h1 className="card-title">Muhammad Arham</h1>
      <p className="card-description">I am Learning Programming.</p>
    </div>
  );
}

export default Card;
