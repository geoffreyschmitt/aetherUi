import React from 'react';
import { act, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { ProgressBar } from './ProgressBar';
import { EProgressBarVariant, TProgressBar } from './ProgressBar.types';

expect.extend(toHaveNoViolations);

describe('ProgressBar component', () => {
  const renderComponent = (props: TProgressBar) => {
    return render(<ProgressBar {...props} />);
  };

  it('renders with the default style when no variant is given', () => {
    const { getByTestId } = renderComponent({
      widthPercentageOfProgressBar: 50,
    });
    const progressBarElement = getByTestId('ProgressBar');
    expect(progressBarElement).toBeInTheDocument();
    expect(progressBarElement).toHaveClass(
      'progress-bar progress-bar--regular',
    );
  });

  it('renders with "small" style when the variant is EProgressBarVariant.SMALL', () => {
    const { getByTestId } = renderComponent({
      variant: EProgressBarVariant.SMALL,
      widthPercentageOfProgressBar: 20,
    });
    const progressBarElement = getByTestId('ProgressBar');
    expect(progressBarElement).toHaveClass('progress-bar progress-bar--small');
    expect(progressBarElement).not.toHaveClass(' progress-bar--regular');
  });

  it('renders with custom classname', () => {
    const { getByTestId } = renderComponent({
      className: 'test-class',
    });
    const progressBarElement = getByTestId('ProgressBar');

    expect(progressBarElement).toHaveClass('progress-bar test-class');
  });

  it('passes accessibility tests', async () => {
    const { container } = renderComponent({ widthPercentageOfProgressBar: 10 });

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
