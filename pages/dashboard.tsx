import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {


    const router =  useRouter()
    const  handleLogout=async()=>{
        const data = await signOut({redirect:false,});
        console.log('sign out')
        console.log(data)
        router.push('/')
        
      }
   

    return (
        <div className=" h-screen flex justify-center items-center">
            
            <button onClick={handleLogout} className='btn   border-none bg-[#2DD4BF] p-4 text-white capitalize rounded-full'>
                        Logout
            </button>
        </div>
    );
}

export default Dashboard;