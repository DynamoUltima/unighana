// import { LockClosedIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';




const SignUp = () => {

    const router = useRouter();

    const { data: session } = useSession()
    console.log({ session })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    if (session?.user.message=='success') {
        router.push('/dashboard')
    }


    const handlesignUp = async (e: any) => {
        e.preventDefault()

        try {

            const data = await signIn("credentials", {
                email: email,
                password: password,
                firstName,
                lastName,
                redirect: false,
                // callbackUrl: "http://localhost:8080/businessPage",
            });
            console.log('signupPage')
            console.log(data)
            // console.log(session)
            // if(session?.user.message!='success'){
            //     toast.error(session?.user.message)
            //   }
            // if(session?.user.message=='success'){
            //     toast.success(session?.user.message)
            //     router.push('/dashboard')
            // }
            //   setEmail('')
            //   setPassword('')
            // setFirstName('');
            // setLastName('')
            console.log(session)
           


        } catch (error) {
            console.log(error);

        }


        console.log({ email, password })

    }


    return (
        <>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                       
                        <div className='mx-auto  flex justify-center relative'><div>Unighana</div></div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create An Accout</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">

                            <a className="font-medium text-lg text-[#2DD4BF] hover:text-[#2DD4BF]">
                               Unighana
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-0" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div>
                            <label htmlFor="first-name" className="sr-only">
                                First Name
                            </label>
                            <input
                                id="first-name"
                                name="first-name"
                                type="text "
                                // autoComplete="email"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                placeholder="first Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="sr-only">
                                Last Name
                            </label>
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                // autoComplete="email"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="new-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                           
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        

                        <div className="pt-10">
                            <button
                                 onSubmit={handlesignUp}
                                // onClick={handlesignUp}
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2DD4BF] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2DD4BF]"

                            >
                                
                                Sign up
                            </button>
                        </div>

                        
                            <div className="text-sm flex items-center py-4">
                                {/* href="/dashboard"  */}
                                <Link href={'/auth/signin'}>
                                <p className="font-medium text-[#2DD4BF] hover:text-[#2DD4BF]">
                                    Already have an account? signin
                                </p>
                                </Link>
                            </div>

                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>

    );
}

export default SignUp;