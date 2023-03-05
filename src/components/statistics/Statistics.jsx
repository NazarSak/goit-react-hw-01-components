export const Statistics = ({stats,title}) => {
  return <section>
        <h2 >{title}</h2>
        <ul >
         {stats.map(stat => (
          <li key = {stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}</span>
          </li>
         ))}

        </ul>
      </section>
    
  
}











// export default function Statistics ({stats}) {
//       return  <section>
//         <h2 >Upload stats</h2>
//         <ul >
//          {stats.map(stat => (
//           <li key = {stat.id}>
//             <Statistick
//             label = {stat.label}
//             percentage = {stat.percentage}

//             />
//           </li>
//          ))}

//         </ul>
//       </section>
    
  
// }

// const Statistick = ({label,percentage}) => {
// return (
//   <div>
//   <span>{label}</span>
//   <span>{percentage}</span>
//   </div>
  

// )
// }

