import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serverless - Next.js</title>
        <meta name="description" content="Serverless Next.js 应用" />
        <meta name="keywords" content="next,next.js,serverless,无服务" />
        <link rel="icon" href={`${process.env.STATIC_URL || ''}/favicon.ico`} />
      </Head>

      <main>
        <h1 className={styles.title}>欢迎访问 Next.js 应用，这只是一个github仓库的示例，自动触发构建</h1>

        <p className={styles.description}>
          <a href="https://cloud.tencent.com/product/ssr" target="_blank" rel="noopener noreferrer">
            腾讯云 Serverless
          </a>
          为您提供服务
        </p>
      </main>
    </div>
  )
}
