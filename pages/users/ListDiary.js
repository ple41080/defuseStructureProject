import React, { useState } from 'react'
import { Space, Table, Tag, Button, Modal, Form, Input, Select } from 'antd';
import { EyeOutlined, SettingOutlined } from '@ant-design/icons';
import UserNavbar from '../Components/UserNavbar';
import FormInfoDiary from '../Components/FormInfoDairy';
export default function ListDiary() {


  const size = "large"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (value) => {
    //   console.log(value)
    setSelectedOption(value);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
    },
    {
      title: 'ดูข้อมูล',
      key: 'actionInfo',
      width: "10%",
      render: (_, record) => (

        <Button icon={<EyeOutlined />} className={' bg-sky-500'} onClick={showModal} type="primary">
          Info
        </Button>

      ),
    },

  ];
  const data = [  //Make data
    {
      no: '1',
      name: 'John Brown',
      company: "1moby Company",
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

  return (
    <>
      <UserNavbar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h3 className=" text-xl font-bold  tracking-tight text-gray-900 inline"> รายการบันทึกการปฎิบัติงานประจำวัน</h3>

        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className='w-full'>
            <Form>
              <Form.Item title={"เลือกสาขาวิชา"} >
                <Select name={"branch_id"}
                  size={size}
                  value={selectedOption}
                  onChange={handleChange}>
                  <option>เลือกสาขาวิชา</option>
                  <option value={"1"}>วิทยาการคอมพิวเตอร์</option>
                </Select>
              </Form.Item>
            </Form>
          </div>
          <Table columns={columns} dataSource={data} style={{ overflow: "auto" }} />
        </div>
      </main>

      {/* //Info content */}
      <Modal
        width={"90%"}
        open={open}
        title="Information"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[



        ]}
      >
        <FormInfoDiary />
      </Modal>



    </>
  )
}
