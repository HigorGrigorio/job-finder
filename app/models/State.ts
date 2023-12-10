/**
 * @file State.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-17
 *
 * @changelog
 *  - 2023-11-17 - Higor Grigorio
 *    - Create State.ts.
 */

export interface StateModel {
    id: number;
    name: string;
    initials: string;
    country_id: number;
    createdAt: string;
    updatedAt: string;
}
