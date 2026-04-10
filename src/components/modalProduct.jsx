import React, { useState, useEffect } from 'react'
import { Flex, Modal, Button } from 'antd';
import { FetchProducts } from './products'
export const ModalProduct = ({ isOpen, onClose, selectedProduct  }) => {
    if (!isOpen || !FetchProducts) return null;
    return (
        <Flex vertical gap="medium" align="flex-start">
            <Modal
                title={FetchProducts.title}
                centered
                open={isOpen}
                onOk={onClose}
                onCancel={onClose}
                width={{
                    xs: '90%',
                    sm: '80%',
                    md: '70%',
                    lg: '60%',
                    xl: '50%',
                    xxl: '40%',
                }}
                footer={[
                    <Button key="back" onClick={onClose}>Закрыть</Button>,
                    <Button key="back">Добавить в избранное</Button>
                ]}
            >
                <img
                    src={selectedProduct.thumbnail}
                    alt={selectedProduct.title}
                    style={{ width: '100%', height: 300, objectFit: 'cover', marginBottom: 16 }}
                />
                <h2>{selectedProduct.title}</h2>
                <p><strong>Описание:</strong> {selectedProduct.description}</p>
                <p><strong>Цена:</strong> {selectedProduct.price}$</p>
            </Modal>
        </Flex >
    )
}