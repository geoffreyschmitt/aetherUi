import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { EIconVariant, Icon } from '@/components/miscellaneous/Icon';
import { classNames } from '@/utils/classNames';

import { RootElement } from './Select.styles';
import { TSelect, TSelectOption } from './Select.types';

const OPEN_KEYS = [' ', 'ArrowUp', 'ArrowDown'];
const CLOSE_KEYS = ['Escape'];
const CLOSE_KEYS_ON_TRIGGER = [' '];
const SELECTION_KEYS = [' ', 'Enter', 'Tab'];
export const Select = forwardRef<HTMLDivElement, TSelect>(
  (
    {
      className,
      id,
      name,
      label,
      optionList,
      labelById,
      defaultLabel,
      defaultValue,
      onSelectedValueChange,
      optionListAriaLabel,
      ...props
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    const findOptionIndexBasedOnValue = (value?: string) => {
      if (!defaultValue) {
        return -1;
      }
      return optionList.findIndex(option => option.value === value);
    };
    const findFirstAvailableOptionIndex = () => {
      return optionList.findIndex(option => !option.disabled);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [currentSelectedOptionIndex, setCurrentSelectedOptionIndex] =
      useState(
        findOptionIndexBasedOnValue(defaultValue) >= 0
          ? findOptionIndexBasedOnValue(defaultValue)
          : (findFirstAvailableOptionIndex() ?? null),
      );
    const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(
      optionList[currentSelectedOptionIndex] ?? null,
    );
    const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(
      null,
    );

    useEffect(() => {
      if (!isOpen) {
        setFocusedOptionIndex(null);
      }
    }, [isOpen]);

    useEffect(() => {
      setSelectedOption(optionList[currentSelectedOptionIndex] ?? null);
      setIsOpen(false);
      onSelectedValueChange?.(optionList[currentSelectedOptionIndex].value);
    }, [currentSelectedOptionIndex, optionList, onSelectedValueChange]);

    useEffect(() => {
      setCurrentSelectedOptionIndex(
        findOptionIndexBasedOnValue(defaultValue) >= 0
          ? findOptionIndexBasedOnValue(defaultValue)
          : (findFirstAvailableOptionIndex() ?? null),
      );
    }, [defaultValue]);

    useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (
        event.key === ' ' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp'
      ) {
        // prevent page scroll if using the space / arrows keys to select an item
        event.preventDefault();
      } else if (CLOSE_KEYS.includes(event.key)) {
        setIsOpen(false);
      }

      if (focusedOptionIndex !== null) {
        if (event.key === 'ArrowDown') {
          setFocusedOptionIndex((focusedOptionIndex + 1) % optionList.length);
        } else if (event.key === 'ArrowUp') {
          setFocusedOptionIndex(
            (focusedOptionIndex - 1 + optionList.length) % optionList.length,
          );
        } else if (SELECTION_KEYS.includes(event.key)) {
          if (event.key === 'Enter') {
            //Would double the set is open with onclick event if left alone
            event.preventDefault();
          }
          setCurrentSelectedOptionIndex(focusedOptionIndex);
          //Need to close it here in case it's the same value as currentSelectedOptionIndex
          setIsOpen(false);
        }
      } else {
        if (event.key === 'ArrowDown' && isOpen) {
          setFocusedOptionIndex(
            optionList.findIndex(option => !option.disabled),
          );
        } else if (event.key === 'ArrowUp') {
          setFocusedOptionIndex(
            optionList.findLastIndex(option => !option.disabled),
          );
        }
      }
    };

    const handleButtonClick = () => {
      setIsOpen(isCurrentlyOpen => !isCurrentlyOpen);
      setFocusedOptionIndex(null);
    };
    const handleButtonKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen && OPEN_KEYS.includes(event.key)) {
        // prevent page scroll if using the space key to select an item
        event.preventDefault();
        setIsOpen(true);
      } else if (isOpen && CLOSE_KEYS_ON_TRIGGER.includes(event.key)) {
        event.preventDefault();
        setIsOpen(false);
        setFocusedOptionIndex(null);
      }
    };

    const handleSelect = (index: number) => {
      setCurrentSelectedOptionIndex(index);
      //Need to close it here in case it's the same value as currentSelectedOptionIndex
      setIsOpen(false);
    };

    return (
      <RootElement
        data-testid={'Select'}
        {...props}
        ref={ref}
        onKeyDown={handleKeyDown}
        className={classNames(
          'select',
          {
            'select__is-open': isOpen,
            'select__with-selected-option': !!selectedOption,
          },
          className,
        )}
      >
        <select
          name={name}
          aria-hidden={true}
          id={id}
          className="select__select"
          value={selectedOption?.value}
          role="none"
          //We shouldn't have to use this one, only used to silence the error.
          onChange={() => {}}
        >
          {optionList.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <button
          type={'button'}
          className="select__trigger"
          onClick={handleButtonClick}
          onKeyDown={handleButtonKeyDown}
          aria-labelledby={labelById}
          aria-controls={`${id}-option-list`}
          aria-haspopup={'listbox'}
          aria-activedescendant={
            focusedOptionIndex ? `${id}-${focusedOptionIndex}` : undefined
          }
        >
          {label && <div className="select__label">{label}</div>}
          {selectedOption?.label ?? defaultLabel ?? ''}
          <Icon
            className={'select__value-icon'}
            variant={EIconVariant.CHEVRON}
          />
        </button>
        <div
          role="listbox"
          aria-label={optionListAriaLabel}
          className="select__option-list"
          aria-expanded={isOpen}
          id={`${id}-option-list`}
        >
          {optionList.map((option, index) => (
            <div
              key={`${id}-${option.value}`}
              role="option"
              id={`${id}-${index}`}
              aria-selected={option.value === selectedOption?.value}
              data-value={option.value}
              className={classNames('select__option', {
                'select__option--selected':
                  option.value === selectedOption?.value,
                'select__option--disabled': option.disabled,
                'select__option--focused': index === focusedOptionIndex,
              })}
              onPointerUp={() => handleSelect(index)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </RootElement>
    );
  },
);
