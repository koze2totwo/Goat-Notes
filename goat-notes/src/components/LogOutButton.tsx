"use client"; 
import { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import { logOutAction } from '@/actions/users';


function LogOutButton() {
   const[loading,setLoading] = useState(false);


   const router = useRouter();

   const handleLogOut = async () => {
    setLoading(true);
   


    const {errorMessage} = await logOutAction() ;


    if(!errorMessage){
        toast("Logged-out",);
        router.push("/");
    }
    else{
        toast("error");
    }
    
    setLoading(false);
   };

  return (
    <Button variant="outline" 
    className='w-24'
    onClick={handleLogOut}
    disabled={loading}>{loading ? <Loader2 className='animate-spin' /> : "Log Out"}</Button>
  )
}

export default LogOutButton

function useToast(): { toast: any; } {
    throw new Error('Function not implemented.');
}
