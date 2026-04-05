import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) { 
      return res.status(400).json({ message: "Name, email and password are required" });
    }
    if (password.length < 6) { 
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) { 
      return res.status(400).json({ message: "User already exists"}); 
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });
    res.status(201).json(user);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) { 
      return res.status(400).json({ message: "Email and password are required"});
    }

    const user = await User.findOne({ email });
    if (!user) { 
      return res.status(400).json({ message: "User not found" });
    }
    if (!user.isActive) { 
      return res.status(403).json({ message: "User is inactive" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { 
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign( 
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h",issuer: "financeapp" }
    );
    
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};