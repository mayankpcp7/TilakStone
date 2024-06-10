import { useState, useEffect } from "react";
import { LocationIcon, MessageIcon, PhoneIcon } from './common/Icons';
import contactVector from '../assets/images/webp/contact/contectVector.webp';
import temple from '../assets/images/webp/contact/temple.webp';
import Heading from "./common/Heading";
import { YelloCommonButton } from "./common/Button";
const ContactInformation = () => {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        company: "",
        city: "",
        details: "",
        email: "",
        message: "",
        box: false,
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        company: "",
        city: "",
        details: "",
        email: "",
        message: "",
        box: "",
    });
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            company: /^[a-zA-Z\s]+$/,
            city: /^[a-zA-Z\s]+$/,
            details: /^\S+/,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: /^\S+/,
        };
        const errors = {};
        if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!regex.lastname.test(formData.lastname)) {
            errors.lastname = "lastName is invalid.";
        }
        if (!regex.company.test(formData.company)) {
            errors.company = "company Name is invalid.";
        }
        if (!regex.city.test(formData.city)) {
            errors.city = "city is invalid.";
        }
        if (!regex.details.test(formData.details)) {
            errors.details = "details is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "email is invalid.";
        }
        if (!regex.message.test(formData.message)) {
            errors.message = "message is invalid.";
        }
        if (!formData.box) {
            errors.box = "You must agree to the terms of services and privacy policy.";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            company: "",
            city: "",
            details: "",
            email: "",
            message: "",
            box: false,
        });
        setFormErrors({
            name: "",
            lastname: "",
            company: "",
            city: "",
            details: "",
            email: "",
            message: "",
            box: "",
        });
    };
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".success-popup")) {
                handlePopupClose();
            }
        };
        if (showSuccessPopup) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showSuccessPopup]);

    return (
        <div className={`pt-[140px] relative ${showSuccessPopup ? 'bg-blur' : ''}`}>
            <img src={contactVector} alt="contactVector" className="pointer-events-none absolute right-[-2%] lg:right-0 max-w-[164px] h-[222px] lg:max-w-[235px] lg:h-[318px] top-[7%] lg:top-[15%] md:block hidden" />
            <img src={temple} alt="temple" className="pointer-events-none absolute left-[-47%] lg:left-[-28%] max-w-[846] h-[877px] top-[10%] lg:top-0 z-[0] md:block hidden" />
            <div className='container xl:max-w-[1164px] px-3 mx-auto relative z-[1]'>
                {/* <Heading commonHeading="Contact Information" /> */}
                <Heading className='!leading-md mb-[25px] sm:mb-[40px] md:mb-16' commonHeading="Contact Information" />
                <div className='bg-white rounded-2xl shadow-[0px_0px_10px_0px_#0000001A]'>
                    <div className='lg:p-[32px_32px_34px_32px] sm:p-[50px_44px_50px_44px] p-[20px_12px_20px_12px] flex flex-row flex-wrap justify-between items-cen ter'>
                        <div className='lg:w-[42.2%] w-full '>
                            <div className='rounded-xl bg-lightBrown sm:p-[32px_44px_32px_30px] p-[15px] '>
                                <h3 className='font-medium font-plusJkarta text-black text-base sm:text-3xl leading-2md mb-3'>Contact Information</h3>
                                <p className='text-black font-plusJkarta opacity-[80%] font-normal text-sm sm:text-base max-w-[380px] mb-6 lg:pr-5'>Please drop in your details. Our team will get in touch with you soon.</p>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div>
                                        <PhoneIcon />
                                    </div>
                                    <p className='text-black font-plusJkarta text-sm sm:text-lg font-normal'>+91 971-100-8738</p>
                                </div>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div>
                                        <MessageIcon />
                                    </div>
                                    <p className='text-black font-plusJkarta text-sm sm:text-lg font-normal'>ishat@magpie.com</p>
                                </div>
                                <div className='flex items-center gap-3 mb-4'>
                                    <div>
                                        <LocationIcon />
                                    </div>
                                    <p className='text-black font-plusJkarta text-sm sm:text-lg font-normal'>Tilakstone  Offices</p>
                                </div>
                                <div className='sm:pl-[44px]'>
                                    <p className='text-sm sm:text-base font-plusJkarta font-semibold text-black mb-[10px]'>India</p>
                                    <p className='text-sm sm:text-base font-plusJkarta text-black opacity-[80%] font-normal max-w-[323px] mb-3'>352. UG Floor. Sultanpur. Mehrauli Gurgaon Road, New Delhi, 110030</p>
                                    <p className='text-sm sm:text-base font-plusJkarta font-semibold text-black mb-[10px]'>Dubai</p>
                                    <p className='text-sm sm:text-base font-plusJkarta text-black opacity-[80%] font-normal max-w-[323px] mb-3'>1805, Corporate Tower. The H Dubai Hotel, 1 Sheikh Zayed, DUBAI</p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[52%] w-full mt-[40px] md:mt-[60px] lg:mt-0'>
                            <form className="lg:mt-[10px]" onSubmit={handleSubmit}>
                                <div className='flex sm:flex-row flex-col sm:gap-4'>
                                    <div className="lg:max-w-[271px] w-full mb-3 sm:mb-[14px]" >
                                        <input className="text-base !text-offGrey font-plusJkarta font-normal p-3 outline-none w-full border-solid border border-lightBlack rounded "
                                            type="text"
                                            placeholder="First Name*"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {formErrors.name && (
                                            <p className="error-message font-plusJkarta">{formErrors.name}</p>
                                        )}
                                    </div>
                                    <div className="lg:max-w-[271px] w-full mb-3 sm:mb-[14px]" >
                                        <input className="text-base !text-offGrey font-plusJkarta font-normal p-3 outline-none w-full border-solid border border-lightBlack rounded"
                                            type="text"
                                            placeholder="Last Name*"
                                            id="lastname"
                                            name="lastname"
                                            value={formData.lastname}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {formErrors.lastname && (
                                            <p className="error-message font-plusJkarta">{formErrors.lastname}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col sm:gap-4">
                                    <div className="lg:max-w-[271px] w-full mb-3 sm:mb-[14px]" >
                                        <input className="text-base !text-offGrey font-plusJkarta font-normal p-3 outline-none w-full border-solid border border-lightBlack rounded"
                                            type="text"
                                            placeholder="Email*"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {formErrors.email && (
                                            <p className="error-message font-plusJkarta">{formErrors.email}</p>
                                        )}
                                    </div>
                                    <div className="lg:max-w-[271px] w-full mb-3 sm:mb-[14px]">
                                        <input className="text-base !text-offGrey font-plusJkarta font-normal p-3 outline-none w-full border-solid border border-lightBlack rounded"
                                            type="text"
                                            placeholder="Company*"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {formErrors.company && (
                                            <p className="error-message font-plusJkarta">{formErrors.company}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col sm:gap-4">
                                    <div className="lg:max-w-[271px] w-full mb-3 sm:mb-[14px]">
                                        <input className="text-base !text-offGrey font-plusJkarta font-normal p-3 outline-none w-full border-solid border border-lightBlack rounded"
                                            type="text"
                                            placeholder="City*"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {formErrors.city && (
                                            <p className="error-message font-plusJkarta">{formErrors.city}</p>
                                        )}
                                    </div>
                                    <div className="lg:max-w-[271px] w-full mb-3 sm:mb-[14px]">
                                        <input className="text-base !text-offGrey font-plusJkarta font-normal p-3 outline-none w-full border-solid border border-lightBlack rounded"
                                            type="text"
                                            placeholder="Customer details*"
                                            id="details"
                                            name="details"
                                            value={formData.details}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                        {formErrors.details && (
                                            <p className="error-message font-plusJkarta">{formErrors.details}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full sm:mb-[20px] mb-[15px]">
                                    <textarea className="resize-none !text-offGrey font-plusJkarta text-base font-normal p-3 outline-none w-full border-solid border border-lightBlack rounded"
                                        type="text"
                                        placeholder="Message*"
                                        id="message"
                                        name="message"
                                        rows="2"
                                        cols="20"
                                        value={formData.message}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {formErrors.message && (
                                        <p className="error-message font-plusJkarta">{formErrors.message}</p>
                                    )}
                                </div>
                                <div className="w-full sm:mb-[32px] mb-[35px]">
                                    <div className="flex gap-3">
                                        <input className="custom-checkbox text-base w-[20px] h-[20px] sm:h-[24px] sm:w-[24px] font-normal p-3 outline-none rounded"
                                            type="checkbox"
                                            id="box"
                                            name="box"
                                            checked={formData.box}
                                            onChange={handleChange}
                                        />
                                        <p className="text-black font-plusJkarta opacity-[80%] text-sm sm:text-base font-normal max-sm:pr-10">I agree to terms of services and privacy policy</p>
                                    </div>
                                    {formErrors.box && (
                                        <p className="error-message font-plusJkarta text-red-500">{formErrors.box}</p>
                                    )}
                                </div>
                                <YelloCommonButton className="flex justify-center" text="Submit" />
                            </form>
                            {showSuccessPopup && (
                                <div className="success-popup fixed top-[50%] left-[50%] h-[200px] sm:h-[280px] md:h-[350px] w-full max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] bg-white border border-solid border-darkYellow p-[20px] sm:p-[40px] rounded  shadow-[0px_0px_10px_0px_#0000001A] flex justify-center items-center flex-col">
                                    <p className="mb-[40px] text-black text-xl sm:text-3xl font-semibold font-plusJkarta text-center leading-lg">Your form submitted successfully!</p>
                                    <div className="flex justify-center items-center">
                                        <div className='w-full'>
                                            <YelloCommonButton onClick={handlePopupClose} className="" text="Close" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactInformation;