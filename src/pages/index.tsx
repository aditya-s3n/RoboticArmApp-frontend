import Head from 'next/head'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'

import Card from "@/components/Card/Card";
import Queue from '@/components/Queue/Queue';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Robotic ARM</title>
        <meta name="description" content="Web App for Robotic Arm Project IRHS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossOrigin="anonymous" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossOrigin="anonymous" />
      
      <Header />
      <main className={styles.home}>
        <div className='d-flex justify-content-center align-items-center my-5'>
          <Card 
            title='Peace Sign'
            size={100}
            imgURL='/card-imgs/peace-sign.png'
            className='mx-4'
          />
          
          <h1 className='mx-2'>NAME</h1>
        </div>
        
        <h1>CURRENT</h1>

        <div className='d-flex justify-content-center'>
          <h2>Queue:</h2>
          
          <Queue />
        </div>

        <div className='d-flex justify-content-center mx-5 px-5 my-3'>
          <h2 className='mx-2'>NAME: </h2>

          <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="Type here..." aria-label="Username" aria-describedby="addon-wrapping" />
          </div>

          <button type="button" className="btn btn-success btn-lg mx-2">Submit</button>
        </div>

        <div className='d-flex justify-content-center'>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link active" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Card 
            title='Peace Sign'
            size={75}
            imgURL='/card-imgs/peace-sign.png'
            className='mx-4'
          />
          <Card 
            title='Peace Sign'
            size={75}
            imgURL='/card-imgs/peace-sign.png'
            className='mx-4'
          />
          <Card 
            title='Peace Sign'
            size={75}
            imgURL='/card-imgs/peace-sign.png'
            className='mx-4'
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
