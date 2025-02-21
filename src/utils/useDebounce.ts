import { useCallback, useRef } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(callback: T, delay: number) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (...args: Parameters<T>) => {
      // 이전 타이머가 있다면 취소
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // 새로운 타이머 설정
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
}
