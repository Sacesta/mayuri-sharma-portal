import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token)
            return res.status(401).send({ success: false, message: 'Missing Token' });
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err)
                return res.status(401).send({ success: false, message: 'Invalid Token' });
            req.user = { id: decoded['id'] };
            next();
        });
    }
    catch (error) {
        console.error('Error in auth midleware :-', error);
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};
export default auth;
//# sourceMappingURL=auth.js.map