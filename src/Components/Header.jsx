import React from "react";
import {Link } from "react-router-dom";

export default function Header(props){
    const {countCartItems} = props;
    return (
    <header className="row block center">
        <div>
            <Link to ="/"><h1>Small shoping Cart</h1></Link>
        </div>
        <div>
                <Link to ="#/ cart">
                Cart{' '}
                { countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ) : (
                    ''
                )}
                </Link>{' '}  
                
                <Link to ="Signin">Signin</Link> 
        </div>
        </header>
);
    
}    

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Header(props) {
//   const { countCartItems } = props;
//   return (
//     <header className="row block center">
//       <div>
//         <Link to="/">
//           <h1>Small Shopping Cart</h1>
//         </Link>
//       </div>
//       <div>
//         <Link to="/cart">
//           Cart{" "}
//           {countCartItems ? (
//             <button className="badge">{countCartItems}</button>
//           ) : null}
//         </Link>{" "}
//         <Link to="/signin">Signin</Link>
//       </div>
//     </header>
//   );
// }
