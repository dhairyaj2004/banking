"use server"
import { createSessionClient,createAdminClient } from "../appwrite"
import { ID } from "node-appwrite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"
export const signIn=async({Email,Password}:signInProps)=>{
    try {
      const { account } = await createAdminClient();
      const response = await account.createEmailPasswordSession(Email, Password);
  
      
  
      return parseStringify(response)
    } catch (error) {
        console.error("Error",error)
    }
}
export const signUp=async({...userData}:SignUpParams)=>{
    try {
        const { account } = await createAdminClient();
        const {Email,Password,firstName,lastName}=userData
        let newUserAccount=await account.create(ID.unique(), Email, Password, `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(Email, Password);
       
        (await cookies()).set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccount)
    } catch (error) {
        console.error("Error",error)
    }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

  export const logoutAccount = async () => {
      try {
        const { account } = await createSessionClient();
    
        (await cookies()).delete('appwrite-session');
    
        await account.deleteSession('current');
      } catch (error) {
        return null;
      }
    }
    

/* eslint-disable @typescript-eslint/no-unused-vars */
// 'use server';

// import { ID, Query } from "node-appwrite";
// import { createAdminClient, createSessionClient } from "../appwrite";
// import { cookies } from "next/headers";
// import { encryptId, extractCustomerIdFromUrl, parseStringify } from "../utils";


// const {
//   APPWRITE_DATABASE_ID: DATABASE_ID,
//   APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
//   APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
// } = process.env;

// export const getUserInfo = async ({ userId }: getUserInfoProps) => {
//   try {
//     const { database } = await createAdminClient();

//     const user = await database.listDocuments(
//       DATABASE_ID!,
//       USER_COLLECTION_ID!,
//       [Query.equal('userId', [userId])]
//     )

//     return parseStringify(user.documents[0]);
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const signIn = async ({ email, password }: signInProps) => {
//   try {
//     const { account } = await createAdminClient();
//     const session = await account.createEmailPasswordSession(email, password);

//     (await cookies()).set("appwrite-session", session.secret, {
//       path: "/",
//       httpOnly: true,
//       sameSite: "strict",
//       secure: true,
//     });

//     const user = await getUserInfo({ userId: session.userId }) 

//     return parseStringify(session);
//   } catch (error) {
//     console.error('Error', error);
//   }
// }

// export const signUp = async ({  ...userData }: SignUpParams) => {

//   try {
//     const { account, database } = await createAdminClient();
//     const {Email,Password,firstName,lastName}=userData
//     let newUserAccount=await account.create(ID.unique(), Email, Password, `${firstName} ${lastName}`);

//     if(!newUserAccount) throw new Error('Error creating user')

//     const session = await account.createEmailPasswordSession(Email, Password);

//     (await cookies()).set("appwrite-session", session.secret, {
//       path: "/",
//       httpOnly: true,
//       sameSite: "strict",
//       secure: true,
//     });

//     return parseStringify(newUserAccount);
//   } catch (error) {
//     console.error('Error', error);
//   }
// }

// export async function getLoggedInUser() {
//   try {
//     const { account } = await createSessionClient();
//     const result = await account.get();

//     const user = await getUserInfo({ userId: result.$id})

//     return parseStringify(result);
//   } catch (error) {
//     console.log(error)
//     return null;
//   }
// }

// export const logoutAccount = async () => {
//   try {
//     const { account } = await createSessionClient();

//     (await cookies()).delete('appwrite-session');

//     await account.deleteSession('current');
//   } catch (error) {
//     return null;
//   }
// }


