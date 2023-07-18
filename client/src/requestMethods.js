import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjA1MWMxM2E2ZWI0ZDJmYmQ4ZWViNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTYxMTY3OCwiZXhwIjoxNjg5ODcwODc4fQ.JNGdzJ-AFyCyvJVZb2IPHRXXjKd0t09BdF1a2gsNfLg"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });


