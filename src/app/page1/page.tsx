'use client'

import { Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import styles from '@/styles/page1styles.module.css'
import Container from 'react-bootstrap/Container'


const Page1 = () => {
    const router = useRouter()
    const ClickButton = () => {
        router.push("/")
    }
    return (
        <div>
            <h1 className={styles.title}>-- My Profile --</h1>
            <div className={styles.text}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <span><b>名前</b></span>：長野上田
                    </li>
                    <li className={styles.li}>
                        <span><b>性別</b></span>：男性
                    </li>
                    <li className={styles.li}>
                        <span><b>国籍</b></span>：日本
                    </li>
                    <li className={styles.li}>
                        <span><b>学校</b></span>：エビ学園
                    </li>
                    <li className={styles.li}>
                        <span><b>専門</b></span>：感性工学コース
                    </li>
                    <li className={styles.li}>
                        <span><b>年齢</b></span>：二十歳
                    </li>
                    <li className={styles.li}>
                        <span><b>趣味</b></span>：サッカー、バドミントン
                    </li>
                    <li className={styles.li}>
                        <span><b>研究の内容</b></span>：繊維を分析するための機械学習
                    </li>
                    <li className={styles.li}>
                        <span><b>プログラミングの経験</b></span>：なし
                    </li>
                </ul >
            </div>
            <Container>
                <div className={styles.container}>
                    <Button className={styles.btn} onClick={() => ClickButton()}>
                        Back Home
                    </Button>
                </div>
            </Container>
        </div >
    )
}
export default Page1;