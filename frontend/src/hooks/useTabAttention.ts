import { useEffect } from 'react';

export function useTabAttention() {
  useEffect(() => {
    const originalTitle = 'Prajwal Patil — Full Stack Developer';
    const awayTitle = 'Prajwal Patil | Portfolio & Contact';

    const handleVisibilityChange = () => {
      document.title = document.hidden ? awayTitle : originalTitle;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}
