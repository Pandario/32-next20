'use client'
import { FormEvent, useState } from "react"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevState =>({
            ...prevState, [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });

    }
    return (
        <div className="py-8 bg-slate-200 px-2">

            <div className="flex justify-center ">
            
                <div className="flex flex-col items-center p-4 my-1 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold mb-4 text-center">Want to make reservation?</h1>
                    <div className="flex justify-center my-4">
                        <div className="w-36 h-2 bg-green-700 rounded-full shadow-lg"></div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Have any other questions?</h2>
                    <h2 className="text-xl font-bold mb-4 text-center">Just send us a message!</h2>
                    

                    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" name='name'
                            className="p-2 border border-gray-300 h-10 rounded-lg" 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    
                        <input type="email" placeholder="Email" name='email'
                            className="p-2 border border-gray-300 h-10 rounded-lg"
                            value={formData.email}
                            onChange={handleChange} 
                        />
                        <textarea placeholder="Your Message" name='message'
                            className="p-2 border border-gray-300 h-32 rounded-lg resize-none"
                            value={formData.message}
                            onChange={handleChange} 
                        >

                        </textarea>
                        <button type="submit" 
                            className="p-2 bg-green-700 border  hover:bg-green-500 text-white h-10 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                
                </div>
            </div>
        </div>
    )
}