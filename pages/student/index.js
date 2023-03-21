import { Table, Select, Button, Input, Modal, Badge } from 'antd';
import React from 'react'
import StudentNavbar from '../components/StudentNavbar'
import { EyeOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import FormEditDiary from '../components/FormEditDiary';
import FormInfoDiaryStudent from '../components/FormInfoDairyStudent';
import { useRouter } from 'next/router';
import { Alert, Calendar } from 'antd';
import dayjs from 'dayjs';
const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'success',
                    content: 'ลงบันทึกประจำวันแล้ว',
                },
            ];
            break;


        default:
    }
    return listData || [];
};

export default function studentIndex() {


    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    var today = new Date();
    const [value, setValue] = useState(() => dayjs(today));
    const [selectedValue, setSelectedValue] = useState(() => dayjs(""));
    const showModal = () => {
        setOpen(true);
    };

    const columns = [
        {
            title: 'Day',
            dataIndex: 'day',
            key: 'day',

            render: (text) => <a>{text}</a>,
        },
        {
            title: 'timeIN',
            dataIndex: 'timeIN',
            key: 'timeIN',

        },
        {
            title: 'timeOUT',
            dataIndex: 'timeOUT',
            key: 'timeOUT',


        },
        {
            title: 'ดูข้อมูล',
            key: 'actionInfo',
            width: "10%",

            render: (_, record) => (
                <Button icon={<EyeOutlined />} onClick={showModal} className={' bg-sky-500'} type="primary">
                    Info
                </Button>
            ),
        },
        {
            title: 'แก้ไข',
            key: 'actionEdit',
            width: "10%",
            render: (_, record) => (

                <Button icon={<SettingOutlined />} onClick={showModalEdit} className={' bg-yellow-300'} >
                    Edit
                </Button>

            ),
        },

    ];
    const onSelect = (newValue) => {
        setSelectedValue(newValue)
        console.log(newValue);


    };
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
    const addDairy = () => {
        router.push({
            pathname: "/student/addDairy"
        })
    }
    const onClick = () => {
        router.push({
            pathname: "/student/editDairy"
        })
    };



    return (
        <>
            <StudentNavbar />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h3 className=" text-xl font-bold  tracking-tight text-gray-900 inline"> อัฐพล พลฤทธิ์</h3>
                    <p className=' text-blue-700 inline'> บริษัท วันม็อบบี้ จำกัด</p>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className=' float-right'>
                        <button type="button" onClick={addDairy} className=" mr-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            ลงบันทึกประจำวัน
                        </button>
                    </div>
                    <Alert message={`วันนี้วันที่ : ${selectedValue?.format('YYYY-MM-DD')}`} className="mx-2" />
                    <Calendar dateCellRender={dateCellRender} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
                </div>
            </main>

        </>
    )
}
