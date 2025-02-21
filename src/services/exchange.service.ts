import axios from 'axios'

const myKey = "8b0d27679be1cef9eff6c0aa"
export const getExchangeRate = async (
    curr1: string,
    curr2: string
  ): Promise<ExchangeRateResponse> => {
    try {
      let baseUrl = `https://v6.exchangerate-api.com/v6/${myKey}/pair/${curr1}/${curr2}`
      const { data } = await axios.get<ExchangeRateResponse>(baseUrl)
      console.log(data)
      return data
    } catch (error) {
      throw error
    }
}

export const getExchangeRateSpecifyAmount = async (
    curr1: string,
    curr2: string,
    amount: string
  ): Promise<ExchangeRateResponse> => {
    try {
      let baseUrl = `https://v6.exchangerate-api.com/v6/${myKey}/pair/${curr1}/${curr2}/${amount}`
      const { data } = await axios.get<ExchangeRateResponse>(baseUrl)
      console.log(data)
      return data
    } catch (error) {
      throw error
    }
}

export interface ExchangeRateResponse {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    target_code: string;
    conversion_rate: number;
    conversion_result?: number;
}