<script lang="ts">
    import { mapToCanvas, controlPoints } from './drawing';

    const p1 = mapToCanvas(500, 500, 200, { time: 'present', value: 100 });
    const p2 = mapToCanvas(500, 500, 200, { time: 'future', value: 130 });
    const [cp1, cp2] = controlPoints(p1, p2);
</script>

<svg viewBox="0 0 500 500" width="100%" height="500px" fill="white" role="img" aria-label="The present value and future value graph">
    <path stroke="black" d="M {p1.x} {p1.y}
                            C {cp1.x} {cp1.y},
                              {cp2.x} {cp2.y},
                              {p2.x} {p2.y}" />
    <circle cx="{p1.x}" cy="{p1.y}" r="20" stroke="black" fill="white" />
    <circle cx="{p2.x}" cy="{p2.y}" r="20" stroke="black" fill="white" />
</svg>

<style>
    svg {
        border: 1px solid black;
    }
</style>
