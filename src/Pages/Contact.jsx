import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

// ICONS
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";


const Contact = () =>{

    // EMAIL SEND
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
            emailjs.sendForm('service_ehvonut', 'template_xg88qyq', form.current, 'Z9LC9eeqfJb8vTkL7')
            .then((result) => {
                console.log(result.text);
            });
                console.log(error.text);
            };

    return(
        <div className=" h-full">
            <Nav/>
            <h1 className=" px-12 p-5 font-semibold text-transparent text-center md:text-left text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                Contact me
            </h1>

            {/* Contact Form */}
            <section className=" text-black flex justify-center mt-3">
                <form id="form" ref={form} onSubmit={sendEmail} className="space-y-3 w-1/2">

                    <div className=" ">
                        <label className="block mb-2 text-sm md:text-lg font-medium text-white">Your name</label>
                        <input type="text" 
                                name="name" 
                                className=" p-1 rounded-md w-full" 
                                placeholder="E. g. Joe"
                                required />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm md:text-lg font-medium text-white">Your email</label>
                        <input type="email" 
                                name="from_name" 
                                placeholder="name@mail.com" 
                                className="p-1 rounded-md w-full" 
                                required />                        
                    </div>

                    <div>
                        <label className="block mb-2 text-sm md:text-lg font-medium text-white">Message</label>
                        <textarea name="message" 
                                    placeholder="Leave a comment..." 
                                    rows={4} 
                                    className="w-full p-1 rounded-md" 
                                    required />
                    </div>

                    {/* Input Submit */}
                    <input type="submit" 
                            value="Send" 
                            className=" w-full bg-gradient-to-l from-orange-800 to-yellow-700 px-4 py-1 font-bold text-white text-xl rounded hover:text-black duration-500 cursor-pointer" 
                            />

                </form>
            </section>

            {/* Accounts */}
                <div className="flex justify-center px-14 mt-10">
                    <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mr-4 rounded"
                            type="button"
                            >
                        <a href="https://www.instagram.com/tsuchanek_/" target="_blank"><SiInstagram/></a>
                    </button>

                    <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                            type="button"
                            >
                        <a href="https://github.com/suchanek-tom" target="_blank"> <SiGithub/> </a>
                    </button>

                    <button className="bg-gradient-to-l from-yellow-900 to-yellow-700 px-3 py-2 font-semibold text-2xl hover:text-black duration-500 mx-4 rounded"
                            type="button"
                            >
                        <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-suchanek/" target="_blank"><SiLinkedin/></a>
                    </button>
                </div>


            {/* Footer */}
            <div className=" lg:fixed bottom-0 left-0 w-screen">
                <Footer />
            </div>

        </div>
    )
}

export default Contact