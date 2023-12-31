
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabaseKey, supabaseUrl } from "@/services/supabase url&key";


export async function checkIfUserIsLogin(route,isLogin){

    const Login = isLogin;
    
    const cookieStore = cookies()

    const supabase = createServerComponentClient({cookies: () => cookieStore},{supabaseUrl,supabaseKey});

        const {data:{ session }} = await supabase.auth.getSession();

        if( Login && session) {
            redirect(route)
        }

        if( !Login && !session){
            redirect(route)
        }

        if(!route && !isLogin && session){
            return session;
        }else{
            return false;
        }


        
    
}