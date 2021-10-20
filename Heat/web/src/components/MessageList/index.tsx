import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { io } from "socket.io-client";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

type Message = {
	id: string;
	text: string;
	user: {
		name: string;
		avatar_url: string;
	};
};

const messagesQueue: Message[] = [];

const socket = io("http://localhost:4000");
socket.on("new_message", (newMessage: Message) => {
	messagesQueue.push(newMessage);
});

export function MessageList() {
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		setInterval(() => {
			if (messagesQueue.length > 0) {
				setMessages((prevState) => [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean));
				messagesQueue.shift();
			}
		}, 3000);
	}, []);

	useEffect(() => {
		api.get<Message[]>("messages/last3").then((res) => setMessages(res.data));
	}, []);

	return (
		<div className={styles.messageListWrapper}>
			<img src={logo} alt="DoWHile 2021" />
			<ul className={styles.messageList}>
				{messages.map((message) => {
					return (
						<li key={message.id.split("-").join("")} className={styles.message}>
							<p className={styles.messageContent}>{message.text}</p>
							<div className={styles.messageUser}>
								<div className={styles.userImage}>
									<img src={message.user.avatar_url} alt={message.user.name} />
								</div>
								<span>{message.user.name}</span>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}