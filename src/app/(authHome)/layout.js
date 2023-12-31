
import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/ui/footer/Footer'
import BothHeaders from '@/ui/headerFeature/BothHeaders'
import ReactQueryProvider from './ReactQueryProvider'
import ReactHotToast from './ReactHotToast'
import ShoppingCart from '@/ui/ShoppingCart'
import ReduxProvider from './Redux'
import NumberOfItemsOnMount from '@/ui/NumberOfItemsOnMount'
import { checkIfSessionExists } from '../auth/checkSession'
import { getUser } from '@/api/authentication'
import Head from 'next/head'


// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { revalidatePath } from 'next/cache'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zeco shopping',
  description: 'buy clothes online in bamenda, buea,douala,cameroon ',
  icon:"/favicon.png"

}

export default async function RootLayout({ children }) {



  // const supabase = createServerComponentClient({cookies});

  // const {data:{ session }} = await supabase.auth.getSession();

  // if(!session) {
  //     redirect('/login')
  // }


 return (
  
    <html lang="en">
      <head><meta name="google-site-verification" content="l7FBNCY3ohZpAdZki4ZBpIMpW8SXrHJ6o5AoYH5PwEg" /></head>
      <Head>
      <meta name="google-site-verification" content="l7FBNCY3ohZpAdZki4ZBpIMpW8SXrHJ6o5AoYH5PwEg" />
      </Head>
     
      
      <body className={`${inter.className} `} >
        <ReactQueryProvider>
         <ReduxProvider>
            <ReactHotToast/>
            <NumberOfItemsOnMount/>
            <BothHeaders />
            <ShoppingCart/>
            
              {children}        
            
            <Footer/>
         </ReduxProvider>
        </ReactQueryProvider>
      </body>

      
     
    </html>
  
  )
}
