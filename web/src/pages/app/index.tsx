import {
  getAccessToken,
  getSession,
  useUser,
  withPageAuthRequired
} from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'

export default function Home() {
  const { user } = useUser()

  return (
    <div>
      {JSON.stringify(user, null, 2)}
      <h1>Hello world!</h1>

      <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = getAccessToken(req, res)
  console.log(token)

  return {
    props: {}
  }
}
