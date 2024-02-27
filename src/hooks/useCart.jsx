import { useQuery } from '@tanstack/react-query';


const useCart = () => {
    const {refetch, data : cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async()=>{
            const response = await fetch(`http://localhost:5000/carts`)
            return response.json()
        }

      })
      return [cart,refetch]
};

export default useCart;