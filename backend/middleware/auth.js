import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ success: false, message: "Not Authorized, login again!" });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("Token verification error:", error);
        res.status(400).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
