import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { DatePicker, Space } from 'antd';




export default function Form1() {
    const iconSize = "large"
    const [value, setValue] = useState();
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>

            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div class="grid gap-6 mb-1 md:grid-cols-2" >
                    <div className='w-full'>
                        <label for="firstName-input">ชื่อ</label>
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อ!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full'>
                        <label for="lastName-input" >นามสกุล</label>
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่นามสกุล!',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                </div>
                <div class="grid gap-6 mb-1 md:grid-cols-2 ';
                 "  >
                    <div className='w-full'>
                        <label>เลือกวันที่</label>
                        <Form.Item 
                        name="date" 
                            rules={[{ required: true, message: 'กรุณาใส่วันที่' }]}
                        >
                            <space 
                            direction="vertical"
                            >
                                <DatePicker 
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 />
                            </space>
                        </Form.Item>
                    </div>
                    <div className='w-full'>
                        <label>สาขา</label>
                        <Form.Item
                            name="sub_id"
                            rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                        >
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>เลือกสาขา</option>
                                <option value="1">ชื่อสาขา</option>
                                <option value="2">ชื่อสาขา</option>
                                <option value="3">ชื่อสาขา</option>
                            </select>
                        </Form.Item>
                    </div>
                </div>
                <div class="grid gap-6 mb-1 md:grid-cols-2 "  >
                    
                    <div className='w-full'>
                        <label>ที่อยู่</label>
                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'กรุณาใส่ที่อยู่' }]}
                        >
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ข้อมูลที่อยู่....."></textarea>
                        </Form.Item>
                        
                    </div>
                    <div className='w-full'>
                        <label>เพศ</label>
                        <Form.Item>
                            <Radio.Group>
                                <Radio value="1"> ชาย </Radio>
                                <Radio value="2"> หญิง </Radio>
                            </Radio.Group>
                        </Form.Item>

                    </div>
                </div>
                <div class="grid gap-6 mb-1 md:grid-cols-2 " >
                <div className='w-full'>
                        <label>เลือกตัวเลข</label>
                        <Form.Item name="number" valuePropName="checked" >
                            <Checkbox>1</Checkbox> <br />
                            <Checkbox>2</Checkbox> <br />
                            <Checkbox>3</Checkbox> <br />
                            <Checkbox>4</Checkbox> <br />
                        </Form.Item>

                    </div>
                </div>
            </Form>

        </>

    )
}