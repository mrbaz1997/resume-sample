
import data from "../Data.json";
import "../components/Menu.css"

export default function Menu() {
  return (
    <div className="container">
      <div className="menu">
        <ol className="item">
          <li>Skill</li>
          <li>About</li>
        </ol>  
      </div>
      <div>
          <h1>
            {data.title}{" "}
            <h2 style={{ color: "aqua", fontSize: "25px",fontFamily: "fantasy" }}>`Idris Baz`</h2>
          </h1>
          <h3> {data.subtitle}</h3>
          
        </div>

    
    </div>
  );
}
