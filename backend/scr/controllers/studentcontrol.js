import { Student } from "../modules/student.module.js";

const registerstudent = async (req, res) => {
    try {
        console.log("Incoming Request:", req.body);

        const { name, phoneNo, email, password, collageYear, roomNo } = req.body;

        
    
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



        console.log("User created successfully:", newStudent);
        return res.status(201).json({ message: "User registered successfully", student: newStudent });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};

export { registerstudent };
