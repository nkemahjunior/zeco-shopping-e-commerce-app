import { getAllNewArrivals } from "@/api/getAllClothes";
import { prefetchData } from "@/helpers/prefetchData";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react";

export  function useAllNewArrivals(){



    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const createQueryString = useCallback(

        (name, value) => {

          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
    )


    const curPage = Number(searchParams.get('page'))
    
    curPage === 0 || null || undefined ? router.push(pathname + '?' + createQueryString('page', 1)) : Number(searchParams.get('page'))


    const{isLoading,data} = useQuery({
        queryKey:['allNewArrivals',curPage],
        queryFn: () => getAllNewArrivals({curPage})
    })

    

    //prefetching
    prefetchData(data?.count ?? 0,curPage,getAllNewArrivals,'allNewArrivals')
    
   

   return {isLoading,data}
}