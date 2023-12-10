/**
 * @file index.tsx
 * @author Higor Grigorio <higorgrigorio@gmail.com>
 * @date 2023-11-30
 *
 * @changelog
 *  - 2023-11-30 - Higor Grigorio
 *    - Create index.tsx.
 */
import {AuthRoutes} from "./auth.routes";
import {AuthContext} from "../contexts/auth";
import {useContext} from "react";
import AppRoutes from "./app.routes";

export const Routes = () => {
    const {signed} = useContext(AuthContext);
    return !signed ? <AuthRoutes/> : <AppRoutes/>;
}
