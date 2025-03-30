import React, { useState } from 'react'

const UserRegisterPage = () => {

  const [name, setName] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confoPassword, setConfoPassword] = useState("")
  const [collageYear, setCollageYear] = useState("")
  const [roomNo, setRoomNo] = useState("")
  const [formerror, setFormerror] = useState("")
  const [error, setError] = useState("")

  const SubmitHandler = async (e) => {

    e.preventDefault();

    if (phoneNo.length != 14) {
      setFormerror("Please enter a valid 10-digit phoneNo number");
      return
    }

    if (!["1", "2", "3", "4"].includes(collageYear)) {
      setFormerror("Please enter a valid college collageYear");
      return
    }

    if (password.length < 8) {
      setFormerror("Password must be at least 8 characters long");
      return
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    if (!(/[!@#$%^&*(){}":?><]/.test(password))) {
      setFormerror("Password must contain a special character (e.g., !@#$%^&*'?)");
      return
    }

    if (!(/[1234567890]/.test(password))) {
      setFormerror("Password must contain a number");
      return
    }

    if (password != confoPassword) {
      setFormerror("Password and confirm password must match");
      return
    }

    try {

      const studentdata = { name, phoneNo, email, password, confoPassword, collageYear, roomNo }
      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        body: JSON.stringify(studentdata),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      })

      const result = await response.json()
      if (!response) {
        console.log(result.error);
        setError(result.message);

      }
      if (response) {
        console.log(result);

        if (result.message) {
          alert(`${result.message}`)
          
        }

        setName("");
        setPhoneNo("");
        setEmail("");
        setPassword("");
        setConfoPassword("");
        setCollageYear("");
        setRoomNo("");
        setFormerror("")

      }
 

    } catch (error) {
      console.log(error.message);
    }

    console.log(name);
    console.log(phoneNo);
    console.log(password);
    console.log(confoPassword);
    console.log(collageYear);
    console.log(roomNo);

  }


  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 pb-11 pt-10 ">
        <div className="flex flex-col items-center justify-center  px-6 py-8  mx-auto md:min-h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            SR-XIT
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={SubmitHandler} action="#">
                <div>
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                  <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                </div>
                <div>
                  <label htmlFor="Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    phoneNo no.
                  </label>
                  <input
                    onChange={(e) => {

                      const inputValue = e.target.value;
                      if (inputValue.startsWith("+91 ")) {
                        setPhoneNo(inputValue);
                      } else {
                        setPhoneNo("+91 " + inputValue.replace("+91", ""));
                      }
                    }}
                    value={phoneNo}
                    maxLength={14}
                    type="tel"
                    name="phoneNo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Number"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Collage collageYear</label>
                  <input type="Number" onChange={(e) => setCollageYear(e.target.value)} value={collageYear} name="Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your collage collageYear" required />
                </div>
                <div>
                  <label htmlFor="Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Number</label>
                  <input type="Number" onChange={(e) => setRoomNo(e.target.value)} value={roomNo} name="Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Hostel Room Number" required />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input type="password" onChange={(e) => setConfoPassword(e.target.value)} value={confoPassword} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                {formerror && (<p className='w-full h-6  text-red-600 text-sm '>{formerror}</p>)}

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-slate-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


export default UserRegisterPage