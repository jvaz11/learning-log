import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
                <p>Hi, I'm Juan. I'm a software engineer and music maker living in Los Angeles. I like meeting fellow humans. You can reach me at juan@juanvazquez.io</p>
            <section className={utilStyles.headingMd}>
                {/* <p>
                    (This is a sample website - you’ll be building a site like
                    this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p> */}
            </section>
        </Layout>
    );
}
