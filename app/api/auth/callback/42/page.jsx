import { permanentRedirect } from 'next/navigation'
async function getCredentials(code) {
    const response = await fetch("https://api.intra.42.fr/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: process.env._42_CLIENT_ID,
          client_secret: process.env._42_CLIENT_SECRET,
          code: code,
          redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/42-school`,
        }),
      });

    const data = await response.json()
    return data
}
export default async function CallBack42({params, searchParams}){
    // const { code } = await searchParams;
    // const data = await getCredentials(code)

    // console.log(code , data)
    // permanentRedirect('/')

    // return (
    //     <div className="">00000</div>
    // )
}