import React, { useEffect, useState } from 'react'
import { Space, Table, Tag, Button, Modal, Form, Input, Select, message } from 'antd';
import { useRouter } from 'next/router';
import axiosInstance from '../../utils/axios'
export default function FormAddStudent() {
    const size = "large"
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const [branchData, setBranchData] = useState([]);

    useEffect(() => {
        axiosInstance.get('branch/allBranch')
            .then(function (response) {
                //  console.log(response)
                setBranchData(response.data)
                console.log(response.data)
            })
    }, [])

 
    const messageUp = () => {

        messageApi.open({
            type: 'success',
            content: 'เพิ่มข้อมูลใช้งานเรียบร้อย',
        });
        setTimeout(() => {
            router.push({
                pathname: "/admin/studentMag",
                query: { reload: 1 }
            })
        }, 500)

    }
    const sendData = (data) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "address_no": data.address_no,
            "age": data.age,
            "branch_id": data.branch_id,
            "dateofbirth": data.dateofbirth,
            "district": data.district,
            "email": data.email,
            "emergency_person_fname": data.emergency_person_fname,
            "emergency_person_lname": data.emergency_person_lname,
            "emergency_tel": data.emergency_tel,
            "expiry_date": data.expiry_date,
            "facebook": data.facebook,
            "fname_EN": data.fname_EN,
            "fname_TH": data.fname_TH,
            "id_card": data.id_card,
            "issue_at": data.issue_at,
            "issue_date": data.issue_date,
            "lname_EN": data.lname_EN,
            "lname_TH": data.lname_TH,
            "moo": data.moo,
            "nationality": data.nationality,
            "p_height": data.p_height,
            "p_weight": data.p_weight,
            "pwd": data.pwd,
            "postal_code": data.postal_code,
            "province": data.province,
            "race": data.race,
            "religion": data.religion,
            "road": data.road,
            "sex": data.sex,
            "student_group": data.student_group,
            "student_id": data.student_id,
            "sub_district": data.sub_district,
            "tel": data.tel,
            "username": data.username
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(process.env.NEXT_PUBLIC_API_URL + "student/register", requestOptions)
            .then(response => response.text())
            .then(result => { messageUp() }
            )
            .catch(error => console.log('error', error));

    }
    return (
        <>
            {contextHolder}
            <Form
                layout="inline"
                name='AddStudent'
                onFinish={sendData}
            >
                <div className='w-full mt-2'>
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"> Username
                        <Form.Item
                            name={"username"}
                            rules={[{ required: true, message: "กรุณากรอก Username" }]}
                        >
                            <Input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className='w-full mt-2 '>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password
                        <Form.Item

                            name={"pwd"}
                            rules={[{ required: true, message: "กรุณากรอก Password" }]}
                        >
                            <Input type='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>

                <div className=' w-1/2  mt-2 '>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อภาษาไทย
                        <Form.Item

                            name={"fname_TH"}
                            rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
                        >
                            <Input className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุลภาษาไทย
                        <Form.Item

                            name={"lname_TH"}
                            rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
                        >
                            <Input className=' justify-self-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className=' w-1/2  mt-2 '>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อภาษาอังกฤษ
                        <Form.Item

                            name={"fname_EN"}
                            rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
                        >
                            <Input className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุลภาษาอังกฤษ
                        <Form.Item

                            name={"lname_EN"}
                            rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสนักศึกษา
                        <Form.Item
                            name={"student_id"}
                            rules={[{ required: true, message: "กรุณากรอกรหัสนักศึกษา" }, { pattern: "[0-9]", message: "กรอกข้อมูลให้ถูกต้อง", min: 10 }]}
                        >
                            <Input minLength={10} maxLength={10} className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมู่เรียน
                        <Form.Item
                            name={"student_group"}
                            rules={[{ required: true, message: "กรุณากรอกหมู่เรียน" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สาขาวิชา
                        <Form.Item
                            name={"branch_id"}
                            rules={[{ required: true, message: "กรุณาเลือกสาขาวิชา" }]}
                        >
                            <Select size={size} defaultValue={"เลือกสาขาวิชา"}>
                                {branchData.map((data) => (
                                    <Select.Option value={data.id}>{data.branch_name}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรศัพท์
                        <Form.Item
                            name={"tel"}
                            rules={[{ required: true, message: "กรุณากรอกเบอร์โทรศัพท์" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อีเมล์
                        <Form.Item
                            name={"email"}
                            rules={[{ required: true, message: "กรุณากรอก E-mail" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-full mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook
                        <Form.Item
                            name={"facebook"}
                            rules={[{ required: true, message: "กรุณากรอกชื่อ facebook" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>

                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อบุคคลติดต่อกรณีฉุกเฉิน
                        <Form.Item
                            name={"emergency_person_fname"}
                            rules={[{ required: true, message: "กรุณากรอก ชื่อบุคคลติดต่อกรณีฉุกเฉิน" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุลบุคคลติดต่อกรณีฉุกเฉิน
                        <Form.Item
                            name={"emergency_person_lname"}
                            rules={[{ required: true, message: "กรุณากรอก นามสกุลบุคคลติดต่อกรณีฉุกเฉิน" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรบุคคลติดต่อกรณีฉุกเฉิน
                        <Form.Item
                            name={"emergency_tel"}
                            rules={[{ required: true, message: "กรุณากรอกเบอร์โทรบุคคลติดต่อกรณีฉุกเฉิน" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-full mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสบัตรประชาชน
                        <Form.Item
                            name={"id_card"}
                            rules={[{ required: true, message: "กรุณากรอกรหัสบัตรประชาชน" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/2 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ออกให้ ณ
                        <Form.Item
                            name={"issue_at"}
                            rules={[{ required: true, message: "กรุณากรอก สถานที่ออกบัตร" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันออกบัตร
                        <Form.Item
                            name={"issue_date"}
                            rules={[{ required: true, message: "กรุณากรอก วันออกบัตร" }]}
                        >
                            <Input type='date' className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วันหมดอายุ
                        <Form.Item
                            name={"expiry_date"}
                            rules={[{ required: true, message: "กรุณากรอก วันหมดอายุ" }]}
                        >
                            <Input type='date' className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เชื้อชาติ
                        <Form.Item
                            name={"race"}
                            rules={[{ required: true, message: "กรุณากรอก เชื้อชาติ" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สัญชาติ
                        <Form.Item
                            name={"nationality"}
                            rules={[{ required: true, message: "กรุณากรอก สัญชาติ" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ศาสนา
                        <Form.Item
                            name={"religion"}
                            rules={[{ required: true, message: "กรุณากรอก ศาสนา" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>

                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">วัน-เดือน-ปีเกิด
                        <Form.Item
                            name={"dateofbirth"}

                            rules={[{ required: true, message: "กรุณาเลือก วัน-เดือน-ปีเกิด" }]}
                        >
                            <Input type='date' className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อายุ
                        <Form.Item
                            name={"age"}
                            rules={[{ required: true, message: "กรุณากรอก อายุ" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เพศ
                        <Form.Item
                            name={"sex"}
                            rules={[{ required: true, message: "กรุณาเลือกสาขาวิชา" }]}
                        >
                            <Select size={size} >
                                <Select.Option value="male">ชาย</Select.Option>
                                <Select.Option value="female">หญิง</Select.Option>

                            </Select>
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ส่วนสูง
                        <Form.Item
                            name={"p_height"}
                            rules={[{ required: true, message: "กรุณากรอก ส่วนสูง" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/4 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">น้ำหนัก
                        <Form.Item
                            name={"p_weight"}
                            rules={[{ required: true, message: "กรุณากรอก น้ำหนัก" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className='w-full mt-5'> <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่ตามบัตรประชาชน </label></div>
                <div className="w-1/12 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขที่
                        <Form.Item
                            name={"address_no"}
                            rules={[{ required: true, message: "กรุณากรอก เลขที่" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/12 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมู่ที่
                        <Form.Item
                            name={"moo"}
                            rules={[{ required: true, message: "กรุณากรอก หมู่ที่" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/6 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ถนน
                        <Form.Item
                            name={"road"}
                            rules={[{ required: true, message: "กรุณากรอก ถนน" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/6 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ตำบล/แขวง
                        <Form.Item
                            name={"sub_district"}
                            rules={[{ required: true, message: "กรุณากรอก ตำบล/แขวง" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/6 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อำเภอ/เขต
                        <Form.Item
                            name={"district"}
                            rules={[{ required: true, message: "กรุณากรอก อำเภอ/เขต" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/6 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">จังหวัด
                        <Form.Item
                            name={"province"}
                            rules={[{ required: true, message: "กรุณากรอก อำเภอ/เขต" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-1/6 mt-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสไปรษณีย์
                        <Form.Item
                            name={"postal_code"}
                            rules={[{ required: true, message: "กรุณากรอก รหัสไปรษณีย์" }]}
                        >
                            <Input className='  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className="w-full mt-5 ">
                    <Form.Item  >
                        <Button className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" htmlType="submit" block size={size}>
                            บันทึกข้อมูล
                        </Button>
                    </Form.Item>
                </div>

            </Form>
        </>
    )
}
