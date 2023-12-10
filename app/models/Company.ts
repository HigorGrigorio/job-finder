/**
 * @file Company.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-17
 *
 * @changelog
 *  - 2023-11-17 - Higor Grigorio
 *    - Create Company.ts.
 */
import {LocationModel} from "./Location";

export interface CompanyModel {
    id: number;
    name: string;
    logo: string;
    website: string;
    email: string;
    description: string;
    location: LocationModel;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}
