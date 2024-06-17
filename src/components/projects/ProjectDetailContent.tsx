import { Avatar } from '@nextui-org/react';
import { PlainPlate, Reveal } from '../common';
import { ProjectDetail } from '@/types/project.type';
import { Fragment } from 'react/jsx-runtime';
import { useCallback } from 'react';

type ProjectDetailContentProps = {
    scaleType?: 'actual' | 'viewport';
    data: ProjectDetail;
    color?: string;
};

const ProjectDetailContent = ({ scaleType = 'viewport', data, color = '#000000' }: ProjectDetailContentProps) => {
    const isViewport = scaleType === 'viewport';

    const hasTool = data.tools.length > 0;
    const hasSkill = data.skills.length > 0;

    const classes = {
        container: isViewport ? 'mx-auto mt-[12vh] max-w-[60vw]' : 'mx-auto mt-20 max-w-4xl',
        title: isViewport
            ? 'font-serif text-[10vh] font-bold leading-[100%]'
            : 'font-serif text-6xl font-bold leading-none',
        toolText: isViewport ? 'mt-[1vh] text-[2.5vh] font-light' : 'mt-4 text-xl font-light',
        skillText: isViewport ? 'mt-[5vh] text-[2.5vh] font-light' : 'mt-20 text-xl font-light',
        avatarContainer: isViewport ? 'mt-[5vh] flex items-center gap-[4vh]' : 'mt-20 flex items-center gap-8',
        avatar: isViewport ? 'h-[10vh] w-[10vh]' : 'h-28 w-28',
        avatarText: isViewport ? 'text-[3vh]' : 'text-2xl',
        divider: isViewport ? 'my-[6vh] border-t border-black/50' : 'my-24 border-t border-black/50',
        contentText: isViewport ? 'text-[2.5vh] font-light leading-[150%]' : 'text-xl font-light leading-relaxed',
        image: 'w-full rounded-none',
    };

    const traverse = (node: any, fontSize: string, lineHeight: number, color: string) => {
        const result = {
            ...node,
            fontSize,
            lineHeight,
            color,
        };
        if (node.children) {
            result.children = node.children.map((child: any) => traverse(child, fontSize, lineHeight, color));
        }
        return result;
    };

    const getPlateData = useCallback(() => {
        try {
            const nodeList = JSON.parse(data.content);
            return nodeList.map((node: any) => {
                switch (node.type) {
                    case 'heading-three':
                        node.type = 'h3';
                        break;
                    case 'heading-two':
                        node.type = 'h2';
                        break;
                    case 'heading-one':
                        node.type = 'h1';
                        break;
                    default:
                        node.type = 'p';
                        node.fontSize = scaleType === 'viewport' ? '2.5vh' : '1.25rem';
                }
                node.lineHeight = 2;
                node.color = color;
                return traverse(node, node.fontSize, node.lineHeight, node.color);
            });
        } catch (error) {
            console.log(error);
            return [];
        }
    }, []);

    return (
        <div className={classes.container}>
            <Reveal threshold={0.1}>
                <p className={classes.title}>{data.title}</p>
            </Reveal>

            {hasSkill && (
                <Reveal threshold={0.1} delay={0.2}>
                    <p className={classes.skillText}>
                        SKILLS:{' '}
                        <span className="portfolio-secondary">
                            {data.skills.map((skill, index) => (
                                <Fragment key={skill}>
                                    <span>{skill}</span> {index < data.skills.length - 1 && <span>•</span>}{' '}
                                </Fragment>
                            ))}
                        </span>
                    </p>
                </Reveal>
            )}
            {hasTool && (
                <Reveal threshold={0.1} delay={0.2}>
                    <p className={classes.toolText}>
                        TOOLS:{' '}
                        <span className="portfolio-secondary">
                            {data.tools.map((tool, index) => (
                                <Fragment key={tool}>
                                    <span>{tool}</span> {index < data.tools.length - 1 && <span>•</span>}{' '}
                                </Fragment>
                            ))}
                        </span>
                    </p>
                </Reveal>
            )}

            <Reveal threshold={0.1} delay={0.4}>
                <div className={classes.avatarContainer}>
                    <Avatar src={data.owner?.avatar} className={classes.avatar} />
                    <p className={classes.avatarText}>{data.owner?.name}</p>
                </div>
                <div className={classes.divider}></div>
            </Reveal>

            <Reveal threshold={0.2}>
                <div className="portfolio-text space-y-[6vh]">
                    <PlainPlate data={getPlateData()} />
                </div>
            </Reveal>
        </div>
    );
};

export default ProjectDetailContent;
