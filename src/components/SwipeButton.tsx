import { SwipeButtonProps } from '../types';

export default function SwipeButton({
  exit,
  removeCard,
  id,
}: SwipeButtonProps) {
  const handleSwipe = (action: 'left' | 'right') => {
    if (action === 'left') {
      exit(-200);
    } else if (action === 'right') {
      exit(200);
    }
    removeCard(id, action);
  };
  return (
    <div className="d-flex align-items-center position-absolute ms-8">
      <button
        onClick={() => handleSwipe('left')}
        className="btn btn-primary ms-3 me-3"
        style={{ backgroundColor: '#14b8a6', color: '#94a3b8' }}
      >
        Left
      </button>
      <button
        onClick={() => handleSwipe('right')}
        className="btn btn-primary ms-3 me-3"
        style={{ backgroundColor: '#14b8a6', color: '#94a3b8' }}
      >
        Right
      </button>
    </div>
  );
}
