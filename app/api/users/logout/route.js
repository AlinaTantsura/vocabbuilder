import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
    // const value = req.headers['authorization'];
    const authorization = req.headers.get('authorization')
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") return new NextResponse("Not authorized", { status: 401 })
    
    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        await connectToDB();
        const user = await User.findById(id);
        if (!user || !user.token || user.token !== token) {
            return new NextResponse("Not authorized", { status: 401 })

        }

        await User.findByIdAndUpdate(id, {token: null});

        return new NextResponse(null, { status: 204 })

    } catch (error) {
        return new NextResponse(error.message, { status: 500 })
    }
}