/**
 * @file Location.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-17
 *
 * @changelog
 *  - 2023-11-17 - Higor Grigorio
 *    - Create Location.ts.
 */
import {CityModel} from "./City";

export interface LocationModel {
    id: number;
    name: string;
    city: string;
    state: string;
    country: string;
    address: string;
    createdAt: string;
    updatedAt: string;
}
