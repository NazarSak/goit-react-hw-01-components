import {
  Section,
  Title,
  ListColors,
  Color,
  Format,
  Percentage,
} from './Statistics.styled';

import propTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <ListColors>
        {stats.map(stat => (
          <Color key={stat.id}>
            <Format>{stat.label}</Format>
            <Percentage>{stat.percentage}%</Percentage>
          </Color>
        ))}
      </ListColors>
    </Section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};

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
