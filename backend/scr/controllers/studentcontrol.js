import { Student } from "../modules/student.module.js";

const generateAccessAndRefereshToken = async (studentid) =>{
    try {
        
        const student = await Student.findById({studentid})
       const accesstoken =   student.GenerateAccessToken();
      const refresstoken =   student.GenerateRefressToken();
      student.refreshtoken = refresstoken
      await student.save({validateBeforeSave : false});
      return {accesstoken , refresstoken }
    } catch (error) {
        console.log("error durning genereting token :::> " , error);
    }
} 


const registerstudent = async (req, res) => {
    try {
        console.log("Incoming Request:", req.body);

        const { name, phoneNo, email, password, collageYear, roomNo } = req.body;

        if (!name || !phoneNo || !email || !password || !collageYear || !roomNo) {
            return res.status(400).json({ message: "All fields are required." });
        }
    
        const existingStudent = await Student.findOne({ $or: [{ email }, { phoneNo }] });
        if (existingStudent) {
            return res.status(400).json({ message: "User with this email or phone number already exists." });
        }



        const newStudent = await Student.create({
            name,
            phoneNo,
            email,
            password,
            collageYear,
            roomNo,

        });



        const createstudent = await Student.findById(newStudent._id).select("-password -refreshtoken");
        if(!createstudent){
            return res.status(500).json({message : "user not created "});

        }

  
 

        console.log("User created successfully:", createstudent);
        return res.status(201).json({ message: "User registered successfully", student:createstudent });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};


const loginstudent = async (req , res) => {
const { phoneNo , password } = req.body ;
if(!phoneNo){
    return res.status(400).json({ message: "Phone number and password are required." });
}

const student = await Student.findOne({phoneNo});
if(!student){
    return res.status(400).json({ message: "Invalid phone number or password." });
}

 const passwordvalid =  student.isPasswordCorrect(password);

 if(!passwordvalid){
    return res.status(400).json({ message: "Invalid phone number or password." });
 }

const {accesstoken , refresstoken } = await generateAccessAndRefereshToken(student._id);

 const loginstudent = await Student.findOne(student._id).select("-password -refreshtoken")
const option = {
    httpOnly: true,
    secure: true,
    sameSite: "Strict", // Prevents CSRF by restricting cross-site cookie usage
};


return res.status(200)
.cookie("accesstoken", accesstoken, option)
.cookie("refresstoken" , refresstoken , option)
.json({ message: "Login successful", student: loginstudent, accesstoken , refresstoken });


};





export { registerstudent , loginstudent };





// ddd


