import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Accordion } from './Accordion';
import { TAccordion } from './Accordion.types';
import { accordionItemListMock } from './mock';

describe('Accordion Component', () => {
  const renderComponent = ({ ...props }: TAccordion) => {
    return render(<Accordion {...props} />);
  };

  it('does not render anything if accordionItemList is empty', () => {
    const { container } = renderComponent({
      accordionId: 'accordionId',
      accordionItemList: [],
    });

    expect(container).toBeEmptyDOMElement();
  });

  it('renders with default props', () => {
    const { getByTestId } = renderComponent({
      accordionId: 'accordionId',
      accordionItemList: accordionItemListMock,
    });
    const accordionElement = getByTestId('Accordion-accordionId');
    const accordionItemElementList =
      accordionElement.querySelectorAll('.accordion-item');
    const firstAccordionItemElement = accordionItemElementList[0];
    const firstAccordionItemTitle = accordionItemElementList[0].querySelector(
      '.accordion-item__title',
    );
    expect(accordionElement).toBeInTheDocument();
    expect(accordionItemElementList.length).toBe(accordionItemListMock.length);
    expect(firstAccordionItemElement.tagName).toBe('DETAILS');
    expect(firstAccordionItemElement).toHaveClass(
      'accordion-item accordion-item--title-default',
    );
    expect(firstAccordionItemTitle?.tagName).toBe('SUMMARY');
  });

  it('renders initialOpen accordion items correctly', () => {
    const { getByTestId } = renderComponent({
      accordionId: 'accordionId',
      accordionItemList: accordionItemListMock,
    });
    const openedAccordionIndex = 2;
    const accordionElement = getByTestId('Accordion-accordionId');
    const accordionItemElementList =
      accordionElement.querySelectorAll('.accordion-item');
    const openedAccordionElement =
      accordionItemElementList[openedAccordionIndex];

    expect(openedAccordionElement).toHaveAttribute('open');
  });

  it('renders title with proper size', () => {
    const { getByTestId } = renderComponent({
      accordionId: 'accordionId',
      accordionItemList: accordionItemListMock,
      titleVariant: EAccordionTitleVariant.BIG,
    });
    const accordionElement = getByTestId('Accordion-accordionId');
    const accordionItemElementList =
      accordionElement.querySelectorAll('.accordion-item');
    const firstAccordionItemElement = accordionItemElementList[0];
    expect(accordionElement).toBeInTheDocument();
    expect(firstAccordionItemElement).toHaveClass(
      'accordion-item accordion-item--title-big',
    );
  });

  it('passes accessibility tests', async () => {
    const { container } = renderComponent({
      accordionId: 'accordionId',
      accordionItemList: accordionItemListMock,
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
