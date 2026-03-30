import React from 'react';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { FormEdit } from './Form';

export const EditModal = ({ setData }) => {
    const [openResponsive, setOpenResponsive] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setOpenResponsive(true)}>
                Редактировать профиль
            </Button>
            <Modal
                title="Редактирование профиля"
                centered
                footer={null}
                open={openResponsive}
                onOk={() => setOpenResponsive(false)}
                onCancel={() => setOpenResponsive(false)}
                width={{
                    xs: '90%',
                    sm: '80%',
                    md: '70%',
                    lg: '60%',
                    xl: '50%',
                    xxl: '40%',
                }}
            >
                <FormEdit setData={setData} />
            </Modal>
        </>

    )
}