import type { Asset, Point } from './types';

/**
 * Taken from https://svelte.dev/examples#actions
 */
export function draggable(node: HTMLElement) {
	let x: number;
	let y: number;

	function handleMousedown(event: MouseEvent) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('dragstart', {
			detail: { x, y }
		}));

		window.addEventListener('mousemove', handleMousemove);
		window.addEventListener('mouseup', handleMouseup);
	}

	function handleMousemove(event: MouseEvent) {
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('dragmove', {
			detail: { x, y, dx, dy }
		}));
	}

	function handleMouseup(event: MouseEvent) {
		x = event.clientX;
		y = event.clientY;

		node.dispatchEvent(new CustomEvent('dragend', {
			detail: { x, y }
		}));

		window.removeEventListener('mousemove', handleMousemove);
		window.removeEventListener('mouseup', handleMouseup);
	}

	node.addEventListener('mousedown', handleMousedown);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
		}
	};
}

export function controlPoints(p1: Point, p2: Point): [Point, Point] {
    const c1 = {
        x: roundedAvg(p1.x, p2.x),
        y: p1.y,
    };
    const c2 = {
        x: roundedAvg(c1.x, p2.x),
        y: roundedAvg(c1.y, p2.y),
    };
    return [c1, c2];
}

const roundedAvg = (a: number, b: number) => Math.round((a + b) / 2);

export function mapToCanvas(canvasWidth: number, canvasHeight: number, maxValue: number, asset: Asset): Point {
    const padding = 20;
    const x = asset.time === 'present'
        ? padding
        : canvasWidth - padding;
    return {
        x,
        y: linearMapping(padding, canvasHeight, maxValue, asset.value)
    };
}

const linearMapping = (padding: number, height: number, max: number, x: number) => {
    return Math.round(((2 * padding - height) / max) * x + height - padding);
};
