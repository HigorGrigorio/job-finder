/**
 * @file Comment.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-17
 *
 * @changelog
 *  - 2023-11-17 - Higor Grigorio
 *    - Create Comment.ts.
 */

export interface CommentModel {
    id: number;
    comment: string;
    job_id: number;
    likes: number;
    unlikes: number;
    createdAt: string;
    updatedAt: string;
}	