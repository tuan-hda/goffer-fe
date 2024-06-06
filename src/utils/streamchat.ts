import config from "@/configs/config";
import { User } from "@/types/user.type";
import { StreamChat } from "stream-chat";

export const client = new StreamChat(config.STREAM_KEY);

export const connectStreamUser = async (user: User) => {
    await client.connectUser(
        {
            id: user.id,
            name: user.name,
            image: user.avatar,
        },
        client.devToken(user.id),
    );
};
