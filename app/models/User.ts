/**
 * @file User.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-17
 *
 * @changelog
 *  - 2023-11-17 - Higor Grigorio
 *    - Create User.ts.
 */
import {LocationModel} from "./Location";

export interface UserModel {
    id: number;
    name: string;
    email: string;
    phone: string;
    profile: string; // 4096
    experience: string; // 4096
    avatar: string;
    coverImage: string;
    createdAt: string;
    updatedAt: string;
}
