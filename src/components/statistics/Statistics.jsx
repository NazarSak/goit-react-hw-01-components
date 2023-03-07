import {
  Section,
  Title  ,
  ListColors,
  Color,
  Format,
  Percentage,
  WrapperStat,
} from './Statistics.styled';

import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <WrapperStat>
      {title &&(<Title>{title}</Title>)}
        <ListColors>
          {stats.map(stat => (
            <Color key={stat.id}>
              <Format>{stat.label}</Format>
              <Percentage>{stat.percentage}%</Percentage>
            </Color>
          ))}
        </ListColors>
      </WrapperStat>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
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
