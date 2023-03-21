import { Card } from 'antd'
import React from 'react'
import FormAddDiary from '../components/FormAddDiary'
import StudentNavbar from '../Components/StudentNavbar'

export default function addDairy() {
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
                    <Card style={{ width: "90%" }} title={"บันทึกประจำวัน"}>
                        <FormAddDiary />

                    </Card>

                </div>
            </main>
        </>
    )
}
