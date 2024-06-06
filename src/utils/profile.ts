import { Experience } from '@/types/user.type';

export function getExperienceYear(experiences: Experience[]) {
    const millisecondsPerYear = 31536000000;
    let totalExperience = 0;
    for (const exp of experiences) {
        const startDate = new Date(exp.startDate);
        const endDate = exp.endDate ? new Date(exp.endDate) : new Date();
        const durationInMilliseconds = endDate.getTime() - startDate.getTime();
        const durationInYears = durationInMilliseconds / millisecondsPerYear;
        totalExperience += durationInYears;
    }

    return totalExperience.toFixed(1);
}

export function getLatestExperience(experiences: Experience[]) {
    let latest = experiences[0];

    for (const exp of experiences) {
        const isNewExp = exp.endDate && latest.endDate && new Date(exp.endDate) > new Date(latest.endDate);
        if (!latest || !exp.endDate || isNewExp) {
            latest = exp;
        }
    }

    return latest;
}
