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
});
