import { ReactNode, FC } from "react";
import Head from "next/head";

type Props = {
    children: ReactNode,
    title: string,
    desc: string,
}
//共通のレイアウト
const Layout: FC<Props> = ({children, title = 'Next.js', desc}) => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center'>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
            </Head>
            <main className='flex w-screen flex-1 flex-col items-center justify-center'>
                {children}
            </main>
        </div>
    )
}

export default Layout;