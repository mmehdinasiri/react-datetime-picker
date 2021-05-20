import { convertToEn, convertToFa } from './Utilities'
import DtCalendar from './DtCalendar'
import DtPicker from './DtPicker'

type Day = IDay | null
type Range = IRange | null
type Multi = IDay[] | null

export { DtCalendar, convertToEn, convertToFa }
export type { Day, Range, Multi }
export default DtPicker
