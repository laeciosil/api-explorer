import { getProviders, signIn, getSession } from 'next-auth/react';

export default function SignIn({ providers }) {
  return (
    <div>
      { providers && Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            type="button"
            onClick={() => signIn(provider.id)}
          >
            Sign in with
            {' '}
            {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: '/' },
    };
  }
  return {
    props: { providers },
  };
}
