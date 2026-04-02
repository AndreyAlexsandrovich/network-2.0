import React, { useState } from 'react';
import { dataExpandedProducts } from '../../products';
import { Card } from 'antd';
import { ModalProduct } from '../../modalProduct';
const { Meta } = Card;

const list = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: 0,
    alignItems: 'stretch',
    listStyle: 'none',
    justifyContent: 'space-between'
}

const product = {
    listStyle: 'none',
    flex: '1 1 240px',
    maxWidth: '240px',
    display: 'flex',
    flexDirection: 'column'
}


export const Products = ({ dataProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    if (!dataProducts || dataProducts.length === 0) {
        return (
            <h1 style={{ textAlign: 'center', color: 'red', textDecoration: 'underline' }}>Ошибка. Товары не найдены</h1>
        )
    }
    return (
        <ul style={list}>
            {dataProducts.map((data) => (
                <li style={product} key={data.id}>
                    <Card
                        onClick={() => setSelectedProduct(data)}
                        hoverable
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        cover={
                            <img
                                style={{ maxWidth: '100%' }}
                                draggable={false}
                                alt="example"
                                src={data.src}
                            />
                        }
                    >
                        <Meta title={data.name ? data.name : <h1 style={{ fontSize: 16, fontWeight: 500 }}>У товара нету названия</h1>} description={data.price} />
                    </Card>
                </li>
            ))}
            <ModalProduct isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                selectedProduct={selectedProduct}
            />
        </ul>
    )
}