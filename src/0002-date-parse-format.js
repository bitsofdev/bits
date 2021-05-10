import {
  parse,
  format
} from 'date-fns';
import { gd } from 'date-fns/locale';
const parsedDate = parse(
  '2021.10.05',   // Input string
  'yyyy.dd.MM',   // Input format
  new Date()      // Fallback date
);
const formattedDate = format(
  date,            // Input date 
  'PPPP'           // Output format
  { locale: gd },  // Options
);
// Diluain, An Cèitean 10mh, 2021 🏴󠁧󠁢󠁳󠁣󠁴󠁿