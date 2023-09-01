import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Divider } from '@mui/material';


const Billing = () => {



    const pdfRef = useRef();

    const handlePdf = useReactToPrint({
        content: () => pdfRef.current,
        documentTitle: "hotel-data",
    });

    return (
        <div>
            <div>
                <div className="mx-auto">
                    <div id="pageToDownload" className="mx-auto max-w-5xl" ref={pdfRef}>
                        <div className="flex justify-start">
                            <div className="text-4xl font-bold text-blue-500">
                                Your Company
                            </div>

                        </div>
                        <div>
                            <div className="">
                                123 your street
                            </div>
                            <div className="">
                                Your City
                            </div>
                            <div className="">
                                0123456
                            </div>
                        </div>

                        <div className="text-6xl font-bold text-blue-800 mt-10">
                            Invoice
                        </div>
                        <div className="text-2xl font-bold text-pink-600">
                            Submitted on 01/01/2020
                        </div>

                        <div className="mt-10 grid grid-cols-6">

                            <div className="  text-black col-span-2">
                                <h1 className="text-2xl font-bold">Invoice for</h1>
                                <div className="text-xl">
                                    Name
                                </div>
                                <div className="text-xl">
                                    Company Name
                                </div>
                                <div className="text-xl">
                                    Street Address
                                </div>
                                <div className="text-xl">
                                    City Region
                                </div>
                            </div>
                            <div className="col-span-2 flex justify-between">

                                <div className="text-2xl font-bold text-black ">
                                    Payable to
                                </div>
                                <div className="text-2xl font-bold text-black">
                                    Invoice for
                                </div>
                            </div>
                        </div>
                        <div className="my-4">

                            <Divider />
                        </div>
                        <div className="grid grid-cols-6">
                            <div className="text-2xl font-bold text-blue-800 col-span-3">
                                Description
                            </div>
                            <div className="text-2xl text-center font-bold text-blue-800 col-span-1">
                                Qty
                            </div>
                            <div className="text-2xl font-bold text-blue-800 col-span-1">
                                Unit Price
                            </div>
                            <div className="text-2xl font-bold text-blue-800 col-span-1">
                                Total Price
                            </div>

                        </div>
                        <div className="grid grid-cols-6" >
                            <div className="text-xl font-bold text-black col-span-3">
                                item#1
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                1
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                200
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                200
                            </div>
                        </div>
                        <div className="grid grid-cols-6" >
                            <div className="text-xl font-bold text-black col-span-3">
                                item#2
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                1
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                200
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                200
                            </div>
                        </div>
                        <div>
                            <div className="my-4">

                                <Divider />
                            </div>

                        </div>
                        <div className="grid grid-cols-6" >
                            <div className="text-xl font-bold text-black col-span-3">
                                Notes
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">

                            </div>
                            <div className="text-xl text-center font-bold text-blue-700  col-span-1">
                                Subtotal
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                400
                            </div>
                        </div>
                        <div className="grid grid-cols-6" >
                            <div className="text-xl font-bold text-black col-span-3">

                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">

                            </div>
                            <div className="text-xl text-center font-bold text-blue-700  col-span-1">
                                Adjustments
                            </div>
                            <div className="text-xl text-center font-bold text-black  col-span-1">
                                -100
                            </div>
                        </div>
                        <div className="flex justify-end mx-14">
                            <div className="text-4xl text-pink-600"> 500.00</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePdf}
                        className="bg-red-600 text-white px-4 py-2 "
                    >
                        Download /Print
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Billing