// import { LockClosedIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";




const SignUp = () => {

    const router = useRouter();

    const { data: session } = useSession()
    

    const formik = useFormik({
        initialValues: {
            firstName:'',
          lastName:'',
          email:'',
          password:'',
          
         
        },
        validationSchema: Yup.object({
          email: Yup.string().email()
            .required('email is a required field!!'),
          password: Yup.string().required('password is a required field'),
          firstName: Yup.string().required('firstName is a required field'),
          lastName: Yup.string().required('lastName is a required field'),

          
        
    
        }),
        validateOnChange:true,
        onSubmit:async (values,{ resetForm }) => {
          console.log(values);
          console.log('clicked');
          try {
            
    
            const data = await signIn("credentials", {
                email: values.email,
                password: values.password,
                firstName:values.firstName,
                lastName:values.lastName,
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
                toast.success(' Succesful',)
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
                       
                        <div className='mx-auto  flex justify-center relative'><div>Unighana</div></div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create An Accout</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">

                            <a className="font-medium text-lg text-[#2DD4BF] hover:text-[#2DD4BF]">
                               Unighana
                            </a>
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="mt-8 space-y-0" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div>
                            <label htmlFor="first-name" className="sr-only">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="first-name"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
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
                                id="lastName"
                                name="lastName"
                                type="text"
                                // autoComplete="email"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
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
                                    autoComplete="off"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
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
                                    autoComplete="off"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        

                        <div className="pt-10">
                            <button
                                // //  onSubmit={handlesignUp}
                                //  onClick={handlesignUp}
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

                            {formik.errors.email ? <p className='text-red-400 '>{formik.errors.email} </p> :null}
                            {formik.errors.password ? <p className='text-red-400 '>{formik.errors.password} </p> :null}
                            {formik.errors.firstName ? <p className='text-red-400 '>{formik.errors.firstName} </p> :null}
                            {formik.errors.lastName ? <p className='text-red-400 '>{formik.errors.lastName} </p> :null}

                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>

    );
}

export default SignUp;