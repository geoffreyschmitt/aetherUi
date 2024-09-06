import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Pagination } from './Pagination';
import { TPagination } from './Pagination.types';

import '@testing-library/jest-dom';

describe('Pagination', () => {
  const baseProps: TPagination = {
    linkList: [
      { index: 0, label: '1' },
      { index: 1, label: '2' },
      { index: 2, label: '3' },
      { index: 3, label: '4' },
      { index: 4, label: '5' },
      { index: 5, label: '6' },
      { index: 6, label: '7' },
      { index: 7, label: '8' },
      { index: 8, label: '9' },
      { index: 9, label: '10' },
    ],
    currentPageIndex: 0,
    onPageChange: jest.fn(),
  };

  const renderComponent = (props: TPagination) => {
    return render(<Pagination {...props} />);
  };

  it('render without crash', () => {
    const { getByTestId } = renderComponent(baseProps);
    const paginationElement = getByTestId('Pagination');
    expect(paginationElement).toBeInTheDocument();
  });

  it('calls onPageChange with correct argument when previous/next page clicked', () => {
    const props = { ...baseProps, currentPageIndex: 3 };
    const { getByLabelText } = renderComponent(props);
    fireEvent.click(getByLabelText('Previous page'));
    expect(props.onPageChange).toHaveBeenCalledWith(props.currentPageIndex - 1);
    fireEvent.click(getByLabelText('Next page'));
    expect(baseProps.onPageChange).toHaveBeenCalledWith(
      props.currentPageIndex + 1,
    );
  });

  it('calls onPageChange with correct argument when a specific page item clicked', () => {
    const props = { ...baseProps, currentPageIndex: 3 };
    const { getByText } = renderComponent(props);
    fireEvent.click(getByText('3'));
    expect(baseProps.onPageChange).toHaveBeenCalledWith(2);
  });

  it('renders the first, second, and last page links when the first page selected', () => {
    const { getByText, queryByText } = renderComponent(baseProps);

    ['1', '2', '3', '4', '...', '10'].forEach(text => {
      expect(getByText(text)).toBeDefined();
    });
    ['5', '6', '7', '8', '9'].forEach(text => {
      expect(queryByText(text)).toBeNull();
    });
  });

  it('renders the first, 3 in the middle and last page links, when a middle page is selected', () => {
    const props = { ...baseProps, currentPageIndex: 4 };
    const { getAllByText, getByText, queryByText } = renderComponent(props);

    ['1', '4', '5', '6', '10'].forEach(text => {
      expect(getByText(text)).toBeDefined();
    });
    expect(getAllByText('...').length).toBe(2);
    ['2', '3', '7', '8', '9'].forEach(text => {
      expect(queryByText(text)).toBeNull();
    });
  });

  it('renders first and the 4 last pages links when last page selected', () => {
    const props = { ...baseProps, currentPageIndex: 9 };
    const { getByText, queryByText } = renderComponent(props);

    ['1', '...', '7', '8', '9', '10'].forEach(text => {
      expect(getByText(text)).toBeDefined();
    });
    ['2', '3', '4', '5', '6'].forEach(text => {
      expect(queryByText(text)).toBeNull();
    });
  });
});
