import { Report, ReportCreate } from '@/types/report.type';
import { baseAxios } from './base';

export const createReportService = async (data: ReportCreate) => (await baseAxios.post('/reports', data)).data;
export const listReportsService = async () => (await baseAxios.get<Report[]>('/reports')).data;
export const updateReportService = async (id: string, data: Partial<Report>) =>
    (await baseAxios.patch(`/reports/${id}`, data)).data;
