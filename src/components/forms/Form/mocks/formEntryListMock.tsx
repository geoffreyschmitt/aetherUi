import { TForm } from '@/components/forms/Form';
import { selectOptionListMock } from '@/components/actions/Select/mocks';

export const formEntryListMock: TForm['formEntryList'] = [
  {
    componentType: 'input',
    label: 'label',
  },
  {
    componentType: 'input',
    label: 'label',
  },
  {
    componentType: 'checkbox',
    children: 'I agree to the terms and conditions',
  },
  {
    componentType: 'checkbox',
    children: 'I agree to the privacy policy',
  },
  {
    componentType: 'radio',
    children: 'Single radio 1',
  },
  {
    id: 'select-1',
    name: 'select-1-name',
    componentType: 'select',
    optionList: selectOptionListMock,
    optionListAriaLabel: 'Select Time Segment',
  },
  {
    componentType: 'radio',
    children: 'Single radio 2',
  },
  {
    id: 'select-2',
    name: 'select-2-name',
    componentType: 'select',
    optionList: selectOptionListMock,
    optionListAriaLabel: 'Select Music Genre',
  },
  {
    componentType: 'radioList',
    radioName: 'updates',
    itemList: [
      {
        children: 'Opt in for updates',
        defaultChecked: true,
      },
      {
        children: 'Opt out for updates',
      },
    ],
  },
];
