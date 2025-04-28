'use client';

export const useLocalStorage = () => {
  const setItem = ({ key, value }: { key: string; value: string }) => {
    localStorage.setItem(key, value);
  };

  const getItem = ({ key }: { key: string }) => {
    return localStorage.getItem(key);
  };

  const removeItem = ({ key }: { key: string }) => {
    localStorage.removeItem(key);
  };

  const getAllItems = () => {
    const items: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        items[key] = localStorage.getItem(key) || '';
      }
    }
    return items;
  };

  return { setItem, getItem, removeItem, getAllItems };
};
