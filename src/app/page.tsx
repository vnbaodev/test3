'use client'

import Container from 'react-bootstrap/Container'
import { Button, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/navigation'
import styles from '@/styles/pagestyles.module.css'

function Home() {
  const router = useRouter()
  const ClickButton1 = () => {
    router.push("/page1");
  };
  const ClickButton2 = () => {
    router.push("/page2");
  };

  return (
    <Container>
      <div>
        <div className={styles.text1}>
          WELCOME TO MY PROFILE PAGE
        </div>
        <div className={styles.container}>
          <Button className={styles.btn1} onClick={() => ClickButton1()}>
            <div className={styles.btntext}>
              Profile and More
            </div>
          </Button>
          <Button className={styles.btn2} onClick={() => ClickButton2()}>
            <div className={styles.btntext}>
              Programming Skill
            </div>
          </Button>
        </div>
      </div>
    </Container >
  );
}

export default Home;
