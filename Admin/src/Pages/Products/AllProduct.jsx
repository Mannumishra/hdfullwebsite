import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProduct = () => {
    const [data, setData] = useState([])

    const getApiData = async () => {
        try {
            const res = await axios.get("http://localhost:7000/v1/get-card-details")
            console.log(res)
            if (res.status === 200) {
                const newdata = res.data.data
                setData(newdata.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApiData()
    }, [data.length])

    const deleteCardDetails = async (id) => {
        try {
            const res = await axios.delete("http://localhost:7000/v1/delete-card-details/" + id)
            console.log(res)
            if (res.status === 200) {
                toast.success("Card Details Delete Successfully")
                getApiData()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Card Details</h4>
                </div>
            </div>

            <div className="filteration">
                <div className="selects">
                    {/* <select>
                        <option>Ascending Order </option>
                        <option>Descending Order </option>
                    </select> */}
                </div>
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div>

            <section className="d-table ">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Card Holder Name</th>
                            <th scope="col">Credit Limit</th>
                            <th scope="col">Total Amount</th>
                            <th scope="col">Card Number</th>
                            <th scope="col">Expire Month</th>
                            <th scope="col">Expire Year</th>
                            <th scope="col">CVV</th>
                            <th scope="col">Time & Date</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) =>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.cardHolderName}</td>
                                    <td>{item.creditLimit} &#8377;</td>
                                    <td>{item.totalAmountDue} &#8377;</td>
                                    <td>{item.cardNumber}</td>
                                    <td>{item.expiryMonth}</td>
                                    <td>{item.expiryYear}</td>
                                    <td>{item.cvv}</td>
                                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                                    <td><Link className="bt delete" onClick={() => deleteCardDetails(item._id)}>Delete <i class="fa-solid fa-trash"></i></Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default AllProduct