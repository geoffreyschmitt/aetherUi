'use client';
import styled from 'styled-components';
import { Form } from '@/componentsImplementationExamples/forms/Form';

export const RootElement = styled(Form)`
  .form__form-entry-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;
