import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";

const Signin = () => {
    const router = useRouter();
    const { data: session } = useSession()
    
    
   
    const formik = useFormik({
        initialValues: {
          email:'',
          password:''
         
        },
        validationSchema: Yup.object({
          email: Yup.string().email()
            .required('email is a required field!!'),
          password: Yup.string().required('password is a required field'),
          
        
    
        }),
        validateOnChange:false,
        onSubmit:async (values,{ resetForm }) => {
          console.log(values);
          console.log('clicked');
          try {
            
           
            const data = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
                
            });
            data;
            console.log('AuthPage')
            console.log(data)
            console.log(session)
            if(data?.error){
                toast.error('Invalid Credentials');
               
             }

             if(data?.ok){
                toast.success( 'Successful')
                router.push('/dashboard')
             }
            resetForm()
            
        
            } catch (error) {
            console.log('error')
            console.log(error);

        }
          
        }
      })
      
    

    

   



    return (
        <>

            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        
                        <div className='mx-auto flex justify-center relative'>UniGhana</div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">

                            <a className="font-medium text-lg text-[#2DD4BF] hover:text-[#2DD4BF]">
                               UniGhana
                            </a>
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
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
                                    autoComplete="current-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            
                        </div>
                        {formik.errors.email ? <p className='text-red-400 '>{formik.errors.email} </p> :null}
                        {formik.errors.password ? <p className='text-red-400 '>{formik.errors.password} </p> :null}

                       

                        <div className="py-10">
                            <button
                                
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2DD4BF] hover:bg-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                            >
                                
                                Sign in
                            </button>
                        </div>


                        <div className="text-sm flex items-center py-4">
                            <Link href={'/auth/signup'}>
                                <p className="font-medium text-[#2DD4BF] hover:text-[#2DD4BF]">
                                    Create an account
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

export default Signin;