import { render } from '@testing-library/svelte';
import Graph from './Graph.svelte';

describe('render', () => {
    test('should render with an img role and an aria label', () => {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role#svg_and_roleimg
        const { getByRole } = render(Graph);
        const graph = getByRole('img');

        expect(graph).toBeInTheDocument();
        expect(graph).toHaveAttribute('aria-label', 'The present value and future value graph');
    });

    test.todo('should have a height that is 3/4 of the width in pixels');
    test.todo('should divide user space one-to-one with the width and height');
});

describe('dragging', () => {
    test.todo('should drag the present value node using the mouse');
    test.todo('should drag the future value 1 node using the mouse');
    test.todo('should drag the future value 2 node using the mouse');
});
