import { Request, Response } from "express";
import { UserDetailsService } from "../../services/user/UserDetailsService";

class UserDetailsController {
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        const userDetailsService = new UserDetailsService();

        const user = await userDetailsService.execute(user_id) 

        return res.status(200).json(user);
    }
}

export { UserDetailsController }