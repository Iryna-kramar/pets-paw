import React from "react";
import styled from "styled-components";



// export default function Reactions() {
//   const reactionItems = [
//     {
//       id: 1,
//       icon: <img src={Likes} className="reactions" alt="Likes"></img>,
//       value: "Likes",
//     },
//     {
//       id: 2,
//       icon: <img src={Favourites} className="reactions" alt="Favourites"></img>,
//       value: "Favourites",
//     },
//     {
//       id: 3,
//       icon: <img src={Dislikes} className="reactions" alt="Dislikes"></img>,
//       value: "Dislikes",
//     },
//    ];

//   return (
//     <WrapperItems>
//       {reactionItems.map((item) => {
//         return <ReactionItems key={item.id} {...item}></ReactionItems>;
//       })}
//     </WrapperItems>
//   );
// }

// const ReactionItems = ({ icon }) => {
//   return <div>{icon}</div>;
// };

// const WrapperItems = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-gap: 10px;

//   div {
//     display: grid;
//     grid-column-gap: 10px;
//     place-items: center;
//     width: 60px;
//     height: 60px;
//     background: #ffffff;
//     border-radius: 20px;

//     img {
//       align-self: center;
//       justify-self: center;
//     }

//     :hover {
//       background: #fbe0dc;
//     }
//     :active {
//       background: #ff868e;

//     }
//   }
// `;
