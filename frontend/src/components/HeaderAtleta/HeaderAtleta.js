import "./HeaderAtleta.css"

import User from "../../assets/user2.png"

function HeaderAtleta({childToParent}){

   return(
       <header className="header ">
           <div className="logo"></div>
           <div className='nav'>
               <nav>
                   <ul>
                       <li ><a onClick={() => childToParent(1)}>Responder questionário</a></li>
                       <li ><a onClick={() => childToParent(2)}>Ver resultados</a></li>
                       <li ><a onClick={() => childToParent(3)}>Alterar dados</a></li>
                   </ul> 
               </nav>
           
       </div>
           <div className="avatar">
                <img src={User} ></img>
             </div>
       </header>
   )
}
export default HeaderAtleta;