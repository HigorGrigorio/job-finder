/**
 * @file useUser.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-12-05
 *
 * @changelog
 *  - 2023-12-05 - Higor Grigorio
 *    - Create useUser.ts.
 */
import {UserModel} from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function useUser(): Promise<UserModel> {
    return JSON.parse(await AsyncStorage.getItem("user"));
}
