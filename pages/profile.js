import React from 'react'
import { Card, Col, Row, Image, Form, Input } from 'antd'
import FormEditProfile from './components/FormEditProfile'
import { useRouter } from 'next/router'



export default function Profile() {
    const size = "large"
    const router = useRouter();
    return (
        <div>

            <header className="bg-gradient-to-r  from-rose-600  via-red-400 to-pink-500 ... shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h3 className=" text-xl font-bold   tracking-tight  text-white inline">แก้ไขข้อมูลส่วนตัว</h3>
                </div>
            </header>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className=' justify-center'>
                    <button onClick={() => router.back()} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            ย้อนกลับ
                        </span>
                    </button>
                 
                    <Card>
                        <div className=' '>
                            <Col className='mx-2'>

                                <Image
                                    className='rounded-full'
                                    width={200}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />

                            </Col>
                        </div>
                        <FormEditProfile />
                        {/* <Form style={{ display: "inline" }}>
                            <div className=' '>
                                <Col className='mx-2'>

                                    <Image
                                        className='rounded-full'
                                        width={200}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />

                                </Col>
                            </div>
                            <Row style={{ width: "100%" }}>

                                <br />
                                <div className='w-1/2 mt-1'>
                                    <Col className='mx-2'>

                                        <Form.Item>

                                            <Input value={'อัฐพล'} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                        </Form.Item>

                                    </Col>
                                </div>
                                <div className='w-1/2   mt-1'>
                                    <Col className='mx-2'>

                                        <Form.Item>

                                            <Input value={'พลฤทธิ์'} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                        </Form.Item>

                                    </Col>
                                </div>
                                <div className='w-full   mt-1'>
                                    <Col className='mx-2'>

                                        <Form.Item>

                                            <Input className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                                        </Form.Item>

                                    </Col>
                                </div>

                            </Row>


                        </Form> */}

                    </Card>
                </div>

            </div>
        </div>

    )
}
