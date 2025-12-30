import api from "./axios";

export const getSummaryApi = () => {
  return api.get("/dashboard/summary");
};
export  const getAccountingDataApi = (sort) => {
  return api.get(`/dashboard/accounting-earnings?sort=${sort}`);
}

export const getProjectsApi = (pageNo, status) => {
  return api.get('/dashboard/projects', {
    params: {
        page: pageNo,
        status: status
    }
  });
}

export const getBalanceChartApi = () => {
  return api.get("/dashboard/balance-chart");
}

export const getDailyScheduleApi = (date) => {
  return api.get("/dashboard/daily-schedule", {
    params: { date }
  });
};