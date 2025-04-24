import axios from "../axios";

const handleForm = (
  endpoint: string | number,
  currentPage: number,
): Promise<any> => {
  return axios.get(`/form/${endpoint}?page=${currentPage}`);
};

export { handleForm };

export async function getEndpointPost(): Promise<any> {
  try {
    const response = await axios.get(`/post`);
    if (response.status >= 200) return response.data;
  } catch (error) {
    throw error;
  }
}
