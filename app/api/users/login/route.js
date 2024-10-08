import User from '@/models/user';
import { connectToDB } from '@/utils/database';
import bcrypt from 'bcryptjs/dist/bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const POST = async req => {
  try {
    const { email, password } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email });

    if (!user) {
      return new NextResponse(JSON.stringify('Incorrent email or password'), { status: 400 });
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return new NextResponse(JSON.stringify('Incorrent email or password'), { status: 400 });
    } else {
       
        const payload={id: user._id}
        const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "23h"});
        const userUpdated = await User.findOneAndUpdate({ email }, { token }, {new: true})
      return new NextResponse(JSON.stringify({user: userUpdated}), {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      });
    }

  } catch (error) {
    return new NextResponse(JSON.stringify(error.message), { status: 500 });
  }
};
