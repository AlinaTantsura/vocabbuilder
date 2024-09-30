import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import bcrypt from 'bcryptjs/dist/bcrypt';
import { NextResponse } from 'next/server';

export const POST = async req => {
  try {
    const { name, email, password } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email });
    if(user) return new NextResponse(JSON.stringify("User is already exist"), {status: 400});

    const newUser = new User({
      name,
      email,
      password,
    });
   
    await newUser.validate();
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create(newUser);
    await User.findOneAndUpdate({email}, {password: hashedPassword})

    return new NextResponse(JSON.stringify('New user is created'), { status: 201 });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }
      return new NextResponse(JSON.stringify(error.message), {status: 500});
  }
};
