import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
	async handle(req: Request, res: Response) {
		const { user_id } = req;

		const service = new ProfileUserService();
		const result = await service.execute(user_id);
		console.log(user_id);

		return res.json(result);
	}
}

export { ProfileUserController };
