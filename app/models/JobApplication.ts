/**
 * @file JobApplication.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-17
 *
 * @changelog
 *  - 2023-11-17 - Higor Grigorio
 *    - Create JobApplication.ts.
 */

export interface JobApplicationModel {
    id: number;
    job_id: number;
    user_id: number;
    status: string;
    createdAt: string;
    updatedAt: string;
}
