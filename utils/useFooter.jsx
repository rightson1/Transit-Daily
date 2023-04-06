import { useQuery } from "react-query";
import { client } from "./client"
export const useGetFooter = () => {
    return useQuery("footer", async () => {
        const response = await client.getEntries({ content_type: "footer" })
        return response?.items?.[0]?.fields
    }), {
        staleTime: 1000 * 60 * 60,
    }
}