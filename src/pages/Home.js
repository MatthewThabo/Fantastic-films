import { useNavigate } from "react-router-dom";



function Home(props) {
  const navigate = useNavigate();

    return(<section>
        <h1>Welcome to Fantastic films</h1>
        <div className="center">
        <button  onClick={() => navigate("/popular-films")}>Browse films</button>
        </div>
    </section>

    );
}

export default Home;