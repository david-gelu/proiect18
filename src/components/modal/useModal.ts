import { useState } from 'react';

interface UseModalReturn {
  isShowing: boolean;
  toggle: () => void;
}

const useModal = (pokemon: any): UseModalReturn => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  function toggle(): void {
    setIsShowing(!isShowing);
  }
  return {
    isShowing,
    toggle
  };
};

export default useModal;
