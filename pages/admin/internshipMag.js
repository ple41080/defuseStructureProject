import { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Space, Table, Tag, Button, Modal, Form, Input, Select } from 'antd';
import { EyeOutlined, SettingOutlined } from '@ant-design/icons';
import FormAddUser from '../Components/FormAddStudent';
import FormEditUser from '../Components/FormEditStudent';
const size = "large"
export default function internshipMag() {
  const iconSize = "large"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'ชื่อรายการออกฝึก',
      dataIndex: 'internshipName',
      key: 'internshipName',
    },
    {
      title: 'ปีการศึกษา',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'วันที่เริ่ม',
      dataIndex: 'start_date',
      key: 'start_date',
    },
    {
      title: 'วันที่เริ่ม',
      dataIndex: 'end_date',
      key: 'end_date',
    },
    {
      title: 'Edit',
      key: 'actionEdit',
      width: "10%",
      render: (_, record) => (

        <Button icon={<SettingOutlined />} className={' bg-yellow-300'} onClick={showModalEdit} type="primary">
          Edit
        </Button>

      ),
    },

  ];
  const data = [  //Make data
    {
      no: '1',
      internshipName: 'นิเทศนักศึกษาปีการศึกษา 2565',
      year: "2565/2",
      start_date: '12/2/2565',
      end_date: '12/2/2565'
    },

  ];


  const showModalAdd = () => {
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

  const showModalEdit = () => {
    setOpenEdit(true);
  };
  const handleOkEdit = () => {
    // setLoading(true);
    // setTimeout(() => {
    //     setLoading(false);
    //     setOpen(false);
    // }, 3000);
    setOpenEdit(false);
  };
  const handleCancelEdit = () => {
    setOpenEdit(false);
  };

  const companyOptions = [
    { value: '1', label: 'Advice' }
  ]

  const internOptions = [
    { value: '1', label: 'นิเทศก์ฝึกประสบการณ์ครั้งที่1' }
  ]

  const studentOptions = [

    { value: '1', label: 'อัฐพล พลฤทธิ์' },
    { value: '2', label: 'สมศักดิ์ สมหมาย' },
    { value: '3', label: 'ชานนท์ แก้วพรหรม' },
    { value: '4', label: 'ชัชชัย ศรีสวัสดิ์' },
  ]

  return (
    <>
      <Navbar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">internship Management</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
          <div className=' float-right'>
            <button type="button" onClick={showModalAdd} className="mr-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              จัดการรายการออกฝึก
            </button>
          </div>
          <Table columns={columns} dataSource={data} style={{ overflow: "auto" }} />
        </div>
      </main>



      {/* //Add content */}
      <Modal
        width={"90%"}
        open={openAdd}
        title="เพิ่มรายการออกฝึก"
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
        footer={[
        ]}
      >
        <Form>
          <div className='w-full mt-2'>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">ชื่อรายการออกฝึก</lable>
            <Form.Item
              name={"intern_id"}

            >
              <Select options={internOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่อนักศึกษา</lable>
            <Form.Item
              name={"student_id"}

            >
              <Select options={studentOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่ออาจารย์ประจำสาขา</lable>
            <Form.Item
              name={"user_id1"}

            >
              <Select options={studentOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่ออาจารย์นิเทศก์</lable>
            <Form.Item
              name={"user_id2"}

            >
              <Select options={studentOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่อพี่เลี้ยง</lable>
            <Form.Item
              name={"user_id3"}

            >
              <Select options={studentOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full'>
            <Button className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" htmlType="submit" block size={size}>
              บันทึกข้อมูล
            </Button>
          </div>
        </Form>

      </Modal>

      {/* Edit contents */}
      <Modal
        width={"90%"}
        open={openEdit}
        title="Title"
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={[

        ]}
      >
        <Form>
          <div className='w-full mt-2'>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">ชื่อรายการออกฝึก</lable>
            <Form.Item
              name={"intern_id"}

            >
              <Select options={internOptions} size={size} disabled>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่อนักศึกษา</lable>
            <Form.Item
              name={"student_id"}

            >
              <Select options={studentOptions} size={size} disabled>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่ออาจารย์ประจำสาขา</lable>
            <Form.Item
              name={"user_id1"}

            >
              <Select options={studentOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่ออาจารย์นิเทศก์</lable>
            <Form.Item
              name={"user_id2"}

            >
              <Select options={studentOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full '>
            <lable className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายชื่อพี่เลี้ยง</lable>
            <Form.Item
              name={"user_id3"}

            >
              <Select options={studentOptions} size={size}>

              </Select>
            </Form.Item>
          </div>
          <div className='w-full'>
            <Button className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" htmlType="submit" block size={size}>
              บันทึกข้อมูล
            </Button>
          </div>
        </Form>
      </Modal>

    </>

  )
}
