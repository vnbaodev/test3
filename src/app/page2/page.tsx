'use client'

import { Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import PageTable from '@/components/page.table'
import styles from '@/styles/page2styles.module.css'
import Container from 'react-bootstrap/Container'


const Page2 = () => {
    const router = useRouter()
    const ClickButton = () => {
        router.push("/")
    }
    return (
        <div>
            <h1 className={styles.title}>-- Programming Skill --</h1>
            <PageTable />
            <div>
                <Container>
                    <div className={styles.container}>
                        <Button className={styles.btn} onClick={() => ClickButton()}>
                            Back Home
                        </Button>
                    </div>
                </Container>
            </div>
        </div>

    )
}
export default Page2;

