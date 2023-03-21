import { Form, Input, message, Upload, Modal } from 'antd'
import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
];

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


export default function FormEditDiary() {
    const [value, setValue] = useState('');
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );

    const onFinish = (data) => {
        console.log(data);
    }
    return (
        <>
            <Form
                layout="inline"
                name='AddDiary'
                onFinish={onFinish}>

                <div className='w-full mt-2'>
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white">รายการปฏิบัติงานประจำวันที่
                        <Form.Item

                            name={"diary_date"}
                            rules={[{ required: true, message: "เลือกวันที่" }]}>

                            <Input type='date' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>

                <div className='w-full mt-2'>
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"> เวลาเข้างาน
                        <Form.Item
                            name={"in_time"}
                            rules={[{ required: true, message: "กรอกเวลาเข้างาน" }]}>

                            <Input type='time' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className=' w-full mt-2'>
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"> เวลาออกงาน
                        <Form.Item
                            name={"out_time"}
                            rules={[{ required: true, message: "กรอกเวลาออกงาน" }]}>

                            <Input type='time' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                        </Form.Item>
                    </label>
                </div>
                <div className='w-full'>
                    <label className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"> รายละเอียด </label>
                    <Form.Item name={'dairy_detail'}>
                        <QuillNoSSRWrapper
                            modules={modules}
                            formats={formats}
                            theme="snow"
                            onChange={(content) => {
                                // var htmlToRtf = require('html-to-rtf');
                                console.log('CONTETN: ', content);
                            }}
                        />
                    </Form.Item>

                </div>


                <div className='w-full mt-2'>
                    <button htmlType='submit' className='w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
                        บันทึกข้อมูล
                    </button>
                </div>

            </Form>
        </>
    )
}
