import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import bcrypt from 'bcryptjs/dist/bcrypt';
import { NextResponse } from 'next/server';

export const POST = async req => {
  try {
    const { name, email, password } = await req.json();
    await connectToDB();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    await User.create(newUser);

    return new NextResponse('New user is created', { status: 201 });
  } catch (error) {
      return new NextResponse(error.message, {status: 500});
  }
};
