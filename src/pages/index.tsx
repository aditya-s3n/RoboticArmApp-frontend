import { useState } from 'react';

import { redirect } from 'next/navigation';
import Head from 'next/head'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'

import Card from "@/components/Card/Card";
import Queue from '@/components/Queue/Queue';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Selection from '@/components/Selection/Selection';

import { selectionNames } from '@/utils/selection_names';
import PresetSelection from '@/components/PresetSelection/PresetSelection';

import { makeRequest } from '@/utils/makeRequest';

function Home() {
  const [name, setName] = useState("");
  const [preset, setPreset] = useState("");

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
            setPreset={setPreset}
          />
          
          <h1 className='mx-2'>NAME</h1>
        </div>
        
        <h1 className='text-success text-decoration-underline'>CURRENT POSITION</h1>

        <div className='d-flex justify-content-center my-5'>
          <h2>Queue:</h2>
          
          <Queue />
        </div>

        <div className="d-flex justify-content-center my-4">
          <h2 className='mx-2'>NAME: </h2>

          <Selection 
            itemList={selectionNames} 
            className={styles.input_text}
            setSelectionVariable={setName}
            selectionList={selectionNames}
          />

          <button 
            type="button" 
            className="btn btn-success btn-lg mx-2"
            onClick={() => {
              makeRequest(name, preset);
            }}
          >Submit</button>
        </div>

        <div>
          <PresetSelection
            name={name}
            preset={preset}
          />
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
            setPreset={setPreset}
          />
          <Card 
            title='Peace Sign'
            size={75}
            imgURL='/card-imgs/peace-sign.png'
            className='mx-4'
            setPreset={setPreset}
          />
          <Card 
            title='Peace Sign'
            size={75}
            imgURL='/card-imgs/peace-sign.png'
            className='mx-4'
            setPreset={setPreset}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home;