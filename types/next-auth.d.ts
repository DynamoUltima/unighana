import NextAuth from "next-auth";
export type Role = "client" | "admin" | "provider";


export interface Data {
    _id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    __v?: number;
}



declare module "next-auth" {

    interface Session {
        user: {
            message: string;
            user: Data;
            
        }
    }
}