import React from 'react';

interface PickerProps {
  onAdd: () => void;
  onRemove: () => void;
  onSlide: (value: number) => void;
  value: number;
  max: number;
  min: number;
  tag: string;
}

const Picker: React.FC<PickerProps> = ({
  onAdd,
  onRemove,
  onSlide,
  value,
  max,
  min,
  tag,
}) => {
  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-column gap-2">
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-outline-primary rounded-circle p-2"
            style={{ width: '40px', height: '40px' }}
            onClick={() => {
              if (value - 1 >= min) onRemove();
            }}
          >
            <span>-</span>
          </button>
          <div className="fs-1 fw-bold">{value}</div>
          <button
            className="btn btn-outline-primary rounded-circle p-2"
            style={{ width: '40px', height: '40px' }}
            onClick={() => {
              if (value + 1 <= max) onAdd();
            }}
          >
            <span>+</span>
          </button>
        </div>
      </div>
      <input
        type="range"
        className="form-range"
        defaultValue={value}
        value={value}
        max={max}
        min={min}
        step={1}
        id="customRange3"
        onChange={(e) => onSlide(parseInt(e.target.value, 10))}
      ></input>
    </div>
  );
};

export default Picker;
