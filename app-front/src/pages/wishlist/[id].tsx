import Wishlist from "@/ui/page/Wishlist"
import { GetServerSideProps } from "next"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  try {
    const { data } = await axios.get(`${baseUrl}/wishlist/${id}`)
    return {
      props: data.data,
    }
  } catch (e) {
    console.error(e)
    return {
      props: {},
    }
  }
}

export default Wishlist
