'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';

import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Color, Size } from '@/types';

type Props = {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
};

export default function Filter({ data, name, valueKey }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  /**
   * The function updates the URL query parameters based on the provided ID and navigates to the updated
   * URL using React Router.
   * @param {string} id - The `id` parameter is a string that represents the value to be assigned to the
   * `valueKey` in the query object.
   */
  const onClick = (id: string) => {
    // !Object with values
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
