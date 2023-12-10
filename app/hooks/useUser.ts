/**
 * @file useUser.ts
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-12-05
 *
 * @changelog
 *  - 2023-12-05 - Higor Grigorio
 *    - Create useUser.ts.
 */
import {useEffect, useState} from "react";
import {UserModel} from "../models";
import {user as FakeUser} from "./index";

export function useUser(id) {
    const [user, setUser] = useState<UserModel>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            await new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
                setUser(FakeUser);
                setLoading(false);
            });
        }

        fetchUser();
    }, [id]);

    return {user, loading};
}
