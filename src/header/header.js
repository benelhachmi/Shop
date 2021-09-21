import { Link } from "react-router-dom";
import "./header.css"
import { useSelector } from "react-redux";
const Header = () => {
  let {card} = useSelector((state) => state.card);
  console.log(card);

    return(
        <div className="ui fixed menu">
        <div className="ui container center">

          <h2>
            <Link to={`/`}>
            FakeShop
            </Link>
            </h2>
           
        </div>
        
        <div class="right menu">
        <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
    <a class="item"><i className="shop icon">
    <span class="badge">{card.length}</span>
    </i>
    
    </a>
    
  </div>
    
      </div>
    )
}

export default Header;