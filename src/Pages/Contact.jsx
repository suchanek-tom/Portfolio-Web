import Nav from "../components/Nav"
import Footer from "../components/Footer"
import TextareaField from "../components/Inputs/TextareaField";
import InputField from "../components/Inputs/InputField";
import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

// ICONS
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";



const Contact = () => {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ehvonut', 'template_xg88qyq', values, 'Z9LC9eeqfJb8vTkL7')
          .then(response => {
            console.log('SUCCESS!', response);
            setValues({
              fullName: '',
              email: '',
              message: ''
            });
            setStatus('SUCCESS');
          }, error => {
            console.log('FAILED...', error);
          });
      }

      useEffect(() => {
        if(status === 'SUCCESS'){
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
      }, [status]);

      const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
    }

    // EMAIL SEND
    // const form = useRef();

    // const sendEmail = (e) => {
    //         e.preventDefault();
    //         emailjs.sendForm('service_ehvonut', 'template_xg88qyq', form.current, 'Z9LC9eeqfJb8vTkL7')
    //         .then((response) => {
    //             console.log('SUCCES', response);
    //         });
    //             console.log(error.text);
    //         };

    return(
        <div className=" lg:h-screen h-full">

            <Nav/>

                <h1 className=" px-12 p-5 font-semibold text-transparent text-center md:text-left text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-900">
                    Contact me
                </h1>

            {/* Contact Form */}
            <section className=" text-black flex justify-center mt-3">
                {status && renderAlert()}
                <form onSubmit={handleSubmit} className="space-y-3 w-1/2">

                    {/* <div className=" ">
                        <label className="block mb-2 text-sm md:text-lg font-medium text-white">Your name</label>
                        <input type="text" 
                                value={values.firstName}
                                handleChange={handleChange}
                                className=" p-1 rounded-md w-full" 
                                placeholder="E. g. Joe"
                                required />
                    </div> */}

                    {/* NAME */}
                    <InputField 
                                value={values.Name}
                                handleChange={handleChange}
                                label="Your name"
                                name="Name"
                                type="text"
                                placeholder="E. g. Joe"
                    />

                    {/* EMAIL */}
                    <InputField
                                value={values.email}
                                handleChange={handleChange}
                                label="E-mail"
                                name="email"
                                type="email"
                                placeholder="name@mail.com" 
                    />

                    {/* <div>
                        <label className="block mb-2 text-sm md:text-lg font-medium text-white">Your email</label>
                        <input type="email" 
                                value={values.email}
                                label="Your email"
                                handleChange={handleChange}
                                placeholder="name@mail.com" 
                                className="p-1 rounded-md w-full" 
                                required />                        
                    </div> */}

                    {/* <div>
                        <label className="block mb-2 text-sm md:text-lg font-medium text-white">Message</label>
                        <textarea 
                                    placeholder="Leave a comment..." 
                                    value={values.message}
                                    handleChange={handleChange}
                                    rows={4} 
                                    className="w-full p-1 rounded-md" 
                                    required />
                    </div> */}

                    <TextareaField  value={values.message} 
                                    handleChange={handleChange} 
                                    label="Your message" 
                                    name="message"    
                     />

              
                    {/* <input type="submit" 
                            value="Send" 
                            className=" w-full bg-gradient-to-l from-orange-800 to-yellow-700 px-4 py-1 font-bold text-white text-xl rounded hover:text-black duration-500 cursor-pointer" 
                            /> */}

                            <button type="submit"
                                    className="w-full bg-gradient-to-l from-orange-800 to-yellow-700 px-4 py-1 font-bold text-white text-xl rounded hover:text-black duration-500 cursor-pointer"
                            >Send 
                            </button>
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

const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
      <p>your message submitted successfully</p>
    </div>
  )


export default Contact