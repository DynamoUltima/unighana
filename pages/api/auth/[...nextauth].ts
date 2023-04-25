import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt"

  },
  
  // cookies: {},

  pages: {
    signIn: "/signin",
    //  signOut:"/authPage"
  },
  secret: "unighana1126",







  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text", placeholder: "" },
        password: { label: "Password", type: "text" },
        firstName: { label: "firstName", type: "text" },
        // lastName: { label: "lastName", type: "text" },
        // phone: { label: "phone", type: "text" },
      },
      async authorize(credentials, req) {
        // console.log({credentials,text:'from next auth'});
        // Add logic here to look up the user from the credentials supplied
       
        console.log('welcome')



      //  let user;
 
        let email = credentials?.email;
        let password = credentials?.password;
        let firstName = credentials?.firstName;
        // let lastName = credentials?.lastName;
        // let phone = credentials?.phone;
        
        console.log('credentials')
        console.log(email)
        console.log(password)

        try {

          let user;
          if(!firstName){
            const response = await axios.post('https://unighana-pi.vercel.app//api/login', {
              email, password
            })
    
            // console.log(response)
            
             console.log('log in')
             user = response.data;
          }

          
            if(firstName){
              const response = await axios.post('https://unighana-pi.vercel.app//api/signup', {
                email, password
              })
      
              // console.log(response)
              
               console.log('signup')
               user = response.data;
            }
          
          
    
  
  
          if (user) {
            console.log('hello user')
  
            console.log(user);
          
            return user;
            // Any object returned will be saved in `user` property of the JWT
  
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return  user
  
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
          
        } catch (error) {
          console.log('error called')
         

          throw error

          
        }
          




      }
    })
  ], 
  
  

  callbacks: {
    async jwt({ token, user, }) {
      console.log('jwt')
      console.log(user)
      return { ...token, ...user }
    },
    // async redirect({ url, baseUrl }) {
    //   console.log(baseUrl)
    //   return baseUrl
    // },
    async session({ session, token, user }) {
      console.log('hello');

      session.user = token as any;
      console.log(session)

      return session

    }
  },



})


