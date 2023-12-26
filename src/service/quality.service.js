import httpService from "./http.service";

// точка входа для управления quality
const qualityEndPoint = "quality/";

// сервис получения и удаления данных
const qualityService = {
  // метод получения всех qualities
  fetchAll: async () => {
    const { data } = await httpService.get(qualityEndPoint);
    return data;
  }
};

export default qualityService;
