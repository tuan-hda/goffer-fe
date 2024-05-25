import { TbCheck, TbPhotoPlus } from 'react-icons/tb';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import useNewProjectStore from '@/stores/newProject';
import { Textarea } from '../ui/textarea';
import { useMemo, useRef, useState } from 'react';
import { Image } from '@nextui-org/react';
import { MyImageElement } from '../editor/plate-types';

const AdditionalInformation = () => {
    const [info, setInfo] = useNewProjectStore((state) => [state.info, state.setInfo]);
    const [uploadImage, setUploadImage] = useState<string | null>(null);

    const images = useMemo(() => {
        const results: string[] = [];
        info.content.forEach((node) => {
            if (node.type === 'img') {
                results.push((node as MyImageElement).url);
            }
        });
        return results;
    }, [info.content]);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="flex max-w-[400px] flex-1 flex-col">
            <p className="mb-7">
                Add additional information for your project. This will help others understand your project better.
            </p>
            <input
                type="file"
                ref={ref}
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            setInfo((prev) => ({ ...prev, cover: e.target?.result as string }));
                            setUploadImage(e.target?.result as string);
                            ref.current!.files = null;
                        };
                        reader.readAsDataURL(file);
                    }
                }}
            />

            <Label>Cover Image</Label>
            <Tabs defaultValue="upload" className="mt-2 w-[400px]">
                <TabsList>
                    <TabsTrigger value="upload">Upload</TabsTrigger>
                    <TabsTrigger value="from-your-project">From your project</TabsTrigger>
                    <TabsTrigger value="template">Template</TabsTrigger>
                </TabsList>
                <TabsContent value="upload">
                    <p>
                        Your image should be at least 1440x1080. The image will be automatically resized to 4:3
                        resolution.
                    </p>
                    <button
                        onClick={() => ref.current?.click()}
                        className="mt-4 flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl bg-gray-100"
                    >
                        {uploadImage ? (
                            <Image
                                src={uploadImage}
                                className="w-full"
                                classNames={{
                                    wrapper: 'overflow-hidden h-full w-full !max-w-full',
                                    img: 'rounded-2xl object-cover h-full object-center',
                                }}
                            />
                        ) : (
                            <>
                                <TbPhotoPlus className="text-xl text-gray-600" />
                                <p className="mt-2">Upload an image</p>
                            </>
                        )}
                    </button>
                </TabsContent>
                <TabsContent value="from-your-project">
                    {images.length === 0 ? (
                        'Unfortunately, your project does not include any images.'
                    ) : (
                        <div className="grid grid-cols-3 gap-3 pt-2">
                            {images.map((url, index) => (
                                <button
                                    onClick={() => {
                                        setInfo((prev) => ({ ...prev, cover: url }));
                                    }}
                                    className="relative aspect-[4/3] w-full"
                                    key={index}
                                >
                                    <img src={url} className="rounded-xl" />
                                    {url === info.cover && (
                                        <div className="absolute bottom-1 right-1 rounded-full bg-white/80 p-1 shadow-small backdrop-blur-md">
                                            <TbCheck />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </TabsContent>
                <TabsContent value="template">
                    Select one from our templates.
                    <div className="grid grid-cols-3 gap-3 pt-2">
                        {Array(9)
                            .fill(null)
                            .map((_, index) => {
                                const gradientUrl = `/gradients/0${index + 1}.png`;
                                return (
                                    <button
                                        onClick={() => {
                                            setInfo((prev) => ({ ...prev, cover: gradientUrl }));
                                        }}
                                        className="relative aspect-[4/3] w-full"
                                        key={index}
                                    >
                                        <img src={gradientUrl} className="h-full w-full rounded-xl object-cover" />
                                        {gradientUrl === info.cover && (
                                            <div className="absolute bottom-1 right-1 rounded-full bg-white/80 p-1 shadow-small backdrop-blur-md">
                                                <TbCheck />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                    </div>
                </TabsContent>
            </Tabs>

            <div className="my-7 border-t" />

            <Label>Description</Label>
            <Textarea
                value={info.description}
                onChange={(e) => {
                    if (e.currentTarget.value.length <= 200)
                        setInfo((prev) => ({ ...prev, description: e.currentTarget.value }));
                }}
                placeholder="Some insights of your project..."
                className="mt-2 min-h-[140px] rounded-xl border-none shadow-small"
            />
            <p className="ml-auto mt-2 text-xs">{info.description.length}/200</p>
        </div>
    );
};

export default AdditionalInformation;
