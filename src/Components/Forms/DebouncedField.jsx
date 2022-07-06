import React, { useCallback, useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import Field from "./Field";

export default function DebouncedField({ value, onChange, ...props }) {

    const [innerValue, setInnerValue] = useState('');

    useEffect(() => {
        if (value) {
          setInnerValue(value);
        } else {
          setInnerValue('');
        }
      }, [value, setInnerValue]);

    const debouncedHandleOnChange = useDebouncedCallback(
      (event) => {
        if (onChange) {
          onChange(event);
        }
      },
      250
    );

    const handleOnChange = useCallback((event) => {
        event.persist();
        const newValue = event.currentTarget.value;
        setInnerValue(newValue);
        debouncedHandleOnChange(event);
      }, [debouncedHandleOnChange, setInnerValue]);

  return (
    <Field
      {...props}
      value={innerValue}
      onChange={handleOnChange}
    />
  );

}