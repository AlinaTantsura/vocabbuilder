import User from "@/models/user";
import { connectToDB } from "./database";
import { NextResponse } from "next/server";

export const isAuth = async (authorization) => {
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") return new NextResponse("Not authorized", { status: 401 });

    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        await connectToDB();
        const user = await User.findById(id);
        if (!user || !user.token || user.token !== token) {
            return new NextResponse("Not authorized", { status: 401 })

        }
        else {
            next();
        }

    } catch (error) {
        return new NextResponse(error.message, { status: 500 })
    }
}