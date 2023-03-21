import React from 'react'
import { Space, Table, Tag, Button, Modal, Form, Input, Select, Tabs, Row, message } from 'antd';
import { EyeOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import axiosInstance from '../../utils/axios'
import { useRouter } from 'next/router';
export default function FormEditCompany(item) {
   // console.log(item)
    const [messageApi, contextHolder] = message.useMessage();
    const size = "large";
    const router = useRouter();
    const messageError = () => {
        messageApi.open({
            type: 'error',
            content: 'มีข้อมูลนี้แล้ว',
        });
    }
    const messageSuccess = () => {
        messageApi.open({
            type: 'success',
            content: 'แก้ไขข้อมูลเรียบร้อย',
        });

        router.push({
            pathname: "/admin/generalMag",
            query: { reload: 1 }
        })
    }
    const sendEditData = (value) => {
        console.log(value);
        const axios = require('axios');
        let data = JSON.stringify({
            "company_name": value.company_name
        });
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: process.env.NEXT_PUBLIC_API_URL + "company/updateCompany/" +item.data.id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log(response);
                if (response.data === "error") {
                    { messageError() }
                }
                if (response.data === "success") {
                    { messageSuccess() }

                }
            }
            )
            .catch((error) => console.log(error));

    }
    return (
        <>{contextHolder}
            <div className='w-full'>
                <Form name='editCompany' onFinish={sendEditData} key={item.data.id}>
                    <Row>
                        <div className='w-full mt-1 px-1'>

                            <label>ชื่อสถานประกอบการณ์  </label>
                            <Form.Item name="company_name" initialValue={item.data.company_name} noStyle>
                                <Input value={item.data.company_name} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            </Form.Item>
                            {/* <span>description</span> */}

                        </div>
                    </Row>
                    <div className='w-full mt-2'>
                        <Button className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" htmlType='submit' block size={size}>
                            บันทึกข้อมูล
                        </Button>
                    </div>

                </Form>
            </div>
        </>
    )
}
