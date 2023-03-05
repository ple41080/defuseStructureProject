import { useState } from 'react';
import Navbar from './Components/Navbar';
import { Space, Table, Tag, Button, Modal } from 'antd';
import { UsergroupAddOutlined, EyeOutlined } from '@ant-design/icons';

export default function userMag() {
    const iconSize = "large"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'branch',
            dataIndex: 'branch',
            key: 'branch',
        },

        {
            title: 'ดูข้อมูล',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button icon={<EyeOutlined />} className={' bg-sky-500'} onClick={showModal} type="primary">
                        Info
                    </Button>

                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 22,
            branch: 'Computer Science',

        },

    ];
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setOpen(false);
        // }, 3000);
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };


    const showModal2 = () => {
        setOpenAdd(true);
    };
    const handleOkAdd = () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setOpen(false);
        // }, 3000);
        setOpenAdd(false);
    };
    const handleCancelAdd = () => {
        setOpenAdd(false);
    };
    return (
        <>
            <Navbar />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">User Management</h1>

                </div>

            </header>
            <main>



                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className=' float-right'>
                        <button type="button" onClick={showModal2} class=" mr-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            เพิ่มผู้ใช้งาน
                        </button>
                    </div>

                    <Table columns={columns} dataSource={data} />
                </div>
            </main>
            <Modal
                width={"90%"}
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[

                    <button onClick={handleCancel} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Cancel
                    </button>,
                    <button onClick={handleOk} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Submit
                    </button>

                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal
                width={"90%"}
                open={openAdd}
                title="Title"
                onOk={handleOkAdd}
                onCancel={handleCancelAdd}
                footer={[

                    <button onClick={handleCancelAdd} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Cancel
                    </button>,
                    <button onClick={handleOkAdd} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Submit
                    </button>

                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
               
            </Modal>

        </>

    )
}
