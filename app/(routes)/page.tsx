import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

export default async function HomePage({}) {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('563686df-c8f4-4d1f-887d-34d978c40383');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
