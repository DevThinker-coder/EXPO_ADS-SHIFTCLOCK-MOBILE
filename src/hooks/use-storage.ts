import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageValue<T> = T | null;

export function useStorage<T = any>() {
  // Get item and parse from string
  const getItem = async (key: string): Promise<StorageValue<T>> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value === null) return null;
      try {
        // Try to parse JSON, fallback to string
        return JSON.parse(value);
      } catch {
        return value as unknown as T;
      }
    } catch (e) {
      return null;
    }
  };

  // Set item, always stringify
  const setItem = async (key: string, value: T): Promise<void> => {
    try {
      const stringValue =
        typeof value === 'string' ? value : JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (e) {
      // handle error if needed
    }
  };

  // Remove item
  const removeItem = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // handle error if needed
    }
  };

  return { getItem, setItem, removeItem };
}
