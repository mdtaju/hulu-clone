import Head from 'next/head'

function Title(props) {
    return (
        <>
             <Head>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" />                 */}
                <title>{props.title}</title>
            </Head>
        </>
    )
}

export default Title
