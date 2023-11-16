import axios from "axios";

const apiSchedule = axios.create({
  baseURL: process.env.REACT_APP_SCHEDULE_KEY,
});

export async function getClass(classParam) {
  try {
    const response = await apiSchedule.get("", {
      params: { class: classParam },
    });
    return response.data.schedule;
  } catch (error) {
    console.error("Error fetching schedule data:", error);
  }
}
