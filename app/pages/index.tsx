import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main>
      <h1>Formik Wizard Examples</h1>
      <ul>
        <li>
          <Link href="/provider-example">
            <a>{`<FormikWizard /> Example`}</a>
          </Link>
        </li>
        <li>
          <Link href="/hook-example">
            <a>{`useFormikWizard() Example`}</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        main {
          max-width: 500px;
          margin: 2rem auto;
          padding-bottom: 20rem;
        }
        a {
          display: block;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          color: rgb(68, 122, 221);
          text-decoration: underline;
          font-size: 20px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          margin-left: 1rem;
        }
      `}</style>
    </main>
  );
};

export default Home;
