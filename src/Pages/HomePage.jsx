import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct, company]);
        }
    };

    const filteredProduct = selectedProduct.length === 0
        ? mobileData
        : mobileData.filter((mobile) => selectedProduct.includes(mobile.company));

    return (
        <>
            <div className="pro-selected">
                {mobileData.map((phone) => (
                    <div className="pro-input" key={phone.company}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedProduct.includes(phone.company)}
                                onChange={() => companyHandler(phone.company)}
                            />
                            {phone.company}
                        </label>
                    </div>
                ))}
            </div>

            <div className="pageSection">
                {filteredProduct.map((item) => (
                    <div key={item.id}>
                        <Link to={`/mobiles/${item.id}`}>
                            <div className="pageImg">
                                <img src={item.image} alt={item.model} />
                            </div>
                        </Link>
                        <div className="proModel">
                            {item.company}, {item.model}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HomePage;
