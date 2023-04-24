import { GetSessionParams, getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: GetSessionParams | undefined) {
    const session = await getSession(context);
  
    if (!session?.user.user) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  
    // const user = await prisma.user.findUnique({
    //   where: { id: session.userId },
    // });
  
    return {
      props: { user :''},
    };
  }


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