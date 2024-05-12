import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Notification from './Notification';

const NotificationsContent = () => {
    return (
        <div className="-mx-5 -mb-4 overflow-y-auto overflow-x-hidden">
            <Tabs defaultValue="all">
                <TabsList className="mx-5 mt-4 w-[calc(100%-40px)]">
                    <TabsTrigger value="all" className="flex-1">
                        All
                    </TabsTrigger>
                    <TabsTrigger value="following" className="flex-1">
                        Following
                    </TabsTrigger>
                    <TabsTrigger value="archive" className="flex-1">
                        Archive
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    {Array(4)
                        .fill(0)
                        .map((_, index) => (
                            <Notification key={index} />
                        ))}
                    <button className="mb-4 w-full text-center">See all notifications</button>
                </TabsContent>
                <TabsContent value="following"></TabsContent>
                <TabsContent value="archive"></TabsContent>
            </Tabs>
        </div>
    );
};

export default NotificationsContent;
