import {createApi} from "@reduxjs/toolkit/query/react";
import {serverBaseQuery} from "../utils/fetchBaseQuery";
import type {IAccountRegister} from "../types/account/IAccountRegister";
import {serialize} from "object-to-formdata";
// import type {IAccountLogin} from "../types/account/IAccountLogin";
// import type {IAccountResponse} from "../types/account/IAccountResponse";

export const apiAccount = createApi({
    reducerPath: "apiAccount",
    baseQuery: serverBaseQuery("account"),
    endpoints: (builder) => ({
        register: builder.mutation<null, IAccountRegister>({
            query: (model) => {
                try {

                    const formData = serialize(model);
                    return {
                        method: "POST",
                        url: "register",
                        body: formData
                    }
                } catch {
                    throw new Error("Помилка перетворення данних");
                }
            },
        }),
        // login: builder.mutation<IAccountResponse, IAccountLogin>({
        //     query: (model) => {
        //         try {
        //             return {
        //                 method: "POST",
        //                 url: "login",
        //                 body: model
        //             }
        //         } catch {
        //             throw new Error("Помилка перетворення данних");
        //         }
        //     },
        //     // transformResponse: (response: ILoginResponse) => {
        //     //     localStorage.setItem("token", response.token);
        //     //     return response;
        //     // },
        // })
    })
})

export const {
    useRegisterMutation,
    // useLoginMutation
} = apiAccount;