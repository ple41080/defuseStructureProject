import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import { FastForwardOutlined } from '@ant-design/icons';
import { Space, Table, Tag, message, Link } from 'antd';
import { Button, Modal } from 'antd';
import Form1 from './Components/Form';
import { useRouter } from 'next/router';


export default function demo() {
    const iconSize = "large"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalInput, setIsModalInput] = useState(false);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
            width: '10%',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                 <button
                 className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                 onClick={showInput}
                 type="primary"
             >
                <FastForwardOutlined /> ดูข้อมูล
             </button>

            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    const showModal = () => {
        setIsModalOpen(true);
    };
    const onOk1 = () => {
        setIsModalOpen(false);
    };
    const onCancel1 = () => {
        setIsModalOpen(false);
    };

    // เพิ่มข้อมูล
    const showInput = () => {
        setIsModalInput(true);
    };
    const handleOk = () => {
        setIsModalInput(false);
    };
    const handleCancel = () => {
        setIsModalInput(false);
    };
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        messageApi.info('Hello, Ant Design!');
        setTimeout(()=>{
            router.push({
                pathname:'/demo',
                query:{id:"1"}
            })
        },1000)
    };

    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className=' justify-center'>
                    <div style={{ margin: '20px' }}>
                        <button
                            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={showModal}
                            type="primary"
                        >
                            เพิ่มข้อมูล
                        </button>
                        {contextHolder}

                        <button 
                        type="primary"
                         onClick={info} 
                         className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                         >
                            ไปหน้า Demo
                        </button>
 
                    </div>

                    <Table
                        columns={columns}
                        dataSource={data}
                        style={{ overflow: "auto" }}
                        pagination={{
                            pageSize: 60,
                        }}
                        scroll={{
                            y: 260,
                        }}
                    />;
                </div>

            </div>
            <Modal
                width={'80%'}
                title="Basic Modal"
                open={isModalOpen}
                onOk={onOk1}
                onCancel={onCancel1}
                footer={[
                    <button
                        type="primary"
                        onClick={onCancel1}
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                        Cancel
                    </button>
                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

            <Modal
                width={'80%'}
                title="เพิ่มข้อมูล"
                open={isModalInput}
                onCancel={handleCancel}
                footer={[
                    <button
                        type="primary"
                        onClick={handleCancel}
                        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Input
                    </button>
                ]}
            >
                <Form1 />
            </Modal>

        </div>

    )
}