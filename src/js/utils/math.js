export function lerp(p1, p2, t) {
	return p1 + (p2 - p1) * t
}

export function interpolate(start, end, value) {
	return start * (1.0 - value) + end * value
}

export function clamp(min, max, number) {
	return Math.max(min, Math.min(number, max))
}

export function random(min, max) {
	return Math.random() * (max - min) + min
}

export function mapRange(min, max, valueToMap, newMin, newMax) {
	if (valueToMap <= min) {
		return newMin
	}

	if (valueToMap >= max) {
		return newMax
	}

	valueToMap -= min
	max -= min

	const percentage = (valueToMap / max) * 100
	const newStep = (newMax - newMin) / 100

	return percentage * newStep + newMin
}

export function toArray(nodelist) {
	return Array.from(nodelist)
}
