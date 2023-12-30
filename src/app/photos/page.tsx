'use client'
import styles from '@/styles/photos.module.css'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import Container from 'react-bootstrap/Container'


const Photos = () => {
    const router = useRouter()
    const ClickButton = () => {
        router.push("/")
    }
    return (
        <div>

            <div className={styles.photobook}>
                <div className={styles.frame1}>
                    <img className={styles.imgsize} src="https://assets.atmos-tokyo.com/items/S/jwl-008-wt-cl-1s.jpg" />
                    <div><strong>No.1</strong></div>
                    <div>Đây là hình No.1 nè</div>
                </div>
                <div className={styles.frame1}>
                    <img className={styles.imgsize} src="https://assets.atmos-tokyo.com/items/S/mop-007-mt-cl-1s.jpg" />
                    <div><strong>No.2</strong></div>
                    <div>Đây là hình No.2 nè</div>
                </div>
                <div className={styles.frame1}>
                    <img className={styles.imgsize} src="https://assets.atmos-tokyo.com/items/S/mmj-003-wt-wt-1s.jpg" />
                    <div><strong>No.3</strong></div>
                    <div>Đây là hình No.3 nè</div>
                </div>
                <div className={styles.frame2}>
                    <img className={styles.imgsize} src="https://assets.atmos-tokyo.com/items/S/26173497-1s.jpg" />
                    <div><strong>No.4</strong></div>
                    <div>Đây là hình No.4 nè</div>
                </div>
                <div className={styles.frame2}>
                    <img className={styles.imgsize} src="https://assets.atmos-tokyo.com/items/S/26173498-1s.jpg" />
                    <div><strong>No.5</strong></div>
                    <div>Đây là hình No.5 nè</div>
                </div>
                <div className={styles.frame2}>
                    <img className={styles.imgsize} src="https://assets.atmos-tokyo.com/items/S/26173492-1s.jpg" />
                    <div><strong>No.6</strong></div>
                    <div>Đây là hình No.6 nè</div>
                </div>
            </div>
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

export default Photos;
