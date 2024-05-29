export class RocketChat {
    private socket: WebSocket | null = null;
    private messageQueue: any[] = [];

    constructor(private url: string) {}

    connectToServer() {
        this.socket = new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log('Connect successfully!');
            this.flushMessageQueue();
        };

        this.socket.onclose = () => {
            console.log('Loss connection');
        };

        this.socket.onerror = (error) => {
            console.error('Connect error:', error);
        };
    }

    login(user: string, password: string) {
        if (this.socket) {
            var loginRequest = {
                msg: 'method',
                method: 'login',
                id: '42',
                params: [{ user, password }],
            };
            this.socket.send(JSON.stringify(loginRequest));
        }
    }

    keepAlive() {
        setInterval(() => {
            if (this.socket && this.socket.readyState === WebSocket.OPEN) {
                this.socket.send(JSON.stringify({ msg: 'ping' }));
            }
        }, 30000); // Gửi ping mỗi 30 giây
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }

    onMessage(callback: (message: any) => void) {
        if (this.socket) {
            this.socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                callback(message);
            };
        }
    }

    sendMessage(message: any) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(message));
        } else {
            this.messageQueue.push(message); // Thêm vào hàng đợi nếu chưa kết nối
        }
    }

    getRoomList(userId: string) {
        const message = {
            msg: 'method',
            method: 'subscriptions/get',
            params: [],
            id: '2',
        };
        this.sendMessage(message);
    }

    subscribeRoomMessages(roomId: string) {
        const message = {
            msg: 'sub',
            id: 'sub-room-messages',
            name: 'stream-room-messages',
            params: [roomId, false],
        };
        this.sendMessage(message);
    }

    private flushMessageQueue() {
        while (this.messageQueue.length > 0) {
            const message = this.messageQueue.shift();
            this.sendMessage(message);
        }
    }
}
