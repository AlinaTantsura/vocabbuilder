import Category from '@/models/categories';
import { isAuth } from '@/utils/authorization';
import { connectToDB } from '@/utils/database';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
    const authorization = req.headers.get('authorization')
  try {
      await isAuth(authorization);
      connectToDB();
      const categories = await Category.find()
      const result = categories.map(category => category.name);

    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
      return new NextResponse(JSON.stringify(error.message), {status: 500});
  }
};