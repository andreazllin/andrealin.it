import { parseISO, format } from 'date-fns';
import { enUS } from 'date-fns/locale';
// import { it } from 'date-fns/locale';
export default function Date({ dateString }) {
	const date = parseISO(dateString);
	return (
		<time className="text-gray-400 text-xs tracking-wider" dateTime={dateString}>
			{format(date, 'LLLL d, yyyy', { locale: enUS })}
		</time>
	);
}
