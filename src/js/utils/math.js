export const lerp = (p1, p2, t) => p1 + (p2 - p1) * t

export const interpolate = (start, end, value) => start * (1.0 - value) + end * value

export const clamp = (min, max, number) => Math.max(min, Math.min(number, max))

export const random = (min, max) => Math.random() * (max - min) + min

export const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

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

export const toArray = (nodelist) => Array.from(nodelist)
