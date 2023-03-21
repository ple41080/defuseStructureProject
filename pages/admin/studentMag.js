import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Space, Table, Tag, Button, Modal, Form, Input, Select, message } from 'antd';
import { EyeOutlined, SettingOutlined } from '@ant-design/icons';
import FormAddStudent from '../components/formAddStudent';
import FormEditStudent from '../components/FormEditStudent';
import axiosInstance from '../../utils/axios'
import { useRouter } from 'next/router';
const size = "large"




export default function studentMag(props) {
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const iconSize = "large"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [data, setData] = useState([]);
    const [dataAddress, setDataAddress] = useState([]);
    const [dataBranch, setDataBranch] = useState([]);
    const [dataEdit, setDataEdit] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [dummyState, rerender] = React.useState(1);


    useEffect(() => {
        axiosInstance.get('student/allStudent')
            .then(function (response) {
                console.log(response)
                setData(response.data)

            })
    }, [dummyState])

    useEffect(() => {
        rerender(dummyState + 1);
        setOpenEdit(false);
        setOpen(false);
    }, [router])


    const columns = [

        {
            title: 'ชื่อ-นามสกุล',
            key: 'name',
            sorter: true,
            render: (_, record) => {
                return <text>{record.fname_TH + " " + record.lname_TH}</text>
            },
            filteredValue: [searchText],
            onFilter: (value, record) => {
                return (

                    String(record.fname_TH)
                        .toLowerCase()
                        .includes(value.toLowerCase()) ||
                    String(record.lname_TH)
                        .toLowerCase()
                        .includes(value.toLowerCase())

                );

            },
        },
        {
            title: 'หมู่เรียน',
            dataIndex: 'student_group',
            sorter: true,
            key: 'age',
        },
        {
            title: 'สาขาวิชา',
            key: 'branch',
            sorter: true,
            render: (_, record) => {

                if (record === null) {
                    return <text>ผู้ดูแลระบบ</text>
                } else {
                  return  <text>{record.branchJoin.branch_name}</text>
                }


            },
        },

        {
            title: 'แก้ไข',
            key: 'actionEdit',
            width: "10%",
            render: (_, record) => (

                <Button icon={<SettingOutlined />} className={' bg-yellow-300'} onClick={(e) => showModalEdit(record.id)} type="primary">
                    Edit
                </Button>

            ),
        },
        {
            title: 'ลบ',
            key: 'actionDelete',
            width: "10%",
            render: (_, record) => (

                <Button icon={<EyeOutlined />} onClick={(e) => { if (window.confirm("ยืนยันการลบข้อมูล")) { sendDelete(record.id) } }} className={'bg-red-600'} type="primary">
                    Delete
                </Button>

            ),
        },
    ];

    const sendDelete = (id) => {
        axiosInstance.delete('student/deleteStudent/' + id)
            .then(function (response) {
                messageApi.open({
                    type: 'success',
                    content: 'ลบข้อมูลใช้งานเรียบร้อย',
                });
            })
        rerender(dummyState + 1);
    }
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

    const showModalEdit = (id) => {
        console.log(id)
        axiosInstance.get('student/oneStudent/' + id)
            .then(function (response) {
                console.log(response)
                setDataEdit(response.data)
                setDataAddress(response.data.address)
                setDataBranch(response.data.branchJoin)
            })
        rerender(dummyState + 1);
        setOpenEdit(true);
    };
    const handleOkEdit = () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setOpen(false);
        // }, 3000);
        rerender(dummyState + 1);
        setOpenEdit(false);
    };
    const handleCancelEdit = () => {
        rerender(dummyState + 1);
        setOpenEdit(false);
    };

    return (
        <>
            {contextHolder}
            <Navbar />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Student Management</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className=' mr-5 float-right'>
                        <button type="button" onClick={showModal2} className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            เพิ่มข้อมูลนักศึกษา
                        </button>
                    </div>
                    <div className='w-full px-2 my-3'>
                        <Input
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder="ค้นหารายชื่อนักศึกษา"
                            size={size}
                            onSearch={(value) => {
                                setsearchText(value);
                            }}
                            onChange={(e) => {
                                setsearchText(e.target.value);
                            }}
                        />
                    </div>




                    <Table columns={columns} dataSource={data} style={{ overflow: "auto" }} />
                </div>
            </main>
            {/* //Info content */}
            <Modal
                key={"Info"}
                width={"90%"}
                open={open}
                title="รายละเอียด"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[

                    <button onClick={handleCancel} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Cancel
                    </button>,
                    <button onClick={handleOk} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
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

            {/* //Add content */}
            <Modal
                key={"add"}
                width={"90%"}
                open={openAdd}
                title="เพิ่มข้อมูลนักศึกษา"
                onOk={handleOkAdd}
                onCancel={handleCancelAdd}
                footer={[
                ]}
            >
                <div>
                    <FormAddStudent />
                </div>

            </Modal>

            {/* Edit contents */}
            <Modal
                key={"edit"}
                width={"90%"}
                open={openEdit}
                title="แก้ไขข้อมูลนักศึกษา"
                onOk={handleOkEdit}
                onCancel={handleCancelEdit}
                footer={[

                ]}
            >
                <FormEditStudent data={dataEdit} dataAddress={dataAddress} dataBranch={dataBranch} />
            </Modal>

        </>

    )
}
