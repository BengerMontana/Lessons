import { useParams } from 'react-router-dom'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}
const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()

    return (
        <div>
            return <div>{productsObject[parseInt(id!)].title}</div>
            <div
                dangerouslySetInnerHTML={{
                    __html: productsObject[parseInt(id!)].fullDesc,
                }}
            ></div>
            return{' '}
        </div>
    )
}
export default ProductPage
