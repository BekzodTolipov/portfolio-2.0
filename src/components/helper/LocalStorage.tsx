function getStorageValue(key: string, defaultValue?: any) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : null;
  return initial || defaultValue;
}

function setToStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export { getStorageValue, setToStorage };
