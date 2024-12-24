import Wishlist from "@/ui/page/Wishlist"
import { GetServerSideProps } from "next"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/wishlist/${id}`)
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
