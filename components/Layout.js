import Head from "next/head";
import Search from './Search'
import Header from './Header'
export default function Layout({title,keywords,description,children}) {
  return (
    <div>
      <Head>
          <title>{title}</title>
          <meta name='keywords' content={keywords} />
          <meta name='description' content={description}/>
          <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

Layout.defaultProps ={
    title: 'Welcome DevSpace',
    keywords:'devlopment, coding, programming',
    description:'The best info and news in development',
}
