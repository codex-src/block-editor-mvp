// Converts Tailwind units to rem units.
export default function tw(units) {
	return `${units * 4 / 16}rem`
}
