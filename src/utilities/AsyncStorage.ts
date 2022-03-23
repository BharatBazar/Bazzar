import AsyncStorage from 'react-native-async-storage';

export const StorageItemKeys = {
    Token: 'Token',
};

export class Storage {
    static async getItem(key: string) {
        const item = await AsyncStorage.getItem(key);
        let data;

        if (item) {
            try {
                data = JSON.parse(item);
            } catch (e) {
                data = item;
            }
        } else {
            data = undefined;
        }
        return data;
    }

    static async setItem(key: string, data: Object | string) {
        await AsyncStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data));
    }

    static async removeItem(key: string) {
        await AsyncStorage.removeItem(key);
    }
}
