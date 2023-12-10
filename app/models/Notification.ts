/**
 * @file Notification.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-12-05
 *
 * @changelog
 *  - 2023-12-05 - Higor Grigorio
 *    - Create Notification.ts.
 */

export class NotificationModel {
    id: number;
    title: string;
    description: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
    readAt?: string;
}
