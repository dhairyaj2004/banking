"use server"
import { createSessionClient,createAdminClient } from "../appwrite"
import { ID } from "node-appwrite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"
export const signIn=async({Email,Password}:signInProps)=>{
    try {
      const { account } = await createAdminClient();
      const response = await account.createEmailPasswordSession(Email, Password);
      //TODO:direct signin problem
      
  
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
    
