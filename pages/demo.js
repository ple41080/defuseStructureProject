import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import Navbar from './Components/Navbar';
import { useRouter } from 'next/router';



export default function demo () {
  const router = useRouter();
  const [showId , setId] =useState();
 const id =  router.query.id
 useEffect(() => {
   setId(id)
 }, [id])
 
  const iconSize = "large"
  return (
    <div>
      <Navbar/>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className=' justify-center'>
         <p>{id}</p>
          </div>
         
        </div>  
    </div>

  )
}
