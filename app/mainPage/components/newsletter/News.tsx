'use client'
import React, {FormEvent, useState} from "react";

const News: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle the form submission here, such as sending data to an API
    console.log('your email:', email);
    setEmail('');
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setEmail(event.target.value)
  };
    return (
      
        <div id="benefits2" className="py-8 bg-slate-200">    
          <h1 className="text-3xl font-bold text-center p-4">
            Would you like to stay informed about our activities? 
          </h1>
          <h3 className="text-xl text-center mb-4 p-4">
            Please  enter your <strong> email address </strong> here. 
          </h3>

          <div className="container mx-auto p-4 ">
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
              <div className="relative flex items-center border-2 rounded-full overflow-hidden">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 outline-none rounded-l-full truncate lg:pr-16 pr-32"
                  placeholder="example@example.com"
                  onFocus={(e) => e.target.placeholder = ''}
                  onBlur={(e) => e.target.placeholder = 'example@example.com'}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 bg-green-500 text-white px-4 py-2 rounded-r-full hover:bg-green-700"
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      
    )
  }
  
  export default News