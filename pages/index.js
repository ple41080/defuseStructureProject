import React from 'react'
import { Card, Col, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import Navbar from './Components/Navbar';



export default function () {
  const iconSize = "large"
  return (
    <div>
      <Navbar/>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className=' justify-center'>
          <Row>
            <Col style={{ width:"300px" }}>
              <div className='w-full  inline-block px-1 mt-1 '>
                <a href='/userMag'>
                  <Card className=' hover:bg-slate-400'>
                    <p className='text-center'> <UsergroupAddOutlined style={{ fontSize: "" }} />  User Management</p>
                  </Card>
                </a>
              </div>
            </Col>
            <Col style={{ width:"300px" }}>
              <div className='w-full inline-block px-1 mt-1'>
                <a href='#'>
                  <Card className=' hover:bg-slate-400'>
                    <p className='text-center'> <UsergroupAddOutlined style={{ fontSize: "" }} />From Management</p>
                  </Card>
                </a>
              </div>
            </Col>
            <Col style={{ width:"300px" }}>
              <div className='w-full inline-block px-1 mt-1'>
                <a href='#'>
                  <Card className=' hover:bg-slate-400'>
                    <p className='text-center'> <UsergroupAddOutlined style={{ fontSize: "" }} />  Internship Management</p>
                  </Card>
                </a>
              </div>
            </Col>
          </Row>
          </div>
         
        </div>  
    </div>

  )
}
