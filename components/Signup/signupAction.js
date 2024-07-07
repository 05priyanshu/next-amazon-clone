"use server";
import { hash } from "bcrypt";
import { connectToDatabase } from "@/utils/DbConnect";
import { users } from "@/models/userModel";

const signUphandler = async (formdata) => {

    try {
      
      const name = formdata.get("name");
      const email = formdata.get("email");
      const password = formdata.get("password");
      if (!name || !email || !password) {
        toast.error("please provide all the fields");
      }
      //connection with database
      await connectToDatabase();
      const user = await users.findOne({ email });
      if (user) toast.error("user already exists");
      
      const hashedPassword = await hash(password, 10);
      
      //create new user
      await users.create({ name, email, password: hashedPassword });
      return true;
    } catch (error) {
      return false;
    }
    // redirect("/login")
  };

  export default signUphandler;