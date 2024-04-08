import { Question } from '@/components/jobDetail';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTrigger,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Image } from '@nextui-org/react';
import {} from '@radix-ui/react-alert-dialog';
import { TbMicrophone2, TbVideo } from 'react-icons/tb';

const Questions = () => {
    return (
        <div className="flex-1 text-sm">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl">Questions</h1>
                    <p className="mt-2 text-sm text-text/70">Add question to evaluate candidates.</p>
                </div>

                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="secondary" className="rounded-lg">
                            Add a question
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-h-[90vh] w-[600px] max-w-full overflow-y-auto">
                        <AlertDialogHeader>
                            <AlertDialogTitle>Add questions</AlertDialogTitle>
                            <AlertDialogDescription>
                                Create a new question and add to your library
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <div className="grid gap-2">
                            <Label htmlFor="Title">Title</Label>
                            <Input id="Title" type="Title" placeholder="A brief question title here" required />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <Label htmlFor="category">Category</Label>
                                <Select name="category">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="behavioral">Behavioral</SelectItem>
                                        <SelectItem value="technical">Technical</SelectItem>
                                        <SelectItem value="design">Design</SelectItem>
                                        <SelectItem value="experience">Experience</SelectItem>
                                        <SelectItem value="motivation">Motivation</SelectItem>
                                        <SelectItem value="communication">Communication</SelectItem>
                                        <SelectItem value="opinion">Opinion</SelectItem>
                                        <SelectItem value="performance-based">Performance-based</SelectItem>
                                        <SelectItem value="brainteaser">Brainteaser</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="type">Type</Label>
                                <Select name="type">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="audio">
                                            <div className="flex items-center gap-2">
                                                <TbMicrophone2 /> Audio
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="video">
                                            <div className="flex items-center gap-2">
                                                <TbVideo /> Video
                                            </div>
                                        </SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="limit">Limit</Label>
                                <Select name="limit">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Limit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1 min</SelectItem>
                                        <SelectItem value="3">3 min</SelectItem>
                                        <SelectItem value="5">5 min</SelectItem>
                                        <SelectItem value="7">7 min</SelectItem>
                                        <SelectItem value="10">10 min</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description (optional)</Label>
                            <Textarea id="description" placeholder="Give a description for this question" required />
                        </div>

                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-black text-white hover:bg-opacity-90 hover:text-white">
                                Confirm
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div>
                <p className="mb-1 mt-3 font-semibold">Your library</p>
                <div className="grid grid-cols-3 gap-4">
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                    <Question />
                </div>
                <p className="mb-1 mt-4 font-semibold">Our templates</p>
                <div className="grid grid-cols-3 gap-4">
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center p-20 text-sm">
                <Image src="/flowerlike.png" width={240} height={240} />
                <p>You have no question yet.</p>
            </div>
        </div>
    );
};

export default Questions;
